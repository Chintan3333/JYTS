const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

// House lords mapping based on ascendant sign
const getHouseLord = (ascendantSign, houseNumber) => {
    const lordsByAscendant = {
        'Aries': ['Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter'],
        'Taurus': ['Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars'],
        'Gemini': ['Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus'],
        'Cancer': ['Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury'],
        'Leo': ['Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon'],
        'Virgo': ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon', 'Sun'],
        'Libra': ['Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury'],
        'Scorpio': ['Mars', 'Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus'],
        'Sagittarius': ['Jupiter', 'Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars'],
        'Capricorn': ['Saturn', 'Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter'],
        'Aquarius': ['Saturn', 'Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'],
        'Pisces': ['Jupiter', 'Mars', 'Venus', 'Mercury', 'Moon', 'Sun', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Saturn']
    };
    return lordsByAscendant[ascendantSign][houseNumber - 1];
};

// Helper function to get house number for a planet based on ascendant
const getPlanetHouse = (ascendantSign, planetSign, planetDegree) => {
    const ascendantDegrees = {
        'Aries': 0, 'Taurus': 30, 'Gemini': 60, 'Cancer': 90,
        'Leo': 120, 'Virgo': 150, 'Libra': 180, 'Scorpio': 210,
        'Sagittarius': 240, 'Capricorn': 270, 'Aquarius': 300, 'Pisces': 330
    };

    const signDegrees = {
        'Aries': 0, 'Taurus': 30, 'Gemini': 60, 'Cancer': 90,
        'Leo': 120, 'Virgo': 150, 'Libra': 180, 'Scorpio': 210,
        'Sagittarius': 240, 'Capricorn': 270, 'Aquarius': 300, 'Pisces': 330
    };

    const ascDegree = ascendantDegrees[ascendantSign];
    const planetAbsDegree = signDegrees[planetSign] + planetDegree;
    const diff = (planetAbsDegree - ascDegree + 360) % 360;
    return Math.floor(diff / 30) + 1;
};

// Helper function to calculate aspect between two degrees
const calculateAspect = (deg1, deg2) => {
    const diff = Math.abs(deg1 - deg2);
    return Math.min(diff, 360 - diff);
};

// Helper function to get aspect type
const getAspectType = (angle) => {
    const orb = 8; // Orb of influence in degrees
    if (Math.abs(angle - 0) <= orb) return 'Conjunction';
    if (Math.abs(angle - 60) <= orb) return 'Sextile';
    if (Math.abs(angle - 90) <= orb) return 'Square';
    if (Math.abs(angle - 120) <= orb) return 'Trine';
    if (Math.abs(angle - 180) <= orb) return 'Opposition';
    return null;
};

// Helper function to get absolute degree from sign and degree
const getAbsoluteDegree = (sign, degree) => {
    const signDegrees = {
        'Aries': 0, 'Taurus': 30, 'Gemini': 60, 'Cancer': 90,
        'Leo': 120, 'Virgo': 150, 'Libra': 180, 'Scorpio': 210,
        'Sagittarius': 240, 'Capricorn': 270, 'Aquarius': 300, 'Pisces': 330
    };
    return signDegrees[sign] + degree;
};

// Search by planet position
router.post('/planet-position', async (req, res) => {
    try {
        const { planet, sign, degree } = req.body;
        
        if (!planet || !sign || degree === undefined) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        const planetKey = planet.toLowerCase();
        const query = {
            [`planets.${planetKey}.sign`]: sign,
            [`planets.${planetKey}.degree`]: {
                $gte: degree - 1,
                $lte: degree + 1
            }
        };

        const celebrities = await Celebrity.find(query)
            .select('name birthDate birthPlace category planets')
            .sort('name');

        res.json(celebrities);
    } catch (error) {
        console.error('Error in planet position search:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Search by conjunction
router.post('/conjunction', async (req, res) => {
    try {
        const { planet1, planet2 } = req.body;
        
        if (!planet1 || !planet2) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        const planet1Key = planet1.toLowerCase();
        const planet2Key = planet2.toLowerCase();

        // Find all celebrities
        const celebrities = await Celebrity.find()
            .select('name birthDate birthPlace category planets');

        // Filter celebrities with conjunction
        const results = celebrities.filter(celebrity => {
            const p1 = celebrity.planets[planet1Key];
            const p2 = celebrity.planets[planet2Key];
            
            if (!p1 || !p2) return false;

            const deg1 = getAbsoluteDegree(p1.sign, p1.degree);
            const deg2 = getAbsoluteDegree(p2.sign, p2.degree);
            const aspect = calculateAspect(deg1, deg2);
            
            return aspect <= 8; // Conjunction within 8 degrees
        });

        res.json(results);
    } catch (error) {
        console.error('Error in conjunction search:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Search by aspect
router.post('/aspect', async (req, res) => {
    try {
        const { planet1, planet2, aspect } = req.body;
        
        if (!planet1 || !planet2 || !aspect) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        const planet1Key = planet1.toLowerCase();
        const planet2Key = planet2.toLowerCase();
        const targetAspect = aspect.split(' ')[0]; // Extract aspect name from "Aspect (XX°)"

        // Find all celebrities
        const celebrities = await Celebrity.find()
            .select('name birthDate birthPlace category planets');

        // Filter celebrities with specified aspect
        const results = celebrities.filter(celebrity => {
            const p1 = celebrity.planets[planet1Key];
            const p2 = celebrity.planets[planet2Key];
            
            if (!p1 || !p2) return false;

            const deg1 = getAbsoluteDegree(p1.sign, p1.degree);
            const deg2 = getAbsoluteDegree(p2.sign, p2.degree);
            const aspectAngle = calculateAspect(deg1, deg2);
            const aspectType = getAspectType(aspectAngle);
            
            return aspectType === targetAspect;
        });

        res.json(results);
    } catch (error) {
        console.error('Error in aspect search:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Search by house lord position
router.post('/house-lord', async (req, res) => {
    try {
        const { houseNumber, positionHouse } = req.body;
        
        if (!houseNumber || !positionHouse) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        if (houseNumber < 1 || houseNumber > 12 || positionHouse < 1 || positionHouse > 12) {
            return res.status(400).json({ error: 'House numbers must be between 1 and 12' });
        }

        // Find all celebrities
        const celebrities = await Celebrity.find()
            .select('name birthDate birthPlace category planets ascendant');

        // Filter celebrities where the specified house lord is in the specified house
        const results = celebrities.filter(celebrity => {
            const ascendantSign = celebrity.ascendant.sign;
            const houseLord = getHouseLord(ascendantSign, houseNumber);
            const planetData = celebrity.planets[houseLord.toLowerCase()];
            
            if (!planetData) return false;

            const planetHouse = getPlanetHouse(
                ascendantSign,
                planetData.sign,
                planetData.degree
            );

            return planetHouse === positionHouse;
        });

        // Add house lord information to the results
        const enrichedResults = results.map(celebrity => {
            const ascendantSign = celebrity.ascendant.sign;
            const houseLord = getHouseLord(ascendantSign, houseNumber);
            const planetData = celebrity.planets[houseLord.toLowerCase()];

            return {
                ...celebrity.toObject(),
                houseLord: {
                    houseNumber: houseNumber,
                    lord: houseLord,
                    position: {
                        house: positionHouse,
                        sign: planetData.sign,
                        degree: planetData.degree
                    }
                }
            };
        });

        res.json(enrichedResults);
    } catch (error) {
        console.error('Error in house lord search:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Search by planet in house
router.post('/planet-in-house', async (req, res) => {
    try {
        const { planet, houseNumber } = req.body;
        
        if (!planet || !houseNumber) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }

        if (houseNumber < 1 || houseNumber > 12) {
            return res.status(400).json({ error: 'House number must be between 1 and 12' });
        }

        const planetKey = planet.toLowerCase();
        const query = {
            [`planets.${planetKey}.house`]: houseNumber
        };

        const celebrities = await Celebrity.find(query)
            .select('name birthDate birthPlace category planets ascendant')
            .sort('name');

        // Add planet in house information to the results
        const enrichedResults = celebrities.map(celebrity => {
            const planetData = celebrity.planets[planetKey];
            return {
                ...celebrity.toObject(),
                planetInHouse: {
                    planet: planet,
                    house: houseNumber,
                    sign: planetData.sign,
                    degree: planetData.degree
                }
            };
        });

        res.json(enrichedResults);
    } catch (error) {
        console.error('Error in planet in house search:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Search by ascendant sign
router.post('/ascendant', async (req, res) => {
    try {
        const { sign } = req.body;
        if (!sign) {
            return res.status(400).json({ error: 'Missing required parameter: sign' });
        }
        const celebrities = await Celebrity.find({ 'ascendant.sign': sign })
            .select('name birthDate birthPlace category planets ascendant')
            .sort('name');
        res.json(celebrities);
    } catch (error) {
        console.error('Error in ascendant search:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; 