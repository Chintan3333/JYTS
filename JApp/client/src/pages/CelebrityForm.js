import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

function CelebrityForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '1970-01-01',
    birthTime: '12:00',
    birthPlace: 'Surat',
    category: 'Business',
    timeZone: '+05:30',
    dataAccuracy: 'good',
    ascendant: {
      sign: '',
      degree: ''
    },
    planets: {
      sun: { sign: '', house: '', degree: '1' },
      moon: { sign: '', house: '', degree: '1' },
      mars: { sign: '', house: '', degree: '1' },
      mercury: { sign: '', house: '', degree: '1' },
      jupiter: { sign: '', house: '', degree: '1' },
      venus: { sign: '', house: '', degree: '1' },
      saturn: { sign: '', house: '', degree: '1' },
      rahu: { sign: '', house: '', degree: '1' },
      ketu: { sign: '', house: '', degree: '1' }
    }
  });

  useEffect(() => {
    if (id) {
      fetchCelebrity();
    }
  }, [id]);

  const fetchCelebrity = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://jyts-app-backend.onrender.com/api/celebrities/${id}`);
      const celebrity = response.data;
      setFormData({
        ...celebrity,
        birthDate: new Date(celebrity.birthDate).toISOString().split('T')[0]
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch celebrity data');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePlanetChange = (planet, field, value) => {
    setFormData(prev => ({
      ...prev,
      planets: {
        ...prev.planets,
        [planet]: {
          ...prev.planets[planet],
          [field]: value
        }
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (id) {
        await axios.put(`https://jyts-app-backend.onrender.com/api/celebrities/${id}`, formData);
      } else {
        await axios.post('https://jyts-app-backend.onrender.com/api/celebrities', formData);
      }
      navigate('/celebrities');
    } catch (err) {
      setError('Failed to save celebrity data');
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

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {id ? 'Edit Celebrity' : 'Add New Celebrity'}
        </Typography>
        
        {error && (
          <Typography color="error" paragraph>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Basic Information */}
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
                value={formData.birthTime}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birth Place"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Time Zone"
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
                required
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
                required
                SelectProps={{ native: true }}
              >
                <option value="good">Good</option>
                <option value="bad">Bad</option>
              </TextField>
            </Grid>

            {/* Ascendant */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Ascendant
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Sign"
                name="ascendant.sign"
                value={formData.ascendant.sign}
                onChange={handleChange}
                required
                SelectProps={{ native: true }}
              >
                <option value="">Select Sign</option>
                {zodiacSigns.map(sign => (
                  <option key={sign} value={sign}>{sign}</option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Degree"
                name="ascendant.degree"
                type="number"
                value={formData.ascendant.degree}
                onChange={handleChange}
                required
                inputProps={{ min: 0, max: 30, step: 0.01 }}
              />
            </Grid>

            {/* Planets */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Planetary Positions
              </Typography>
            </Grid>
            {Object.entries(formData.planets).map(([planet, data]) => (
              <React.Fragment key={planet}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" gutterBottom>
                    {planet.charAt(0).toUpperCase() + planet.slice(1)}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    select
                    label="Sign"
                    value={data.sign}
                    onChange={(e) => handlePlanetChange(planet, 'sign', e.target.value)}
                    required
                    SelectProps={{ native: true }}
                  >
                    <option value="">Select Sign</option>
                    {zodiacSigns.map(sign => (
                      <option key={sign} value={sign}>{sign}</option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="House"
                    type="number"
                    value={data.house}
                    onChange={(e) => handlePlanetChange(planet, 'house', e.target.value)}
                    required
                    inputProps={{ min: 1, max: 12 }}
                    InputProps={{
                      inputProps: {
                        step: 1
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Degree"
                    type="number"
                    value={data.degree}
                    onChange={(e) => handlePlanetChange(planet, 'degree', e.target.value)}
                    required
                    inputProps={{ min: 0, max: 30, step: 0.01 }}
                    InputProps={{
                      inputProps: {
                        step: 0.01
                      }
                    }}
                  />
                </Grid>
              </React.Fragment>
            ))}

            <Grid item xs={12}>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/celebrities')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {id ? 'Update' : 'Save'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default CelebrityForm; 