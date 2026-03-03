import React, { useEffect, useMemo, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  TextField,
  Button,
  Divider,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import PublicIcon from '@mui/icons-material/Public';
import { alpha } from '@mui/material/styles';
import { calculateChart } from '../utils/chartCalculation';
import { getPlanetNakshatraDetails, getNakshatraDetailsFromLongitude } from '../utils/nakshatraCalculation';

const PLANET_KEYS = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn', 'rahu', 'ketu'];
const PLANET_NAMES = {
  sun: 'Sun',
  moon: 'Moon',
  mars: 'Mars',
  mercury: 'Mercury',
  jupiter: 'Jupiter',
  venus: 'Venus',
  saturn: 'Saturn',
  rahu: 'Rahu',
  ketu: 'Ketu',
};

const getPlanetAbbr = (planet) => {
  const planetMap = {
    sun: 'Su', moon: 'Mo', mars: 'Ma', mercury: 'Me',
    jupiter: 'Ju', venus: 'Ve', saturn: 'Sa', rahu: 'Ra', ketu: 'Ke',
  };
  return planetMap[planet] || planet;
};

const getPlanetColor = (planet) => {
  const colorMap = {
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
  return colorMap[planet] || '#1976d2';
};

const getTextColor = (backgroundColor) => {
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

function parseTzOffsetMinutes(tz) {
  const raw = String(tz || '').trim();
  const m = raw.match(/^([+-])(\d{1,2})(?::?(\d{2}))?$/);
  if (!m) return null;
  const sign = m[1] === '-' ? -1 : 1;
  const hours = Number(m[2]);
  const minutes = Number(m[3] || '00');
  if (Number.isNaN(hours) || Number.isNaN(minutes) || hours > 14 || minutes > 59) return null;
  return sign * (hours * 60 + minutes);
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function buildNowDateForTz(tz) {
  const offsetMin = parseTzOffsetMinutes(tz);
  if (offsetMin == null) return null;

  // Create a "wall-clock now" for that offset, then reconstruct Date with the same offset.
  const localMs = Date.now() + offsetMin * 60_000;
  const d = new Date(localMs);
  const dateStr = `${d.getUTCFullYear()}-${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())}`;
  const timeStr = `${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}:${pad2(d.getUTCSeconds())}`;
  return {
    date: new Date(`${dateStr}T${timeStr}${tz}`),
    label: `${dateStr} ${timeStr} (${tz})`,
  };
}

function Gochar() {
  const [formData, setFormData] = useState({
    timeZone: '+05:30',
    latitude: '21.17',
    longitude: '72.83',
  });
  const [error, setError] = useState(null);
  const [computedAt, setComputedAt] = useState('');
  const [ascendant, setAscendant] = useState(null);
  const [rows, setRows] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generate = () => {
    setError(null);

    const lat = parseFloat(formData.latitude);
    const lon = parseFloat(formData.longitude);
    if (Number.isNaN(lat) || lat < -90 || lat > 90) {
      setError('Please enter a valid latitude (-90 to 90).');
      return;
    }
    if (Number.isNaN(lon) || lon < -180 || lon > 180) {
      setError('Please enter a valid longitude (-180 to 180).');
      return;
    }

    const now = buildNowDateForTz(formData.timeZone);
    if (!now) {
      setError('Please enter a valid time zone offset like +05:30 or -04:00.');
      return;
    }

    const { ascendant: asc, planets } = calculateChart(now.date, lat, lon);
    setAscendant(asc);
    setComputedAt(now.label);

    const ascLon = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'].indexOf(asc.sign) * 30 + Number(asc.degree || 0);
    const ascNak = getNakshatraDetailsFromLongitude(ascLon);

    const newRows = PLANET_KEYS.map((key) => {
      const nak = getPlanetNakshatraDetails(now.date, PLANET_NAMES[key]);
      return {
        key,
        name: PLANET_NAMES[key],
        sign: planets[key]?.sign || nak.zodiacSign,
        degree: planets[key]?.degree ?? nak.degreeInsideZodiac,
        nakshatra: nak.nakshatra,
        pada: nak.pada,
        longitude: nak.planetLongitude,
      };
    });

    setRows([
      {
        key: 'ascendant',
        name: 'Ascendant',
        sign: asc.sign,
        degree: asc.degree,
        nakshatra: ascNak.nakshatra,
        pada: ascNak.pada,
        longitude: ascNak.planetLongitude,
        isAsc: true,
      },
      ...newRows,
    ]);
  };

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headerChips = useMemo(() => {
    const lat = parseFloat(formData.latitude);
    const lon = parseFloat(formData.longitude);
    return [
      { label: `TZ ${formData.timeZone}`, color: 'default' },
      { label: `Lat ${Number.isNaN(lat) ? formData.latitude : lat.toFixed(2)}°`, color: 'default' },
      { label: `Lon ${Number.isNaN(lon) ? formData.longitude : lon.toFixed(2)}°`, color: 'default' },
    ];
  }, [formData.latitude, formData.longitude, formData.timeZone]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <PublicIcon color="primary" />
          <Typography variant="h4" component="h1">
            Gochar (Current Transits)
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Generates a transit chart for the current date/time using the selected time zone offset and location.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Time Zone"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
              placeholder="+05:30"
              helperText="Offset like +05:30 or -04:00"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Latitude"
              name="latitude"
              type="number"
              value={formData.latitude}
              onChange={handleChange}
              inputProps={{ min: -90, max: 90, step: 0.0001 }}
              helperText="Degrees (-90 to 90)"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Longitude"
              name="longitude"
              type="number"
              value={formData.longitude}
              onChange={handleChange}
              inputProps={{ min: -180, max: 180, step: 0.0001 }}
              helperText="Degrees (-180 to 180)"
            />
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {headerChips.map((c) => (
                  <Chip key={c.label} label={c.label} size="small" color={c.color} variant="outlined" />
                ))}
                {computedAt && <Chip label={`Now: ${computedAt}`} size="small" variant="outlined" />}
              </Box>
              <Button variant="contained" startIcon={<RefreshIcon />} onClick={generate}>
                Refresh Gochar
              </Button>
            </Box>
          </Grid>
        </Grid>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Planetary Positions
          </Typography>
          {ascendant && (
            <Chip
              label={`Asc: ${ascendant.sign} ${ascendant.degree}°`}
              size="small"
              variant="outlined"
              sx={{ ml: 1 }}
            />
          )}
        </Box>

        <TableContainer component={Paper} elevation={0} sx={{ border: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' }}>
                <TableCell sx={{ fontWeight: 700 }}>Body</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Sign</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Nakshatra</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Pada</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">Degree</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((r) => {
                const color = r.isAsc ? '#1976d2' : getPlanetColor(r.key);
                const textColor = getTextColor(color);
                return (
                  <TableRow key={r.key} sx={{ '&:hover': { backgroundColor: alpha(color, 0.06) } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: '50%',
                            backgroundColor: color,
                            color: textColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                          }}
                        >
                          {r.isAsc ? 'As' : getPlanetAbbr(r.key)}
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: r.isAsc ? 700 : 500 }}>
                          {r.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{r.sign}</TableCell>
                    <TableCell>
                      <Tooltip title={`Longitude: ${r.longitude}°`} arrow>
                        <span>{r.nakshatra}</span>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="center">{r.pada}</TableCell>
                    <TableCell align="right">{Number(r.degree).toFixed(2)}°</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default Gochar;

