import { PLANET_NAMES, SIGN_ABBR, ZODIAC_NUMBERS } from '../constants/astrology';

const PLANET_ABBR = {
  sun: 'Su', moon: 'Mo', mars: 'Ma', mercury: 'Me',
  jupiter: 'Ju', venus: 'Ve', saturn: 'Sa', rahu: 'Ra', ketu: 'Ke',
};

const PLANET_COLORS = {
  sun: '#E25825',
  moon: '#87CEEB',
  mars: '#FF0000',
  mercury: '#008000',
  jupiter: '#FFDF00',
  venus: '#FF69B4',
  saturn: '#808080',
  rahu: '#800080',
  ketu: '#CD853F',
};

export function getPlanetAbbr(planet) {
  return PLANET_ABBR[String(planet).toLowerCase()] || planet;
}

export function getPlanetColor(planet) {
  return PLANET_COLORS[String(planet).toLowerCase()] || '#1976d2';
}

export function getTextColor(backgroundColor) {
  const hex = String(backgroundColor).replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

export function getZodiacNumber(sign) {
  return ZODIAC_NUMBERS[sign] || 0;
}

export function getSignAbbr(signNumber) {
  const n = Number(signNumber);
  if (!n || n < 1 || n > 12) return '';
  return SIGN_ABBR[n - 1];
}

export function toPlanetLabel(planetKey) {
  const key = String(planetKey).toLowerCase();
  return PLANET_NAMES[key] || (key.charAt(0).toUpperCase() + key.slice(1));
}
