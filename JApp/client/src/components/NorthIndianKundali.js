import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { getPlanetAbbr, getPlanetColor, getSignAbbr, getTextColor, toPlanetLabel } from '../utils/planetDisplay';

/** Scale jyotichart inner grid (110–510 on 616 canvas) to full 0–100 viewBox. */
const s = (v) => ((v - 110) / 400) * 100;

/**
 * North Indian chart — houses fixed, counter-clockwise from Lagna (H1 top-center).
 * Coordinates fill the entire viewBox with no outer margin.
 */
const HOUSES = {
  1: {
    centroid: { x: s(310), y: s(210) },
    signAnchor: { x: s(310), y: s(130), textAnchor: 'middle' },
  },
  2: {
    centroid: { x: s(210), y: s(137) },
    signAnchor: { x: s(205), y: s(185), textAnchor: 'start' },
  },
  12: {
    centroid: { x: s(410), y: s(137) },
    signAnchor: { x: s(415), y: s(185), textAnchor: 'end' },
  },
  3: {
    centroid: { x: s(137), y: s(210) },
    signAnchor: { x: s(180), y: s(215), textAnchor: 'start' },
  },
  11: {
    centroid: { x: s(483), y: s(210) },
    signAnchor: { x: s(440), y: s(215), textAnchor: 'end' },
  },
  4: {
    centroid: { x: s(210), y: s(310) },
    signAnchor: { x: s(118), y: s(310), textAnchor: 'start' },
  },
  10: {
    centroid: { x: s(410), y: s(310) },
    signAnchor: { x: s(502), y: s(310), textAnchor: 'end' },
  },
  5: {
    centroid: { x: s(137), y: s(410) },
    signAnchor: { x: s(180), y: s(410), textAnchor: 'start' },
  },
  9: {
    centroid: { x: s(483), y: s(410) },
    signAnchor: { x: s(440), y: s(410), textAnchor: 'end' },
  },
  6: {
    centroid: { x: s(210), y: s(483) },
    signAnchor: { x: s(205), y: s(435), textAnchor: 'middle' },
  },
  7: {
    centroid: { x: s(310), y: s(410) },
    signAnchor: { x: s(310), y: s(490), textAnchor: 'middle' },
  },
  8: {
    centroid: { x: s(410), y: s(483) },
    signAnchor: { x: s(415), y: s(435), textAnchor: 'middle' },
  },
};

const HOUSE_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const STROKE = 0.65;

function ChartSkeleton() {
  return (
    <>
      <rect x="0" y="0" width="100" height="100" fill="none" stroke="currentColor" strokeWidth={STROKE} />
      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth={STROKE * 0.75} />
      <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth={STROKE * 0.75} />
      <polygon
        points={`${s(310)},${s(110)} ${s(510)},${s(310)} ${s(310)},${s(510)} ${s(110)},${s(310)}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={STROKE * 0.75}
      />
    </>
  );
}

function PlanetChip({ planetKey, data, nakDetail, tooltipExtra }) {
  const bgColor = getPlanetColor(planetKey);
  const textColor = getTextColor(bgColor);
  const label = toPlanetLabel(planetKey);

  return (
    <Tooltip
      title={
        <>
          <strong>{label}</strong>
          {data.sign && (
            <>
              <br />
              <strong>Sign:</strong> {data.sign}
              {data.degree !== '' && data.degree != null && (
                <> · <strong>Degree:</strong> {data.degree}°</>
              )}
            </>
          )}
          {nakDetail && (
            <>
              <br />
              <strong>Nakshatra:</strong> {nakDetail.nakshatra} · <strong>Pada:</strong> {nakDetail.pada}
            </>
          )}
          {tooltipExtra}
        </>
      }
      arrow
      placement="top"
    >
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          backgroundColor: bgColor,
          color: textColor,
          px: 0.55,
          py: 0.15,
          borderRadius: '4px',
          fontSize: '0.72rem',
          fontWeight: 800,
          lineHeight: 1.35,
          boxShadow: '0 1px 2px rgba(0,0,0,0.18)',
          cursor: 'help',
        }}
      >
        {getPlanetAbbr(planetKey)}
      </Box>
    </Tooltip>
  );
}

function HouseOverlay({ houseNum, planetEntries, planetNakshatraDetails }) {
  const geo = HOUSES[houseNum];
  if (!geo) return null;
  return (
    <Box
      sx={{
        position: 'absolute',
        left: `${geo.centroid.x}%`,
        top: `${geo.centroid.y}%`,
        transform: 'translate(-50%, -50%)',
        width: houseNum === 7 ? '24%' : '20%',
        maxWidth: houseNum === 1 || houseNum === 7 ? 100 : 88,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0.35,
          flexDirection: [3,5,9,11].includes(houseNum)  ? 'column':'row',
          justifyContent: 'center',
          maxWidth: '100%',
        }}
      >
        {planetEntries.map(({ key, data, tooltipExtra }) => {
          const planetCap = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <PlanetChip
              key={key}
              planetKey={key}
              data={data}
              nakDetail={planetNakshatraDetails?.[planetCap]}
              tooltipExtra={tooltipExtra}
            />
          );
        })}
      </Box>
    </Box>
  );
}

function SignLabels({ housePositions, lagnaHouse = 1 }) {
  return (
    <>
      {HOUSE_ORDER.map((houseNum) => {
        const geo = HOUSES[houseNum];
        const signNumber = housePositions[houseNum - 1];
        //const signAbbr = getSignAbbr(signNumber);
        const signAbbr = signNumber;
        const isLagna = houseNum === lagnaHouse;
        const anchor = geo.signAnchor;

        return (
          <text
            key={`sign-${houseNum}`}
            x={anchor.x}
            y={anchor.y}
            textAnchor={anchor.textAnchor || 'middle'}
            dominantBaseline="middle"
            style={{
              fontSize: '4.5px',
              fontWeight: 800,
              fill: 'currentColor',
              opacity: 1,
            }}
          >
            {signAbbr}
           
          </text>
        );
      })}
    </>
  );
}

function NorthIndianKundali({
  housePositions = [],
  planets = {},
  planetNakshatraDetails = {},
  subtitle,
  lagnaHouse = 1,
}) {
  const planetsByHouse = {};
  for (let h = 1; h <= 12; h += 1) planetsByHouse[h] = [];

  Object.entries(planets).forEach(([key, data]) => {
    if (data?.house >= 1 && data.house <= 12) {
      planetsByHouse[data.house].push({
        key,
        data,
        tooltipExtra: data.tooltipExtra,
      });
    }
  });

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {subtitle && (
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5 }}>
          {subtitle}
        </Typography>
      )}

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 440,
          aspectRatio: '1 / 1',
          mx: 'auto',
          overflow: 'hidden',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(255,248,220,0.05)' : '#fffdf5'),
        }}
      >
        <Box
          component="svg"
          viewBox="0 0 100 100"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            color: (theme) => (theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.82)' : '#4a3728'),
          }}
        >
          <ChartSkeleton />
          <SignLabels housePositions={housePositions} lagnaHouse={lagnaHouse} />
        </Box>

        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {HOUSE_ORDER.map((houseNum) => (
            <HouseOverlay
              key={houseNum}
              houseNum={houseNum}
              planetEntries={planetsByHouse[houseNum]}
              planetNakshatraDetails={planetNakshatraDetails}
            />
          ))}
        </Box>
      </Box>

      <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5, textAlign: 'center' }}>
        North Indian · Fixed houses · Signs: Ar Ta Ge Ca Le Vi Li Sc Sg Cp Aq Pi · ↑ Lagna
      </Typography>
    </Box>
  );
}

export default NorthIndianKundali;
