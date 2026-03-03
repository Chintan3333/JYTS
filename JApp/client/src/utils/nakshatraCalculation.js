/**
 * Nakshatra calculation using sidereal longitude (Lahiri).
 * Returns nakshatra name, pada, and degree inside sign/nakshatra.
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

const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'PurvaPhalguni',
  'UttaraPhalguni', 'Hasta', 'Chitra', 'Swati', 'Vishakha',
  'Anuradha', 'Jyeshtha', 'Mula', 'PurvaAshadha', 'UttaraAshadha',
  'Shravana', 'Dhanishta', 'Shatabhisha', 'PurvaBhadrapada',
  'UttaraBhadrapada', 'Revati',
];

function lahiriAyanamsa(date) {
  const year = date.getUTCFullYear() + (date.getUTCMonth() + 1) / 12;
  return (year - 285) * 50.290966 / 3600;
}

function getSiderealLongitudeDeg(date, planet) {
  let eclLonDeg;
  if (planet === 'Moon') {
    const ecl = EclipticGeoMoon(date);
    eclLonDeg = ecl.lon;
  } else if (planet === 'Rahu' || planet === 'Ketu') {
    const node = SearchMoonNode(date);
    const ecl = Ecliptic(GeoMoon(node.time));
    if (planet === 'Rahu') {
      eclLonDeg = node.kind === 1 ? ecl.elon : (ecl.elon + 180) % 360;
    } else {
      eclLonDeg = node.kind === -1 ? ecl.elon : (ecl.elon + 180) % 360;
    }
  } else {
    const vec = GeoVector(Body[planet], date, true);
    const ecl = Ecliptic(vec);
    eclLonDeg = ecl.elon;
  }

  const ayanamsa = lahiriAyanamsa(date);
  return (eclLonDeg - ayanamsa + 360) % 360;
}

export function getNakshatraDetailsFromLongitude(longitudeDeg) {
  const lon = ((Number(longitudeDeg) % 360) + 360) % 360;
  const nakSize = 13 + 20 / 60; // 13.3333
  const padaSize = 3 + 20 / 60; // 3.3333

  const signIndex = Math.floor(lon / 30) % 12;
  const degreeInsideZodiac = lon % 30;

  const nakIndex = Math.floor(lon / nakSize) % 27;
  const degreeInsideNakshatra = lon % nakSize;
  const pada = Math.floor(degreeInsideNakshatra / padaSize) + 1;

  return {
    planetLongitude: Number(lon.toFixed(4)),
    zodiacSign: ZODIAC[signIndex],
    nakshatra: NAKSHATRAS[nakIndex],
    degreeInsideZodiac: Number(degreeInsideZodiac.toFixed(4)),
    degreeInsideNakshatra: Number(degreeInsideNakshatra.toFixed(4)),
    pada,
  };
}

export function getPlanetNakshatraDetails(date, planet) {
  const lon = getSiderealLongitudeDeg(date, planet);
  return getNakshatraDetailsFromLongitude(lon);
}

