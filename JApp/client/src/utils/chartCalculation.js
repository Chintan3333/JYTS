/**
 * Vedic chart calculation using astronomy-engine.
 * Computes ascendant from latitude/longitude and planet positions (sidereal).
 */
import {
  EclipticGeoMoon,
  Ecliptic,
  GeoVector,
  Body,
  SearchMoonNode,
  GeoMoon,
} from 'astronomy-engine';

const ZODIAC = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
];



function lahiriAyanamsa(date) {
  const year = date.getUTCFullYear() + (date.getUTCMonth() + 1) / 12;
  return (year - 285) * 50.290966 / 3600;
}

/**
 * Compute sidereal (Lahiri) ecliptic longitude in degrees 0-360 from tropical longitude.
 */
function tropicalToSiderealLongitude(tropicalLonDeg, date) {
  const ayanamsa = lahiriAyanamsa(date);
  return (tropicalLonDeg - ayanamsa + 360) % 360;
}

/**
 * Get planet sidereal longitude in degrees (0-360) for a given date.
 */
function getPlanetSiderealLongitude(date, planet) {
  let eclLonDeg;
  if (planet === 'Moon') {
    const ecl = EclipticGeoMoon(date);
    eclLonDeg = ecl.lon;
  } else if (planet === 'Rahu' || planet === 'Ketu') {
    const node = SearchMoonNode(date);
    const ecl = Ecliptic(GeoMoon(node.time));

    if (planet == 'Rahu') {
      eclLonDeg = node.kind == 1 ? ecl.elon : (ecl.elon + 180) % 360;
    } else if (planet == 'Ketu') {
      eclLonDeg = node.kind == -1 ? ecl.elon : (ecl.elon + 180) % 360;
    }
  } else {
    const vec = GeoVector(Body[planet], date, true);
    const ecl = Ecliptic(vec);
    eclLonDeg = ecl.elon;
  }
  return tropicalToSiderealLongitude(eclLonDeg, date);
}



function toJulianDate(date) {
  return date / 86400000 + 2440587.5;
}

function getGMST(date) {
  const JD = toJulianDate(date);
  const T = (JD - 2451545.0) / 36525;

  let GMST = 280.46061837 +
    360.98564736629 * (JD - 2451545) +
    0.000387933 * T * T -
    (T * T * T) / 38710000;

  return (GMST % 360 + 360) % 360;
}

function getLST(date, longitude) {
  const GMST = getGMST(date);
  const LST = GMST + longitude;
  return (LST % 360 + 360) % 360;
}



/**
 * Calculate ascendant (Lagna) from birth date, latitude and longitude.
 * Uses eastern horizon direction converted to ecliptic (astronomy-engine).
 * @param {Date} date - Birth date/time (with timezone applied)
 * @param {number} lat - Latitude in degrees
 * @param {number} lon - Longitude in degrees
 * @returns {{ sign: string, degree: number }} Ascendant sign and degree in sign
 */
export function calculateAscendant(date, lat, lon) {

  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  const epsilon = 23.439291; // Earth's axial tilt

  const LST = getLST(date, lon);

  const lstRad = LST * rad;
  const latRad = lat * rad;
  const epsRad = epsilon * rad;

  const numerator = -Math.cos(lstRad);
  const denominator =
    Math.sin(lstRad) * Math.cos(epsRad) +
    Math.tan(latRad) * Math.sin(epsRad);

  let asc = Math.atan2(numerator, denominator) * deg;

  asc = (asc + 180 + 360) % 360;
  let tropicalLon = asc;

  // Convert to sidereal
  const siderealLon =
    tropicalToSiderealLongitude(tropicalLon, date);
  console.log('side longitude', siderealLon);

  const signIndex = Math.floor(siderealLon / 30);
  const degreeInSign = siderealLon % 30;

  return {
    sign: ZODIAC[signIndex],
    degree: Number(degreeInSign.toFixed(2))
  };

}

/**
 * Get house number (1-12) for a planet given ascendant longitude and planet longitude (both 0-360).
 */
// function getHouse(planetLongitudeDeg, ascendantLongitudeDeg) {
//   const diff = (planetLongitudeDeg - ascendantLongitudeDeg + 360) % 360;
//   return Math.floor(diff / 30) + 1;
// }

function getHouse(signIndex, ascendentSignIndex) {
  return ((signIndex - ascendentSignIndex + 12) % 12) + 1;
}

/**
 * Calculate full chart: ascendant and all planet positions (sign, house, degree).
 * @param {Date} date - Birth date/time
 * @param {number} lat - Latitude in degrees
 * @param {number} lon - Longitude in degrees
 */
export function calculateChart(date, lat, lon) {
  const ascendant = calculateAscendant(date, lat, lon);
  const ascendantLonDeg = ZODIAC.indexOf(ascendant.sign) * 30 + ascendant.degree;

  const planetKeys = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn', 'rahu', 'ketu'];
  const planetNames = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'];

  const planets = {};
  planetKeys.forEach((key, i) => {
    const lonDeg = getPlanetSiderealLongitude(date, planetNames[i]);
    const signIndex = Math.floor(lonDeg / 30) % 12;
    const degreeInSign = lonDeg % 30;
    //const house = getHouse(lonDeg, ascendantLonDeg);
    const house = getHouse(signIndex, ZODIAC.indexOf(ascendant.sign))
    planets[key] = {
      sign: ZODIAC[signIndex],
      house,
      degree: Math.round(degreeInSign * 100) / 100,
    };
  });

  return { ascendant, planets };
}
