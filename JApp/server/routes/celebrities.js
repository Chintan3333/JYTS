const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// Get all celebrities
router.get('/', async (req, res) => {
    try {
        const celebrities = await Celebrity.find().sort({ createdAt: -1 });
        res.json(celebrities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single celebrity
router.get('/:id', async (req, res) => {
    try {
        const celebrity = await Celebrity.findById(req.params.id);
        if (!celebrity) {
            return res.status(404).json({ message: 'Celebrity not found' });
        }
        res.json(celebrity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new celebrity
router.post('/', async (req, res) => {
    const celebrity = new Celebrity(req.body);
    try {
        const newCelebrity = await celebrity.save();
        res.status(201).json(newCelebrity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update celebrity
router.put('/:id', async (req, res) => {
    try {
        const celebrity = await Celebrity.findById(req.params.id);
        if (!celebrity) {
            return res.status(404).json({ message: 'Celebrity not found' });
        }

        Object.assign(celebrity, req.body);
        celebrity.updatedAt = Date.now();

        const updatedCelebrity = await celebrity.save();
        res.json(updatedCelebrity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete celebrity
router.delete('/:id', async (req, res) => {
    try {
        const celebrity = await Celebrity.findById(req.params.id);
        if (!celebrity) {
            return res.status(404).json({ message: 'Celebrity not found' });
        }

        await Celebrity.deleteOne({ _id: req.params.id });
        res.json({ message: 'Celebrity deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get analysis data
router.get('/analysis/planetary-positions', async (req, res) => {
    try {
        const { category } = req.query;
        let query = {};
        if (category && category !== 'all') {
            query.category = category;
        }
        const celebrities = await Celebrity.find(query);

        // Initialize counters for signs and houses
        const signCounts = {};
        const houseCounts = {};
        const signPlanetDistribution = {};
        const housePlanetDistribution = {};
        const planetAnalysis = {
            sun: { signs: {}, houses: {} },
            moon: { signs: {}, houses: {} },
            mars: { signs: {}, houses: {} },
            mercury: { signs: {}, houses: {} },
            jupiter: { signs: {}, houses: {} },
            venus: { signs: {}, houses: {} },
            saturn: { signs: {}, houses: {} },
            rahu: { signs: {}, houses: {} },
            ketu: { signs: {}, houses: {} }
        };

        // Initialize aspect analysis with aspect types
        const aspectAnalysis = {
            totalAspects: 0,
            aspects: {},
            planetAspects: {
                sun: { aspects: {}, total: 0, aspectTypes: { '7th': 0 } },
                moon: { aspects: {}, total: 0, aspectTypes: { '7th': 0 } },
                mars: { aspects: {}, total: 0, aspectTypes: { '7th': 0, '4th': 0, '8th': 0 } },
                mercury: { aspects: {}, total: 0, aspectTypes: { '7th': 0 } },
                jupiter: { aspects: {}, total: 0, aspectTypes: { '7th': 0, '5th': 0, '9th': 0 } },
                venus: { aspects: {}, total: 0, aspectTypes: { '7th': 0 } },
                saturn: { aspects: {}, total: 0, aspectTypes: { '7th': 0, '3th': 0, '10th': 0 } },
                rahu: { aspects: {}, total: 0, aspectTypes: { '7th': 0, '5th': 0, '9th': 0 } },
                ketu: { aspects: {}, total: 0, aspectTypes: { '7th': 0, '5th': 0, '9th': 0 } }
            },
            aspectTypes: {
                '7th': { total: 0, aspects: {} },
                '4th': { total: 0, aspects: {} },
                '8th': { total: 0, aspects: {} },
                '5th': { total: 0, aspects: {} },
                '9th': { total: 0, aspects: {} },
                '3th': { total: 0, aspects: {} },
                '10th': { total: 0, aspects: {} }
            }
        };

        // Define planet-specific aspects
        const planetAspects = {
            mars: [4, 8],    // 4th and 8th aspects
            jupiter: [5, 9], // 5th and 9th aspects
            saturn: [3, 10], // 3rd and 10th aspects
            rahu: [5, 9],    // 5th and 9th aspects
            ketu: [5, 9]     // 5th and 9th aspects
        };

        // Add zodiac sign lords mapping
        const signLords = {
            'Aries': 'mars',
            'Taurus': 'venus',
            'Gemini': 'mercury',
            'Cancer': 'moon',
            'Leo': 'sun',
            'Virgo': 'mercury',
            'Libra': 'venus',
            'Scorpio': 'mars',
            'Sagittarius': 'jupiter',
            'Capricorn': 'saturn',
            'Aquarius': 'saturn',
            'Pisces': 'jupiter'
        };

        // Initialize zodiac sign exchange analysis
        const zodiacExchangeAnalysis = {
            totalExchanges: 0,
            exchanges: {},
            planetExchanges: {
                sun: { exchanges: {}, total: 0 },
                moon: { exchanges: {}, total: 0 },
                mars: { exchanges: {}, total: 0 },
                mercury: { exchanges: {}, total: 0 },
                jupiter: { exchanges: {}, total: 0 },
                venus: { exchanges: {}, total: 0 },
                saturn: { exchanges: {}, total: 0 }
            }
        };

        // Initialize conjunction analysis
        const conjunctionAnalysis = {
            sun: { alone: 0, conjunctions: {} },
            moon: { alone: 0, conjunctions: {} },
            mars: { alone: 0, conjunctions: {} },
            mercury: { alone: 0, conjunctions: {} },
            jupiter: { alone: 0, conjunctions: {} },
            venus: { alone: 0, conjunctions: {} },
            saturn: { alone: 0, conjunctions: {} },
            rahu: { alone: 0, conjunctions: {} },
            ketu: { alone: 0, conjunctions: {} }
        };


        // Initialize conjunction lords analysis
        const conjunctionLordsAnalysis = [
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} },
            { alone: 0, conjunctions: {} }
        ];

        // House lord mapping
        const houseLords = {
            'Aries': 'mars',
            'Taurus': 'venus',
            'Gemini': 'mercury',
            'Cancer': 'moon',
            'Leo': 'sun',
            'Virgo': 'mercury',
            'Libra': 'venus',
            'Scorpio': 'mars',
            'Sagittarius': 'jupiter',
            'Capricorn': 'saturn',
            'Aquarius': 'saturn',
            'Pisces': 'jupiter'
        };

        // Initialize house-wise lord analysis
        const houseWiseLordAnalysis = {};
        for (let i = 1; i <= 12; i++) {
            houseWiseLordAnalysis[i] = {
                lord: null,
                positions: {}
            };
        }

        // Count occurrences of each sign and house
        celebrities.forEach(celebrity => {
            // Count ascendant sign
            signCounts[celebrity.ascendant.sign] = (signCounts[celebrity.ascendant.sign] || 0) + 1;

            // Initialize planet distribution for ascendant sign if not exists
            if (!signPlanetDistribution[celebrity.ascendant.sign]) {
                signPlanetDistribution[celebrity.ascendant.sign] = {
                    ascendant: 0,
                    sun: 0,
                    moon: 0,
                    mars: 0,
                    mercury: 0,
                    jupiter: 0,
                    venus: 0,
                    saturn: 0,
                    rahu: 0,
                    ketu: 0
                };
            }
            signPlanetDistribution[celebrity.ascendant.sign].ascendant++;

            // Calculate house lords based on ascendant
            const ascendantSign = celebrity.ascendant.sign;
            const zodiacSigns = [
                'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
            ];
            const ascendantIndex = zodiacSigns.indexOf(ascendantSign);
            const houseLordPosition = [];
            // Calculate house lords for all 12 houses
            for (let i = 0; i < 12; i++) {
                const houseNumber = i + 1;
                const houseSignIndex = (ascendantIndex + i) % 12;
                const houseSign = zodiacSigns[houseSignIndex];
                const houseLord = houseLords[houseSign];

                houseLordPosition.push(celebrity.planets[houseLord].house);

                // Initialize if not exists
                if (!houseWiseLordAnalysis[houseNumber].lord) {
                    houseWiseLordAnalysis[houseNumber].lord = houseLord;
                }

                // Find where this lord is placed in the chart
                const lordData = celebrity.planets[houseLord];
                if (lordData && lordData.house) {
                    houseWiseLordAnalysis[houseNumber].positions[lordData.house] =
                        (houseWiseLordAnalysis[houseNumber].positions[lordData.house] || 0) + 1;
                }
            }

            //Count conjunctions of lords
            let flg = 0;
            for (let i = 0; i < 12; i++) {
                flg = 0;
                for (let j = 0; j < 12; j++) {
                    if (houseLordPosition[i] === houseLordPosition[j] && i !== j) {
                        flg = 1;
                        conjunctionLordsAnalysis[i + 1].conjunctions[j + 1] = (conjunctionLordsAnalysis[i + 1].conjunctions[j + 1] || 0) + 1;
                    }
                }
                if (flg == 0) {
                    conjunctionLordsAnalysis[i + 1].alone = conjunctionLordsAnalysis[i + 1].alone + 1;
                }
            }



            // Count planet signs and houses
            Object.entries(celebrity.planets).forEach(([planet, data]) => {
                if (data.sign) {
                    signCounts[data.sign] = (signCounts[data.sign] || 0) + 1;
                    planetAnalysis[planet].signs[data.sign] = (planetAnalysis[planet].signs[data.sign] || 0) + 1;

                    // Initialize planet distribution for this sign if not exists
                    if (!signPlanetDistribution[data.sign]) {
                        signPlanetDistribution[data.sign] = {
                            ascendant: 0,
                            sun: 0,
                            moon: 0,
                            mars: 0,
                            mercury: 0,
                            jupiter: 0,
                            venus: 0,
                            saturn: 0,
                            rahu: 0,
                            ketu: 0
                        };
                    }
                    signPlanetDistribution[data.sign][planet]++;
                }
                if (data.house) {
                    houseCounts[data.house] = (houseCounts[data.house] || 0) + 1;
                    planetAnalysis[planet].houses[data.house] = (planetAnalysis[planet].houses[data.house] || 0) + 1;

                    // Initialize planet distribution for this house if not exists
                    if (!housePlanetDistribution[data.house]) {
                        housePlanetDistribution[data.house] = {
                            sun: 0,
                            moon: 0,
                            mars: 0,
                            mercury: 0,
                            jupiter: 0,
                            venus: 0,
                            saturn: 0,
                            rahu: 0,
                            ketu: 0
                        };
                    }
                    housePlanetDistribution[data.house][planet]++;
                }
            });

            // Analyze conjunctions
            const housePlanets = {};
            Object.entries(celebrity.planets).forEach(([planet, data]) => {
                if (data.house) {
                    if (!housePlanets[data.house]) {
                        housePlanets[data.house] = [];
                    }
                    housePlanets[data.house].push(planet);
                }
            });


            // Count conjunctions and alone planets
            Object.entries(housePlanets).forEach(([house, planets]) => {
                if (planets.length === 1) {
                    conjunctionAnalysis[planets[0]].alone++;
                } else {
                    planets.forEach(planet => {
                        planets.forEach(otherPlanet => {
                            if (planet !== otherPlanet) {
                                const conjunctionKey = `${planet}-${otherPlanet}`;
                                conjunctionAnalysis[planet].conjunctions[conjunctionKey] =
                                    (conjunctionAnalysis[planet].conjunctions[conjunctionKey] || 0) + 1;
                            }
                        });
                    });
                }
            });

            // Analyze zodiac sign exchanges
            const planetSigns = {};
            Object.entries(celebrity.planets).forEach(([planet, data]) => {
                if (data.sign) {
                    planetSigns[planet] = data.sign;
                }
            });

            // Check for exchanges between planets
            Object.entries(planetSigns).forEach(([planet1, sign1]) => {
                const lord1 = signLords[sign1];
                if (lord1 && planetSigns[lord1]) {
                    const sign2 = planetSigns[lord1];
                    const lord2 = signLords[sign2];

                    // If planet1 is the lord of sign2, we have an exchange
                    if (lord2 === planet1) {
                        const exchangeKey = `${planet1}-${lord1}`;
                        const reverseKey = `${lord1}-${planet1}`;

                        // Use the alphabetically ordered key to avoid duplicates
                        const finalKey = exchangeKey < reverseKey ? exchangeKey : reverseKey;

                        // Count the exchange
                        zodiacExchangeAnalysis.exchanges[finalKey] =
                            (zodiacExchangeAnalysis.exchanges[finalKey] || 0) + 1;
                        zodiacExchangeAnalysis.totalExchanges++;

                        // Count for each planet involved
                        if (planet1 !== 'rahu' && planet1 !== 'ketu') {
                            zodiacExchangeAnalysis.planetExchanges[planet1].exchanges[lord1] =
                                (zodiacExchangeAnalysis.planetExchanges[planet1].exchanges[lord1] || 0) + 1;
                            zodiacExchangeAnalysis.planetExchanges[planet1].total++;
                        }
                        if (lord1 !== 'rahu' && lord1 !== 'ketu') {
                            zodiacExchangeAnalysis.planetExchanges[lord1].exchanges[planet1] =
                                (zodiacExchangeAnalysis.planetExchanges[lord1].exchanges[planet1] || 0) + 1;
                            zodiacExchangeAnalysis.planetExchanges[lord1].total++;
                        }
                    }
                }
            });

            // Analyze planet aspects
            const planetHouses = {};
            Object.entries(celebrity.planets).forEach(([planet, data]) => {
                if (data.house) {
                    planetHouses[planet] = data.house;
                }
            });

            // Check for all aspects
            Object.entries(planetHouses).forEach(([planet1, house1]) => {
                // Get all aspects for this planet
                const aspects = [7]; // All planets have 7th aspect
                if (planetAspects[planet1]) {
                    aspects.push(...planetAspects[planet1]);
                }


                // Check each aspect
                aspects.forEach(aspectNumber => {
                    // Calculate the aspect house from planet1's position
                    const aspectHouse = ((house1 + aspectNumber - 1) % 12) || 12; // Convert to 1-12 range

                    // Find planets in the aspect house
                    Object.entries(planetHouses).forEach(([planet2, house2]) => {
                        let addNum = aspectNumber == 7 ? 0.5 : 1;
                        if (house2 === aspectHouse && planet1 !== planet2) {
                            const aspectKey = `${planet1}-${planet2}-${aspectNumber}`;
                            const reverseKey = `${planet2}-${planet1}-${aspectNumber}`;

                            // Use the alphabetically ordered key to avoid duplicates
                            const finalKey = aspectKey < reverseKey ? aspectKey : reverseKey;

                            // Count the aspect
                            aspectAnalysis.aspects[finalKey] =
                                (aspectAnalysis.aspects[finalKey] || 0) + addNum;
                            aspectAnalysis.totalAspects = aspectAnalysis.totalAspects + addNum;

                            // Count for aspect type
                            const aspectType = `${aspectNumber}th`;
                            aspectAnalysis.aspectTypes[aspectType].total = aspectAnalysis.aspectTypes[aspectType].total + addNum;
                            aspectAnalysis.aspectTypes[aspectType].aspects[finalKey] =
                                (aspectAnalysis.aspectTypes[aspectType].aspects[finalKey] || 0) + addNum;

                            // Count for each planet involved
                            aspectAnalysis.planetAspects[planet1].aspects[planet2] =
                                (aspectAnalysis.planetAspects[planet1].aspects[planet2] || 0) + addNum;
                            aspectAnalysis.planetAspects[planet1].total = aspectAnalysis.planetAspects[planet1].total + addNum;
                            aspectAnalysis.planetAspects[planet1].aspectTypes[aspectType] = aspectAnalysis.planetAspects[planet1].aspectTypes[aspectType] + addNum;

                            aspectAnalysis.planetAspects[planet2].aspects[planet1] =
                                (aspectAnalysis.planetAspects[planet2].aspects[planet1] || 0) + addNum;
                            aspectAnalysis.planetAspects[planet2].total = aspectAnalysis.planetAspects[planet2].total + addNum;
                        }
                    });
                });
            });
        });

        // Sort by count in descending order
        const sortedSigns = Object.entries(signCounts)
            .sort(([, a], [, b]) => b - a)
            .map(([sign, count]) => {
                // Ensure we have a planet distribution object for this sign
                const distribution = signPlanetDistribution[sign] || {
                    ascendant: 0,
                    sun: 0,
                    moon: 0,
                    mars: 0,
                    mercury: 0,
                    jupiter: 0,
                    venus: 0,
                    saturn: 0,
                    rahu: 0,
                    ketu: 0
                };

                return {
                    sign,
                    count,
                    planetDistribution: distribution
                };
            });

        const sortedHouses = Object.entries(houseCounts)
            .sort(([, a], [, b]) => b - a)
            .map(([house, count]) => {
                // Ensure we have a planet distribution object for this house
                const distribution = housePlanetDistribution[house] || {
                    sun: 0,
                    moon: 0,
                    mars: 0,
                    mercury: 0,
                    jupiter: 0,
                    venus: 0,
                    saturn: 0,
                    rahu: 0,
                    ketu: 0
                };

                return {
                    house,
                    count,
                    planetDistribution: distribution
                };
            });

        // Sort planet-specific analysis
        const sortedPlanetAnalysis = {};
        Object.entries(planetAnalysis).forEach(([planet, data]) => {
            sortedPlanetAnalysis[planet] = {
                signs: Object.entries(data.signs)
                    .sort(([, a], [, b]) => b - a)
                    .map(([sign, count]) => ({ sign, count })),
                houses: Object.entries(data.houses)
                    .sort(([, a], [, b]) => b - a)
                    .map(([house, count]) => ({ house, count }))
            };
        });

        // Sort conjunction analysis
        const sortedConjunctionAnalysis = {};
        Object.entries(conjunctionAnalysis).forEach(([planet, data]) => {
            sortedConjunctionAnalysis[planet] = {
                alone: data.alone,
                conjunctions: Object.entries(data.conjunctions)
                    .sort(([, a], [, b]) => b - a)
                    .map(([conjunction, count]) => {
                        const [planet1, planet2] = conjunction.split('-');
                        return {
                            with: planet2,
                            count
                        };
                    })
            };
        });

        // Sort conjunction lords analysis
        const sortedConjunctionLordsAnalysis = conjunctionLordsAnalysis.map(item => ({
            alone: item.alone,
            conjunctions: Object.entries(item.conjunctions)
                .sort(([, a], [, b]) => b - a)
                .map(([house, count]) => ({ house, count }))
        }));

        // Sort house-wise lord analysis
        const sortedHouseWiseLordAnalysis = {};
        Object.entries(houseWiseLordAnalysis).forEach(([house, data]) => {
            sortedHouseWiseLordAnalysis[house] = {
                lord: data.lord,
                positions: Object.entries(data.positions)
                    .sort(([, a], [, b]) => b - a)
                    .map(([position, count]) => ({ position, count }))
            };
        });

        // Sort zodiac exchange analysis
        const sortedZodiacExchangeAnalysis = {
            totalExchanges: zodiacExchangeAnalysis.totalExchanges,
            exchanges: Object.entries(zodiacExchangeAnalysis.exchanges)
                .sort(([, a], [, b]) => b - a)
                .map(([exchange, count]) => {
                    const [planet1, planet2] = exchange.split('-');
                    return {
                        planets: [planet1, planet2],
                        count,
                        percentage: ((count / celebrities.length) * 100).toFixed(1)
                    };
                }),
            planetExchanges: {}
        };

        // Sort planet-specific exchange analysis
        Object.entries(zodiacExchangeAnalysis.planetExchanges).forEach(([planet, data]) => {
            sortedZodiacExchangeAnalysis.planetExchanges[planet] = {
                total: data.total,
                exchanges: Object.entries(data.exchanges)
                    .sort(([, a], [, b]) => b - a)
                    .map(([otherPlanet, count]) => ({
                        with: otherPlanet,
                        count,
                        percentage: ((count / celebrities.length) * 100).toFixed(1)
                    }))
            };
        });

        // Sort aspect analysis
        const sortedAspectAnalysis = {
            totalAspects: aspectAnalysis.totalAspects,
            aspects: Object.entries(aspectAnalysis.aspects)
                .sort(([, a], [, b]) => b - a)
                .map(([aspect, count]) => {
                    const [planet1, planet2, aspectNumber] = aspect.split('-');
                    return {
                        planets: [planet1, planet2],
                        aspectType: `${aspectNumber}th`,
                        count,
                        percentage: ((count / celebrities.length) * 100).toFixed(1)
                    };
                }),
            planetAspects: {},
            aspectTypes: {}
        };

        // Sort planet-specific aspect analysis
        Object.entries(aspectAnalysis.planetAspects).forEach(([planet, data]) => {
            if (data && typeof data === 'object') {
                sortedAspectAnalysis.planetAspects[planet] = {
                    total: data.total || 0,
                    aspectTypes: data.aspectTypes || {},
                    aspects: Object.entries(data.aspects || {})
                        .sort(([, a], [, b]) => b - a)
                        .map(([otherPlanet, count]) => ({
                            with: otherPlanet,
                            count,
                            percentage: ((count / celebrities.length) * 100).toFixed(1)
                        }))
                };
            }
        });

        // Sort aspect types analysis
        Object.entries(aspectAnalysis.aspectTypes).forEach(([type, data]) => {
            if (data && typeof data === 'object') {
                sortedAspectAnalysis.aspectTypes[type] = {
                    total: data.total || 0,
                    aspects: Object.entries(data.aspects || {})
                        .sort(([, a], [, b]) => b - a)
                        .map(([aspect, count]) => {
                            const [planet1, planet2] = aspect.split('-');
                            return {
                                planets: [planet1, planet2],
                                count,
                                percentage: ((count / celebrities.length) * 100).toFixed(1)
                            };
                        })
                };
            }
        });

        res.json({
            totalCelebrities: celebrities.length,
            signAnalysis: sortedSigns,
            houseAnalysis: sortedHouses,
            planetAnalysis: sortedPlanetAnalysis,
            conjunctionAnalysis: sortedConjunctionAnalysis,
            houseWiseLordAnalysis: sortedHouseWiseLordAnalysis,
            zodiacExchangeAnalysis: sortedZodiacExchangeAnalysis,
            aspectAnalysis: sortedAspectAnalysis,
            conjunctionLordsAnalysis: sortedConjunctionLordsAnalysis
        });
    } catch (error) {
        console.error('Error in analysis:', error);
        res.status(500).json({ message: 'Error generating analysis' });
    }
});

module.exports = router; 