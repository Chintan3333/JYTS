import { ZODIAC_SIGNS } from '../constants/astrology';
import { getZodiacNumber } from './planetDisplay';

/** Build sign numbers (1–12) for each house from an ascendant sign name. */
export function buildHouseSignNumbers(ascSign) {
  const ascIndex = ZODIAC_SIGNS.indexOf(ascSign);
  if (ascIndex < 0) return Array(12).fill(null);
  return Array.from({ length: 12 }, (_, i) => ((ascIndex + i) % 12) + 1);
}

/**
 * Build house sign array using planet occupancy when available (same logic as CelebrityDetail D1).
 */
export function buildHousePositionsFromChart(ascSign, planets = {}) {
  const positions = Array(12).fill(null);
  positions[0] = getZodiacNumber(ascSign);

  Object.values(planets).forEach((data) => {
    if (data?.house >= 1 && data.house <= 12 && data.sign) {
      positions[data.house - 1] = getZodiacNumber(data.sign);
    }
  });

  const ascIndex = ZODIAC_SIGNS.indexOf(ascSign);
  for (let i = 0; i < 12; i += 1) {
    if (!positions[i] && ascIndex >= 0) {
      positions[i] = ((ascIndex + i) % 12) + 1;
    }
  }
  return positions;
}

/** Convert planetsByHouse map to planets object for NorthIndianKundali. */
export function planetsObjectFromByHouse(planetsByHouse, planetDetails = {}) {
  const out = {};
  Object.entries(planetsByHouse || {}).forEach(([houseStr, keys]) => {
    const house = Number(houseStr);
    (keys || []).forEach((key) => {
      const detail = planetDetails[key] || {};
      out[key] = {
        house,
        sign: detail.sign || '',
        degree: detail.degree ?? '',
        ...detail,
      };
    });
  });
  return out;
}

/** Build planetsByHouse from asc + per-planet sign (divisional / moon / D9 charts). */
export function buildPlanetsByHouseFromSigns(planetKeys, planetSigns, ascSign, getHouseNumber) {
  const byHouse = {};
  for (let h = 1; h <= 12; h += 1) byHouse[h] = [];
  planetKeys.forEach((key) => {
    const sign = planetSigns[key];
    if (!sign) return;
    const house = getHouseNumber(sign, ascSign);
    if (house >= 1 && house <= 12) byHouse[house].push(key);
  });
  return byHouse;
}
