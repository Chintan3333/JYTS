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
        
        await celebrity.remove();
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
            
            // Calculate house lords for all 12 houses
            for (let i = 0; i < 12; i++) {
                const houseNumber = i + 1;
                const houseSignIndex = (ascendantIndex + i) % 12;
                const houseSign = zodiacSigns[houseSignIndex];
                const houseLord = houseLords[houseSign];
                
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
        });
        
        // Sort by count in descending order
        const sortedSigns = Object.entries(signCounts)
            .sort(([,a], [,b]) => b - a)
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
            .sort(([,a], [,b]) => b - a)
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
                    .sort(([,a], [,b]) => b - a)
                    .map(([sign, count]) => ({ sign, count })),
                houses: Object.entries(data.houses)
                    .sort(([,a], [,b]) => b - a)
                    .map(([house, count]) => ({ house, count }))
            };
        });

        // Sort conjunction analysis
        const sortedConjunctionAnalysis = {};
        Object.entries(conjunctionAnalysis).forEach(([planet, data]) => {
            sortedConjunctionAnalysis[planet] = {
                alone: data.alone,
                conjunctions: Object.entries(data.conjunctions)
                    .sort(([,a], [,b]) => b - a)
                    .map(([conjunction, count]) => {
                        const [planet1, planet2] = conjunction.split('-');
                        return {
                            with: planet2,
                            count
                        };
                    })
            };
        });

        // Sort house-wise lord analysis
        const sortedHouseWiseLordAnalysis = {};
        Object.entries(houseWiseLordAnalysis).forEach(([house, data]) => {
            sortedHouseWiseLordAnalysis[house] = {
                lord: data.lord,
                positions: Object.entries(data.positions)
                    .sort(([,a], [,b]) => b - a)
                    .map(([position, count]) => ({ position, count }))
            };
        });
        
        res.json({
            totalCelebrities: celebrities.length,
            signAnalysis: sortedSigns,
            houseAnalysis: sortedHouses,
            planetAnalysis: sortedPlanetAnalysis,
            conjunctionAnalysis: sortedConjunctionAnalysis,
            houseWiseLordAnalysis: sortedHouseWiseLordAnalysis
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router; 