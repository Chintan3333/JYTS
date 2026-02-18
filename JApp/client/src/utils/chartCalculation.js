/**
 * Vedic chart calculation using astronomy-engine.
 * Computes ascendant from latitude/longitude and planet positions (sidereal).
 */
import {
  MakeTime,
  Observer,
  Rotation_HOR_ECL,
  RotateVector,
  Vector,
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
  const year = date.getUTCFullYear();
  return 24 + (year - 2000) * 0.01397;
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

/**
 * Calculate ascendant (Lagna) from birth date, latitude and longitude.
 * Uses eastern horizon direction converted to ecliptic (astronomy-engine).
 * @param {Date} date - Birth date/time (with timezone applied)
 * @param {number} lat - Latitude in degrees
 * @param {number} lon - Longitude in degrees
 * @returns {{ sign: string, degree: number }} Ascendant sign and degree in sign
 */
export function calculateAscendant(date, lat, lon) {
  const time = MakeTime(date);
  const observer = new Observer(lat, lon, 0);
  const rot = Rotation_HOR_ECL(time, observer);
  // HOR: x=north, y=west, z=zenith. East = (0, -1, 0)
  const eastHorizon = new Vector(0, -1, 0, time);
  const eclVec = RotateVector(rot, eastHorizon);
  let tropicalLon = (Math.atan2(eclVec.y, eclVec.x) * (180 / Math.PI) + 360) % 360;
  const siderealLon = tropicalToSiderealLongitude(tropicalLon, date);
  const signIndex = Math.floor(siderealLon / 30) % 12;
  const degreeInSign = siderealLon % 30;
  return {
    sign: ZODIAC[signIndex],
    degree: Math.round(degreeInSign * 100) / 100,
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
