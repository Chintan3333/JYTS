import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  CircularProgress,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { calculateChart } from '../utils/chartCalculation';

const categories = ['Business', 'Politics', 'Entertainment', 'Sports', 'Science', 'Other'];

function GenerateCelebrityChart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '1990-01-01',
    birthTime: '12:00',
    birthPlace: '',
    latitude: '',
    longitude: '',
    timeZone: '+05:30',
    category: 'Business',
    dataAccuracy: 'good',
  });

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchCelebrity = async () => {
      try {
        setInitialLoading(true);
        const response = await axios.get(`https://jyts-app-backend.onrender.com/api/celebrities/${id}`);
        const celebrity = response.data;
        setFormData({
          name: celebrity.name || '',
          birthDate: celebrity.birthDate ? new Date(celebrity.birthDate).toISOString().split('T')[0] : '1990-01-01',
          birthTime: celebrity.birthTime || '12:00',
          birthPlace: celebrity.birthPlace || '',
          latitude: celebrity.latitude ?? 0,
          longitude: celebrity.longitude ?? 0,
          timeZone: celebrity.timeZone || '+05:30',
          category: celebrity.category || 'Business',
          dataAccuracy: celebrity.dataAccuracy || 'good',
        });
      } catch (err) {
        setError('Failed to load celebrity details for re-generation.');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchCelebrity();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const lat = parseFloat(formData.latitude);
    const lon = parseFloat(formData.longitude);
    if (isNaN(lat) || lat < -90 || lat > 90) {
      setError('Please enter a valid latitude (-90 to 90).');
      return;
    }
    if (isNaN(lon) || lon < -180 || lon > 180) {
      setError('Please enter a valid longitude (-180 to 180).');
      return;
    }
    try {
      setLoading(true);
      const dateStr = formData.birthDate.split('T')[0];
      const timeStr = formData.birthTime.includes(':') ? formData.birthTime : formData.birthTime + ':00';
      const tz = formData.timeZone.startsWith('+') || formData.timeZone.startsWith('-') ? formData.timeZone : `+${formData.timeZone}`;
      const birthDateTime = new Date(`${dateStr}T${timeStr}:00${tz}`);
      if (isNaN(birthDateTime.getTime())) {
        setError('Invalid date or time.');
        setLoading(false);
        return;
      }
      console.log(' time here at generate', lat, lon, birthDateTime);

      const { ascendant, planets } = calculateChart(birthDateTime, lat, lon);
      const payload = {
        name: formData.name,
        birthDate: new Date(`${dateStr}T00:00:00Z`).toISOString(),
        birthTime: timeStr,
        birthPlace: formData.birthPlace || `${lat.toFixed(4)}°, ${lon.toFixed(4)}°`,
        latitude: lat,
        longitude: lon,
        category: formData.category,
        timeZone: tz,
        dataAccuracy: formData.dataAccuracy,
        ascendant: {
          sign: ascendant.sign,
          degree: ascendant.degree,
        },
        planets: {
          sun: planets.sun,
          moon: planets.moon,
          mars: planets.mars,
          mercury: planets.mercury,
          jupiter: planets.jupiter,
          venus: planets.venus,
          saturn: planets.saturn,
          rahu: planets.rahu,
          ketu: planets.ketu,
        },
      };
      if (id) {
        const response = await axios.put(`https://jyts-app-backend.onrender.com/api/celebrities/${id}`, payload);
        navigate(`/celebrities/${response.data._id}`);
      } else {
        const response = await axios.post('https://jyts-app-backend.onrender.com/api/celebrities', payload);
        navigate(`/celebrities/${response.data._id}`);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to generate chart and save celebrity.');
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <AutoAwesomeIcon color="primary" fontSize="medium" />
          <Typography variant="h4" component="h1">
            {id ? 'Re-generate Celebrity Chart' : 'Generate Celebrity Chart'}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Enter birth details and location (latitude/longitude). Ascendant and planet positions will be calculated automatically using astronomy-engine.
        </Typography>

        {error && (
          <Typography color="error" paragraph>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Basic Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birth Date"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birth Time"
                name="birthTime"
                placeholder="HH:MM (24h)"
                value={formData.birthTime}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Time Zone"
                name="timeZone"
                placeholder="+05:30 or -05:00"
                value={formData.timeZone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birth Place (optional)"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
                placeholder="City or description"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                placeholder="Bussiness"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Data Accuracy"
                name="dataAccuracy"
                value={formData.dataAccuracy}
                onChange={handleChange}
                SelectProps={{ native: true }}
              >
                <option value="good">Good</option>
                <option value="bad">Bad</option>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Location (for Ascendant calculation)
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Latitude and longitude of birth place are required to compute the ascendant (rising sign).
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Latitude"
                name="latitude"
                type="number"
                value={formData.latitude}
                onChange={handleChange}
                required
                inputProps={{ min: -90, max: 90, step: 0.0001 }}
                placeholder="e.g. 21.1702"
                helperText="Degrees (-90 to 90). North positive."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Longitude"
                name="longitude"
                type="number"
                value={formData.longitude}
                onChange={handleChange}
                required
                inputProps={{ min: -180, max: 180, step: 0.0001 }}
                placeholder="e.g. 72.8311"
                helperText="Degrees (-180 to 180). East positive."
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" onClick={() => navigate('/celebrities')}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AutoAwesomeIcon />}
                >
                  {loading ? 'Generating…' : id ? 'Re-generate & Update' : 'Generate Chart & Save'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default GenerateCelebrityChart;
