import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Box,
  CircularProgress,
  Divider,
  Chip,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import { alpha } from '@mui/material/styles';

// Helper function to get zodiac sign number
const getZodiacNumber = (sign) => {
  const zodiacMap = {
    'Aries': 1, 'Taurus': 2, 'Gemini': 3, 'Cancer': 4,
    'Leo': 5, 'Virgo': 6, 'Libra': 7, 'Scorpio': 8,
    'Sagittarius': 9, 'Capricorn': 10, 'Aquarius': 11, 'Pisces': 12
  };
  return zodiacMap[sign] || 0;
};

// Helper function to get planet abbreviation
const getPlanetAbbr = (planet) => {
  const planetMap = {
    'sun': 'Su', 'moon': 'Mo', 'mars': 'Ma', 'mercury': 'Me',
    'jupiter': 'Ju', 'venus': 'Ve', 'saturn': 'Sa', 'rahu': 'Ra', 'ketu': 'Ke'
  };
  return planetMap[planet] || planet;
};

// Helper function to get planet color
const getPlanetColor = (planet) => {
  const colorMap = {
    'sun': '#E25825', // Orange
    'moon': '#87CEEB', // Sky Blue
    'mars': '#FF0000', // Red
    'mercury': '#008000', // Green
    'jupiter': '#FFDF00', // Yellow
    'venus': '#FF69B4', // Dark Pink
    'saturn': '#808080', // Grey
    'rahu': '#800080', // Purple
    'ketu': '#CD853F' // Light Brown
  };
  return colorMap[planet] || '#1976d2'; // Default blue if planet not found
};

// Helper function to get text color based on background
const getTextColor = (backgroundColor) => {
  // Convert hex to RGB
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

// Helper function to get sign lord
const getSignLord = (sign) => {
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
  return signLords[sign];
};

// Helper function to check if two planets are in conjunction (same sign)
const isConjunction = (planet1Sign, planet2Sign) => {
  return planet1Sign === planet2Sign;
};

// Helper function to check if two planets are in exchange (each in other's sign)
const isExchange = (planet1, planet1Sign, planet2, planet2Sign) => {
  const ownSigns = {
    'sun': ['Leo'],
    'moon': ['Cancer'],
    'mars': ['Aries', 'Scorpio'],
    'mercury': ['Gemini', 'Virgo'],
    'jupiter': ['Sagittarius', 'Pisces'],
    'venus': ['Taurus', 'Libra'],
    'saturn': ['Capricorn', 'Aquarius']
  };

  const planet1OwnSigns = ownSigns[planet1.toLowerCase()] || [];
  const planet2OwnSigns = ownSigns[planet2.toLowerCase()] || [];

  return planet1OwnSigns.includes(planet2Sign) && planet2OwnSigns.includes(planet1Sign);
};

// Helper function to check if a planet aspects another planet (7th aspect)
const isSeventhAspect = (planet1Sign, planet2Sign) => {
  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const sign1Index = zodiacSigns.indexOf(planet1Sign);
  const sign2Index = zodiacSigns.indexOf(planet2Sign);

  // 7th aspect means 6 signs away (7th sign from the current sign)
  return Math.abs(sign1Index - sign2Index) === 6;
};

// Helper function to check if a planet is debilitated
const isDebilitated = (planet, sign) => {
  const debilitationSigns = {
    'Sun': 'Libra',
    'Moon': 'Scorpio',
    'Mars': 'Cancer',
    'Mercury': 'Pisces',
    'Jupiter': 'Capricorn',
    'Venus': 'Virgo',
    'Saturn': 'Aries',
    'Rahu': 'Sagittarius',
    'Ketu': 'Gemini'
  };
  return debilitationSigns[planet] === sign;
};

// Helper function to check if a planet is debilitated
const isExalted = (planet, sign) => {
  const exaltedSigns = {
    'sun': 'Aries',
    'moon': 'Taurus',
    'mars': 'Capricorn',
    'mercury': 'Virgo',
    'jupiter': 'Cancer',
    'venus': 'Pisces',
    'saturn': 'Libra',
    'rahu': 'Gemini',
    'ketu': 'Sagittarius'
  };
  return exaltedSigns[planet] === sign;
};

// Helper function to check if debilitation is broken by conjunction with exalted planet
const isDebilitationBroken = (planet, planets) => {
  if (!isDebilitated(planet, planets[planet].sign)) {
    return false;
  }

  // Check if the debilitated planet is in conjunction with any exalted planet
  return Object.entries(planets).some(([otherPlanet, otherData]) => {
    if (otherPlanet === planet) return false;
    return arePlanetsConjunct(planet, otherPlanet, planets) && isExalted(otherPlanet, otherData.sign);
  });
};

// Helper function to check debilitation breaking conditions
const checkDebilitationBreaking = (planet, planetSign, allPlanets) => {
  const signLord = getSignLord(planetSign);
  const breakingConditions = [];

  // Check all planets for breaking conditions
  Object.entries(allPlanets).forEach(([otherPlanet, otherData]) => {
    // Skip the same planet
    if (otherPlanet.toLowerCase() === planet.toLowerCase()) return;

    // 1. Conjunction with house lord
    if (otherPlanet.toLowerCase() === signLord && isConjunction(planetSign, otherData.sign)) {
      breakingConditions.push({
        type: 'Conjunction with House Lord',
        description: `${otherPlanet} (lord of ${planetSign}) is in conjunction`
      });
    }

    // 2. Exchange with house lord
    if (otherPlanet.toLowerCase() === signLord && isExchange(planet, planetSign, otherPlanet, otherData.sign)) {
      breakingConditions.push({
        type: 'Exchange with House Lord',
        description: `${otherPlanet} (lord of ${planetSign}) is in exchange`
      });
    }

    // 3. 7th aspect from house lord
    if (otherPlanet.toLowerCase() === signLord && isSeventhAspect(planetSign, otherData.sign)) {
      breakingConditions.push({
        type: '7th Aspect from House Lord',
        description: `${otherPlanet} (lord of ${planetSign}) aspects from 7th house`
      });
    }

    // 4. Conjunction with exalted planet
    if (isExalted(otherPlanet, planetSign) && isConjunction(planetSign, otherData.sign)) {
      breakingConditions.push({
        type: 'Conjunction with Exalted Planet',
        description: `${otherPlanet} (exalted in ${planetSign}) is in conjunction`
      });
    }
  });

  return breakingConditions;
};

// Helper function to check Neecha Yoga
const checkNeechaYoga = (planet, sign, planets) => {
  const neechaSigns = {
    'sun': 'Libra',
    'moon': 'Scorpio',
    'mars': 'Cancer',
    'mercury': 'Pisces',
    'jupiter': 'Capricorn',
    'venus': 'Virgo',
    'saturn': 'Aries',
    'rahu': 'Sagittarius',
    'ketu': 'Gemini'
  };

  console.log('planet', planet, sign);

  // Check if planet is debilitated
  if (neechaSigns[planet] === sign) {
    // Check if debilitation is broken by conjunction with exalted planet
    const breakingdetails = checkDebilitationBreaking(planet, sign, planets);
    const isBroken = breakingdetails.length > 0 ? true : false;

    const descriptions = {
      'sun': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. May still face some challenges with authority but with reduced intensity.'
        : 'May indicate challenges with authority, father, or government',
      'moon': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Emotional stability improved but may still need attention.'
        : 'May indicate emotional instability and mental stress',
      'mars': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Energy and courage enhanced but may still need development.'
        : 'May indicate lack of courage and energy',
      'mercury': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Communication skills improved but may still need refinement.'
        : 'May indicate communication problems and lack of focus',
      'jupiter': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Wisdom and spiritual growth enhanced but may still need nurturing.'
        : 'May indicate lack of wisdom and spiritual growth',
      'venus': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Relationships and creativity improved but may still need work.'
        : 'May indicate relationship problems and lack of creativity',
      'saturn': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Delays and obstacles reduced but may still need patience.'
        : 'May indicate delays and obstacles in life',
      'rahu': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Material desires and obsessions may be better controlled.'
        : 'May indicate excessive material desires and obsessions',
      'ketu': isBroken
        ? 'Debilitation broken by conjunction with exalted planet. Spiritual detachment may be more balanced.'
        : 'May indicate excessive detachment and isolation'
    };

    return {
      type: isBroken ? 'Debilitated (Broken)' : 'Debilitated',
      description: descriptions[planet] + ' ' + breakingdetails.map(detail => detail.description).join(', '),
      isDebilitationBroken: isBroken,
    };
  }
  return null;
};

// Helper function to check if a planet is in its own sign or exalted sign
const checkPanchaMahapurushaYoga = (planet, sign) => {
  const yogaConditions = {
    sun: {
      ownSigns: ['Leo'],
      exaltedSign: 'Aries',
      yogaName: 'Surya Yoga',
      description: 'Gives leadership qualities, authority, fame, and success in government or administrative roles. Often seen in successful leaders, politicians, and individuals in positions of power.'
    },
    moon: {
      ownSigns: ['Cancer'],
      exaltedSign: 'Taurus',
      yogaName: 'Chandra Yoga',
      description: 'Brings emotional intelligence, popularity, and success in creative fields. Associated with artistic talents, public relations, and careers involving public interaction.'
    },
    mars: {
      ownSigns: ['Aries', 'Scorpio'],
      exaltedSign: 'Capricorn',
      yogaName: 'Ruchaka Yoga',
      description: 'Gives strong willpower, courage, leadership qualities, and ability to handle challenges. Often seen in successful military leaders, politicians, and entrepreneurs.'
    },
    mercury: {
      ownSigns: ['Gemini', 'Virgo'],
      exaltedSign: 'Virgo',
      yogaName: 'Bhadra Yoga',
      description: 'Gives sharp intelligence, wit, eloquence, and business acumen. Associated with intellectual and communicative brilliance, often seen in successful writers, speakers, or businesspeople.'
    },
    jupiter: {
      ownSigns: ['Sagittarius', 'Pisces'],
      exaltedSign: 'Cancer',
      yogaName: 'Hans Yoga',
      description: 'Brings wisdom, high moral character, teaching abilities, and strong spirituality. Individuals often excel in teaching, law, or religious fields and are seen as benefactors of society.'
    },
    venus: {
      ownSigns: ['Taurus', 'Libra'],
      exaltedSign: 'Pisces',
      yogaName: 'Malavya Yoga',
      description: 'Signifies wealth, beauty, charm, artistic talents, and success in luxury and entertainment industries. Gives natural inclination towards beauty and luxury.'
    },
    saturn: {
      ownSigns: ['Capricorn', 'Aquarius'],
      exaltedSign: 'Libra',
      yogaName: 'Shasha Yoga',
      description: 'Gives discipline, perseverance, authority, and ability to succeed through hard work and patience. Often seen in successful business tycoons, bureaucrats, and individuals in positions of authority.'
    },
    rahu: {
      ownSigns: [],
      exaltedSign: 'Gemini',
      yogaName: 'Rahu Yoga',
      description: 'Brings unconventional success, innovation, and ability to break traditional barriers. Often seen in successful entrepreneurs, scientists, and individuals who achieve success through unique or revolutionary means.'
    },
    ketu: {
      ownSigns: [],
      exaltedSign: 'Sagittarius',
      yogaName: 'Ketu Yoga',
      description: 'Gives spiritual insight, detachment, and success in fields related to research, investigation, or spiritual pursuits. Often associated with individuals who achieve success through deep analysis or spiritual understanding.'
    }
  };

  const condition = yogaConditions[planet.toLowerCase()];
  if (!condition) return null;

  const isOwnSign = condition.ownSigns.includes(sign);
  const isExaltedSign = sign === condition.exaltedSign;

  if (isOwnSign || isExaltedSign) {
    return {
      yogaName: condition.yogaName,
      description: condition.description,
      type: isExaltedSign ? 'Exalted' : 'Own Sign'
    };
  }

  return null;
};

// Helper function to get house number from sign based on ascendant
const getHouseNumber = (sign, ascendantSign) => {
  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const ascendantIndex = zodiacSigns.indexOf(ascendantSign);
  const signIndex = zodiacSigns.indexOf(sign);

  // Calculate house number (1-12)
  let houseNumber = ((signIndex - ascendantIndex + 12) % 12) + 1;
  return houseNumber;
};

// Helper function to check Vipreet Rajyoga
const checkVipreetRajyoga = (planets, ascendantSign) => {
  const vipreetYogas = [];

  // Get house lords for 6th, 8th, and 12th houses
  const getHouseLord = (houseNumber) => {
    const zodiacSigns = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];
    const ascendantIndex = zodiacSigns.indexOf(ascendantSign);
    const signIndex = (ascendantIndex + houseNumber - 1) % 12;
    const sign = zodiacSigns[signIndex];
    return getSignLord(sign);
  };

  const house6Lord = getHouseLord(6);
  const house8Lord = getHouseLord(8);
  const house12Lord = getHouseLord(12);

  // Check each planet's placement
  Object.entries(planets).forEach(([planet, data]) => {
    const planetHouse = getHouseNumber(data.sign, ascendantSign);
    const isInDusthana = [6, 8, 12].includes(planetHouse);

    if (isInDusthana) {
      // Check for Saral Yoga (8th lord in dusthana)
      if (planet.toLowerCase() === house8Lord) {
        vipreetYogas.push({
          type: 'Saral Yoga',
          planet: planet,
          house: planetHouse,
          description: '8th house lord in dusthana (6th, 8th, or 12th house) gives success through overcoming obstacles and enemies. The native may achieve success through dealing with difficult situations and transforming challenges into opportunities.'
        });
      }

      // Check for Vimala Yoga (12th lord in dusthana)
      if (planet.toLowerCase() === house12Lord) {
        vipreetYogas.push({
          type: 'Vimala Yoga',
          planet: planet,
          house: planetHouse,
          description: '12th house lord in dusthana (6th, 8th, or 12th house) gives success through spiritual growth and liberation. The native may achieve success through letting go of material attachments and focusing on higher goals.'
        });
      }

      // Check for Harsha Yoga (6th lord in dusthana)
      if (planet.toLowerCase() === house6Lord) {
        vipreetYogas.push({
          type: 'Harsha Yoga',
          planet: planet,
          house: planetHouse,
          description: '6th house lord in dusthana (6th, 8th, or 12th house) gives success through competition and overcoming enemies. The native may achieve success through facing and overcoming challenges and competition.'
        });
      }
    }
  });

  return vipreetYogas;
};

// Helper function to check if planets are in conjunction (same house)
const arePlanetsConjunct = (planet1, planet2, planets) => {
  if (!planets[planet1] || !planets[planet2]) return false;
  return planets[planet1].sign === planets[planet2].sign;
};

// Helper function to check if planets have zodiac sign exchange
const haveSignExchange = (planet1, planet2, planets) => {
  return planets[planet1].sign === planets[planet2].sign;
};

// Helper function to check if planets have 7th aspect
const haveSeventhAspect = (planet1, planet2, planets) => {
  const house1 = planets[planet1].house;
  const house2 = planets[planet2].house;
  return (house1 + 6) % 12 === house2 % 12 || (house2 + 6) % 12 === house1 % 12;
};

// Helper function to check Wealth Yogas
const checkWealthYogas = (planets, ascendant) => {
  const wealthYogas = [];

  // Helper function to get house lord
  const getHouseLord = (houseNumber) => {
    const zodiacSigns = [
      'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
      'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
    ];
    const ascendantIndex = zodiacSigns.indexOf(ascendant.sign);
    const houseSignIndex = (ascendantIndex + houseNumber - 1) % 12;
    const houseSign = zodiacSigns[houseSignIndex];

    const signLords = {
      'Aries': 'Mars',
      'Taurus': 'Venus',
      'Gemini': 'Mercury',
      'Cancer': 'Moon',
      'Leo': 'Sun',
      'Virgo': 'Mercury',
      'Libra': 'Venus',
      'Scorpio': 'Mars',
      'Sagittarius': 'Jupiter',
      'Capricorn': 'Saturn',
      'Aquarius': 'Saturn',
      'Pisces': 'Jupiter'
    };

    return signLords[houseSign];
  };

  // Check Saturn-Venus combination
  if ((arePlanetsConjunct('saturn', 'venus', planets) ||
    haveSignExchange('saturn', 'venus', planets) ||
    haveSeventhAspect('saturn', 'venus', planets)) &&
    (!isDebilitated('saturn', planets.saturn.sign) || isDebilitationBroken('saturn', planets)) &&
    (!isDebilitated('venus', planets.venus.sign) || isDebilitationBroken('venus', planets))) {
    wealthYogas.push({
      name: 'Saturn-Venus Wealth Yoga',
      planets: ['Saturn', 'Venus'],
      type: 'Wealth',
      description: 'Indicates wealth through business, property, and investments. The combination of Saturn\'s discipline and Venus\'s luxury can lead to significant financial gains.'
    });
  }

  // Check Mars-Moon combination
  if ((arePlanetsConjunct('mars', 'moon', planets) ||
    haveSignExchange('mars', 'moon', planets) ||
    haveSeventhAspect('mars', 'moon', planets)) &&
    (!isDebilitated('mars', planets.mars.sign) || isDebilitationBroken('mars', planets)) &&
    (!isDebilitated('moon', planets.moon.sign) || isDebilitationBroken('moon', planets))) {
    wealthYogas.push({
      name: 'Mars-Moon Wealth Yoga',
      planets: ['Mars', 'Moon'],
      type: 'Wealth',
      description: 'Indicates wealth through courage, initiative, and emotional intelligence. This combination can bring financial success through leadership and public relations.'
    });
  }

  // Check Rahu-Venus combination
  if ((arePlanetsConjunct('rahu', 'venus', planets) ||
    haveSeventhAspect('rahu', 'venus', planets)) &&
    (!isDebilitated('venus', planets.venus.sign) || isDebilitationBroken('venus', planets))) {
    wealthYogas.push({
      name: 'Rahu-Venus Wealth Yoga',
      planets: ['Rahu', 'Venus'],
      type: 'Wealth',
      description: 'Indicates sudden wealth and financial gains through unconventional means. This combination can bring unexpected financial opportunities.'
    });
  }

  // Check wealth house combinations (2nd, 5th, 8th, 11th)
  const wealthHouses = [2, 5, 8, 11];
  const wealthHouseLords = wealthHouses.map(house => ({
    house,
    lord: getHouseLord(house),
    position: Object.entries(planets).find(([planet, _]) => 
      planet.toLowerCase() === getHouseLord(house).toLowerCase()
    )
  }));

  // Check for conjunction of at least 3 wealth house lords
  const conjunctLords = [];
  wealthHouseLords.forEach(({ house: house1, lord: lord1, position: pos1 }, index1) => {
    if (!pos1) return;
    const [planet1, data1] = pos1;
    
    wealthHouseLords.slice(index1 + 1).forEach(({ house: house2, lord: lord2, position: pos2 }) => {
      if (!pos2) return;
      const [planet2, data2] = pos2;
      
      if (isConjunction(data1.sign, data2.sign)) {
        // Add both lords to the conjunction group if not already present
        if (!conjunctLords.some(group => group.includes(lord1))) {
          conjunctLords.push([lord1]);
        }
        if (!conjunctLords.some(group => group.includes(lord2))) {
          conjunctLords.push([lord2]);
        }
        
        // Merge groups if they contain either lord
        const group1 = conjunctLords.find(group => group.includes(lord1));
        const group2 = conjunctLords.find(group => group.includes(lord2));
        if (group1 !== group2) {
          const mergedGroup = [...new Set([...group1, ...group2])];
          conjunctLords.splice(conjunctLords.indexOf(group1), 1);
          conjunctLords.splice(conjunctLords.indexOf(group2), 1);
          conjunctLords.push(mergedGroup);
        }
      }
    });
  });

  // Add wealth yoga for groups of 3 or more conjunct lords
  conjunctLords.forEach(group => {
    if (group.length >= 3) {
      const houses = group.map(lord => 
        wealthHouseLords.find(({ lord: l }) => l === lord)?.house
      ).filter(Boolean);
      
      wealthYogas.push({
        name: 'Multiple Wealth House Lords Conjunction Yoga',
        planets: group,
        type: 'Wealth',
        description: `Indicates exceptional wealth potential through the conjunction of ${group.length} wealth house lords (${houses.join('th, ')}th). This powerful combination suggests multiple sources of wealth and financial success through ${houses.includes(2) ? 'accumulation, ' : ''}${houses.includes(5) ? 'investments, ' : ''}${houses.includes(8) ? 'inheritance, ' : ''}${houses.includes(11) ? 'income' : ''}. The combined strength of these lords creates a formidable wealth-generating combination.`
      });
    }
  });

  // Check for house lords in wealth houses
  wealthHouseLords.forEach(({ house: lordHouse, lord, position }) => {
    if (!position) return;
    const [lordPlanet, lordData] = position;

    // Check if this lord is placed in any wealth house
    if (wealthHouses.includes(lordData.house) && 
        (!isDebilitated(lordPlanet, lordData.sign) || isDebilitationBroken(lordPlanet, planets))) {
      wealthYogas.push({
        name: `${lordHouse}th House Lord in ${lordData.house}th House Wealth Yoga`,
        planets: [lord],
        type: 'Wealth',
        description: `Indicates wealth through ${lordData.house === 2 ? 'accumulation' : 
          lordData.house === 5 ? 'investments and speculation' : 
          lordData.house === 8 ? 'inheritance and insurance' : 
          'income and gains'}. The placement of ${lordHouse}th house lord in ${lordData.house}th house creates a powerful wealth combination.`
      });
    }

    // Check if this lord is exalted
    if (isExalted(lordPlanet, lordData.sign) ||
        (!isDebilitated(lordPlanet, lordData.sign) && isDebilitationBroken(lordPlanet, planets))) {
      wealthYogas.push({
        name: `Exalted ${lordHouse}th House Lord Wealth Yoga`,
        planets: [lord],
        type: 'Wealth',
        description: `Indicates exceptional wealth through ${lordHouse === 2 ? 'accumulation and savings' : 
          lordHouse === 5 ? 'investments and creative ventures' : 
          lordHouse === 8 ? 'inheritance and hidden sources' : 
          'income and fulfillment of desires'}. The exalted ${lordHouse}th house lord brings powerful wealth-generating capabilities.`
      });
    }
  });

  // Check for exalted planets in wealth houses
  Object.entries(planets).forEach(([planet, data]) => {
    if (wealthHouses.includes(data.house) &&
        (isExalted(planet, data.sign) ||
         (!isDebilitated(planet, data.sign) && isDebilitationBroken(planet, planets)))) {
      wealthYogas.push({
        name: `Exalted ${planet.charAt(0).toUpperCase() + planet.slice(1)} in ${data.house}th House Wealth Yoga`,
        planets: [planet.charAt(0).toUpperCase() + planet.slice(1)],
        type: 'Wealth',
        description: `Indicates exceptional financial benefits through ${data.house === 2 ? 'accumulation and savings' : 
          data.house === 5 ? 'investments and speculation' : 
          data.house === 8 ? 'inheritance and insurance' : 
          'income and gains'}. The exalted ${planet} in ${data.house}th house brings powerful wealth-generating capabilities.`
      });
    }
  });

  // Remove duplicate wealth yogas (same planets and houses in different order)
  const uniqueWealthYogas = wealthYogas.filter((yoga, index, self) =>
    index === self.findIndex((y) => (
      y.planets.sort().join(',') === yoga.planets.sort().join(',') &&
      y.name === yoga.name
    ))
  );

  return uniqueWealthYogas;
};

// Helper function to get sign for a house number based on ascendant
const getSignForHouse = (houseNumber, ascendantSign) => {
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
  const ascendantIndex = signs.indexOf(ascendantSign);
  const houseIndex = (ascendantIndex + houseNumber - 1) % 12;
  return signs[houseIndex];
};

// Helper function to get lord of a sign
const getLordOfSign = (sign) => {
  const signLords = {
    'Aries': 'Mars',
    'Taurus': 'Venus',
    'Gemini': 'Mercury',
    'Cancer': 'Moon',
    'Leo': 'Sun',
    'Virgo': 'Mercury',
    'Libra': 'Venus',
    'Scorpio': 'Mars',
    'Sagittarius': 'Jupiter',
    'Capricorn': 'Saturn',
    'Aquarius': 'Saturn',
    'Pisces': 'Jupiter'
  };
  return signLords[sign];
};

// Helper function to check Kendra Trikon Rajyoga
const checkKendraTrikonRajyoga = (planets, ascendant) => {
  const kendraHouses = [1, 4, 7, 10];
  const trikonHouses = [1, 5, 9];
  
  // Get house lords
  const getHouseLord = (houseNumber) => {
    const sign = getSignForHouse(houseNumber, ascendant.sign);
    return getLordOfSign(sign);
  };

  const yogas = [];

  // Check condition 1: Kendra lords in Trikon houses
  kendraHouses.forEach(kendraHouse => {
    const kendraLord = getHouseLord(kendraHouse);
    if (!kendraLord) return;

    trikonHouses.forEach(trikonHouse => {
      const trikonSign = getSignForHouse(trikonHouse, ascendant.sign);
      if (planets[kendraLord.toLowerCase()]?.sign === trikonSign) {
        yogas.push({
          type: 'Kendra Trikon Rajyoga',
          description: `${kendraLord} (lord of ${kendraHouse}th house) is placed in ${trikonHouse}th house (Trikon)`,
          planets: [kendraLord],
          houses: [kendraHouse, trikonHouse]
        });
      }
    });
  });

  // Check condition 2: Trikon lords in Kendra houses
  trikonHouses.forEach(trikonHouse => {
    const trikonLord = getHouseLord(trikonHouse);
    if (!trikonLord) return;

    kendraHouses.forEach(kendraHouse => {
      const kendraSign = getSignForHouse(kendraHouse, ascendant.sign);
      if (planets[trikonLord.toLowerCase()]?.sign === kendraSign) {
        yogas.push({
          type: 'Kendra Trikon Rajyoga',
          description: `${trikonLord} (lord of ${trikonHouse}th house) is placed in ${kendraHouse}th house (Kendra)`,
          planets: [trikonLord],
          houses: [trikonHouse, kendraHouse]
        });
      }
    });
  });

  // Check condition 3: Kendra lords in conjunction with Trikon lords
  kendraHouses.forEach(kendraHouse => {
    const kendraLord = getHouseLord(kendraHouse);
    if (!kendraLord) return;

    trikonHouses.forEach(trikonHouse => {
      const trikonLord = getHouseLord(trikonHouse);
      if (!trikonLord || kendraLord === trikonLord) return; // Skip if same lord or no lord

      // Check if planets are in conjunction
      if (arePlanetsConjunct(kendraLord.toLowerCase(), trikonLord.toLowerCase(), planets)) {
        yogas.push({
          type: 'Kendra Trikon Rajyoga',
          description: `${kendraLord} (lord of ${kendraHouse}th house) is in conjunction with ${trikonLord} (lord of ${trikonHouse}th house)`,
          planets: [kendraLord, trikonLord],
          houses: [kendraHouse, trikonHouse]
        });
      }
    });
  });

  // Remove duplicate yogas (same planets and houses in different order)
  const uniqueYogas = yogas.filter((yoga, index, self) =>
    index === self.findIndex((y) => (
      y.planets.sort().join(',') === yoga.planets.sort().join(',') &&
      y.houses.sort().join(',') === yoga.houses.sort().join(',')
    ))
  );

  return uniqueYogas;
};

function CelebrityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [celebrity, setCelebrity] = useState(null);
  const [wealthYogas, setWealthYogas] = useState([]);
  const [neechaYogas, setNeechaYogas] = useState([]);
  const [kendraTrikonYogas, setKendraTrikonYogas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCelebrity();
  }, [id]);

  const fetchCelebrity = async () => {
    try {
      const response = await axios.get(`https://jyts-app-backend.onrender.com/api/celebrities/${id}`);
      const data = response.data;
      if (data) {
        setCelebrity(data);
        // Calculate Wealth Yogas
        const wealthYogasList = checkWealthYogas(data.planets, data.ascendant);
        setWealthYogas(wealthYogasList);
        // Calculate Neecha Yogas
        const neechaYogasList = Object.entries(data.planets)
          .map(([planet, planetData]) => {
            const yoga = checkNeechaYoga(planet, planetData.sign, data.planets);
            if (yoga) {
              return {
                planet: planet.charAt(0).toUpperCase() + planet.slice(1),
                ...yoga
              };
            }
            return null;
          })
          .filter(Boolean);
        setNeechaYogas(neechaYogasList);
        // Calculate Kendra Trikon Yogas
        const kendraTrikonYogasList = checkKendraTrikonRajyoga(data.planets, data.ascendant);
        setKendraTrikonYogas(kendraTrikonYogasList);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch celebrity data');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  if (!celebrity) {
    return (
      <Container>
        <Typography align="center">
          Celebrity not found
        </Typography>
      </Container>
    );
  }

  // Create house positions array
  const housePositions = Array(12).fill(null);
  housePositions[0] = getZodiacNumber(celebrity.ascendant.sign);

  // Fill planetary positions
  Object.entries(celebrity.planets).forEach(([planet, data]) => {
    if (data.house && data.house > 0 && data.house <= 12) {
      const houseIndex = data.house - 1;
      housePositions[houseIndex] = getZodiacNumber(data.sign);
    }
  });

  // Calculate remaining house positions based on ascendant
  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  const ascendantIndex = zodiacSigns.indexOf(celebrity.ascendant.sign);

  for (let i = 0; i < 12; i++) {
    if (!housePositions[i]) {
      const signIndex = (ascendantIndex + i) % 12;
      housePositions[i] = signIndex + 1;
    }
  }

  // Calculate Pancha Mahapurusha Yogas
  const panchaMahapurushaYogas = Object.entries(celebrity.planets)
    .filter(([planet]) => ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn', 'rahu', 'ketu'].includes(planet.toLowerCase()))
    .map(([planet, data]) => {
      const yoga = checkPanchaMahapurushaYoga(planet, data.sign);
      if (yoga) {
        return {
          planet: planet.charAt(0).toUpperCase() + planet.slice(1),
          ...yoga
        };
      }
      return null;
    })
    .filter(Boolean);

  // Calculate Vipreet Rajyoga
  const vipreetYogas = checkVipreetRajyoga(celebrity.planets, celebrity.ascendant.sign);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/celebrities')}
          >
            Back to List
          </Button>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/celebrities/${id}/edit`)}
          >
            Edit
          </Button>
        </Box>

        <Typography variant="h4" component="h1" gutterBottom>
          {celebrity.name}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          {/* Basic Information */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Basic Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Birth Date
            </Typography>
            <Typography variant="body1">
              {new Date(celebrity.birthDate).toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Birth Time
            </Typography>
            <Typography variant="body1">
              {celebrity.birthTime}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Birth Place
            </Typography>
            <Typography variant="body1">
              {celebrity.birthPlace}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Category
            </Typography>
            <Typography variant="body1">
              {celebrity.category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Data Accuracy
            </Typography>
            <Typography variant="body1">
              {celebrity.dataAccuracy ? celebrity.dataAccuracy.charAt(0).toUpperCase() + celebrity.dataAccuracy.slice(1) : 'Good'}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 3 }} />
          </Grid>

          {/* Vedic Astrology Kundli */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Vedic Astrology Kundli
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 2,
                mt: 2,
                '& > div': {
                  position: 'relative',
                  minHeight: '120px',
                  p: 2,
                  borderRadius: 2,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              }}
            >
              {/* Row 1 */}
              <Box></Box>
              {/* House 2 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {housePositions[1] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 2) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
              {/* House 12 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 12
                </Typography>
                <Typography variant="body2">
                  {housePositions[11] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 12) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>

              {/* Row 2 */}
              {/* House 3 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 3
                </Typography>
                <Typography variant="body2">
                  {housePositions[2] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 3) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
              {/* House 1 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 1
                </Typography>
                <Typography variant="body2">
                  {housePositions[0] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 1) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
              {/* House 11 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 11
                </Typography>
                <Typography variant="body2">
                  {housePositions[10] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 11) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>

              {/* Row 3 */}
              <Box></Box>
              {/* House 4 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 4
                </Typography>
                <Typography variant="body2">
                  {housePositions[3] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 4) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
              {/* House 10 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 10
                </Typography>
                <Typography variant="body2">
                  {housePositions[9] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 10) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>

              {/* Row 4 */}
              {/* House 5 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 5
                </Typography>
                <Typography variant="body2">
                  {housePositions[4] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 5) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
              {/* House 7 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 7
                </Typography>
                <Typography variant="body2">
                  {housePositions[6] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 7) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
              {/* House 9 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 9
                </Typography>
                <Typography variant="body2">
                  {housePositions[8] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 9) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>

              {/* Row 5 */}
              <Box></Box>
              {/* House 6 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 6
                </Typography>
                <Typography variant="body2">
                  {housePositions[5] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 6) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
              {/* House 8 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 8
                </Typography>
                <Typography variant="body2">
                  {housePositions[7] || ''}
                </Typography>
                <Box sx={{
                  position: 'absolute',
                  bottom: 4,
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {Object.entries(celebrity.planets).map(([planet, data]) => {
                    if (data.house === 8) {
                      const bgColor = getPlanetColor(planet);
                      const textColor = getTextColor(bgColor);
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: bgColor,
                            color: textColor,
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                          }}
                        >
                          {getPlanetAbbr(planet)}
                        </Box>
                      );
                    }
                    return null;
                  })}
                </Box>
              </Box>
              <Box></Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 3 }} />
          </Grid>

          {/* Yogas and Doshas Section */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Yogas and Doshas
            </Typography>
          </Grid>

          {/* Pancha Mahapurusha Rajyoga */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 2, mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Pancha Mahapurusha Rajyoga
              </Typography>

              {panchaMahapurushaYogas.length > 0 ? (
                <Grid container spacing={2}>
                  {panchaMahapurushaYogas.map((yoga, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          height: '100%',
                          border: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                          borderRadius: 2,
                          backgroundColor: (theme) => theme.palette.background.paper,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1 }}>
                            {yoga.planet}
                          </Typography>
                          <Chip
                            label={yoga.yogaName}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ mr: 1 }}
                          />
                          <Chip
                            label={yoga.type}
                            size="small"
                            color="secondary"
                            variant="outlined"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {yoga.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  No Pancha Mahapurusha Yogas are present in this chart.
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Neecha Yoga */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 2, mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Neecha (Debilitation) Yoga
              </Typography>

              {neechaYogas.length > 0 ? (
                <Grid container spacing={2}>
                  {neechaYogas.map((yoga, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          height: '100%',
                          border: (theme) => `1px solid ${alpha(
                            yoga.isDebilitationBroken ? theme.palette.warning.main : theme.palette.error.main,
                            0.1
                          )}`,
                          borderRadius: 2,
                          backgroundColor: (theme) => theme.palette.background.paper,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1 }}>
                            {yoga.planet}
                          </Typography>
                          <Chip
                            label={yoga.type}
                            size="small"
                            color={yoga.isDebilitationBroken ? "warning" : "error"}
                            variant="outlined"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {yoga.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  No Neecha Yogas are present in this chart.
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Kendra Trikon Rajyoga */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 2, mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Kendra Trikon Rajyoga
              </Typography>

              {kendraTrikonYogas.length > 0 ? (
                <Grid container spacing={2}>
                  {kendraTrikonYogas.map((yoga, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          height: '100%',
                          border: (theme) => `1px solid ${alpha(theme.palette.success.main, 0.1)}`,
                          borderRadius: 2,
                          backgroundColor: (theme) => theme.palette.background.paper,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1 }}>
                            {yoga.planets.join(', ')}
                          </Typography>
                          <Chip 
                            label={yoga.type} 
                            size="small" 
                            color="success"
                            variant="outlined"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {yoga.description}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                          Houses involved: {yoga.houses.join(', ')}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  No Kendra Trikon Rajyogas are present in this chart.
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Wealth Yogas */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 2, mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Wealth Yogas
              </Typography>

              {wealthYogas.length > 0 ? (
                <Grid container spacing={2}>
                  {wealthYogas.map((yoga, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          height: '100%',
                          border: (theme) => `1px solid ${alpha(theme.palette.success.main, 0.1)}`,
                          borderRadius: 2,
                          backgroundColor: (theme) => theme.palette.background.paper,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1 }}>
                            {yoga.name}
                          </Typography>
                          <Chip
                            label={yoga.type}
                            size="small"
                            color="success"
                            variant="outlined"
                            sx={{ mr: 1 }}
                          />
                          <Chip
                            label={yoga.planets.join('-')}
                            size="small"
                            color="success"
                            variant="outlined"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {yoga.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  No Wealth Yogas are present in this chart.
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Vipreet Rajyoga */}
          <Grid item xs={12}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                backgroundColor: (theme) => alpha(theme.palette.warning.main, 0.05),
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>
                  Vipreet Rajyoga
                </Typography>
                <Tooltip title="Vipreet Rajyoga is formed when lords of 6th, 8th, or 12th houses are placed in dusthana houses (6th, 8th, or 12th). These yogas indicate success through overcoming challenges and transforming difficulties into opportunities.">
                  <InfoIcon color="action" fontSize="small" />
                </Tooltip>
              </Box>

              {vipreetYogas.length > 0 ? (
                <Grid container spacing={2}>
                  {vipreetYogas.map((yoga, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          height: '100%',
                          border: (theme) => `1px solid ${alpha(theme.palette.warning.main, 0.1)}`,
                          borderRadius: 2,
                          backgroundColor: (theme) => theme.palette.background.paper,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mr: 1 }}>
                            {yoga.planet}
                          </Typography>
                          <Chip
                            label={yoga.type}
                            size="small"
                            color="warning"
                            variant="outlined"
                            sx={{ mr: 1 }}
                          />
                          <Chip
                            label={`House ${yoga.house}`}
                            size="small"
                            color="warning"
                            variant="outlined"
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {yoga.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography variant="body1" color="text.secondary">
                  No Vipreet Rajyoga is present in this chart.
                </Typography>
              )}
            </Paper>
          </Grid>

          {/* Planetary Positions */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Planetary Positions
            </Typography>
          </Grid>
          {Object.entries(celebrity.planets).map(([planet, data]) => (
            <React.Fragment key={planet}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  {planet.charAt(0).toUpperCase() + planet.slice(1)}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" color="text.secondary">
                  Sign
                </Typography>
                <Typography variant="body1">
                  {data.sign}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" color="text.secondary">
                  House
                </Typography>
                <Typography variant="body1">
                  {data.house}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" color="text.secondary">
                  Degree
                </Typography>
                <Typography variant="body1">
                  {data.degree}°
                </Typography>
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12}>
            <Divider sx={{ my: 3 }} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default CelebrityDetail; 