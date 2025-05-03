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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

function CelebrityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [celebrity, setCelebrity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCelebrity();
  }, [id]);

  const fetchCelebrity = async () => {
    try {
      const response = await axios.get(`https://jyts-app-backend.onrender.com/api/celebrities/${id}`);
      setCelebrity(response.data);
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

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
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
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gridTemplateRows: 'repeat(5, 1fr)',
              gap: 1,
              width: '100%',
              maxWidth: '800px',
              margin: '20px auto',
              border: '2px solid #1976d2',
              '& > div': {
                border: '1px solid #ccc',
                padding: 2,
                minHeight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                backgroundColor: '#f5f5f5',
              }
            }}>
              {/* Row 1 */}
              <Box></Box>
              {/* House 2 */}
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  House 2
                </Typography>
                <Typography variant="body2">
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
                      return (
                        <Box
                          key={planet}
                          sx={{
                            backgroundColor: getPlanetColor(planet),
                            color: 'white',
                            padding: '2px 4px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
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
        </Grid>
      </Paper>
    </Container>
  );
}

export default CelebrityDetail; 