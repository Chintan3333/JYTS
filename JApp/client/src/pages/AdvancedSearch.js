import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const FilterSection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const planets = [
  'Sun', 'Moon', 'Mercury', 'Venus', 'Mars',
  'Jupiter', 'Saturn', 'Rahu', 'Ketu'
];

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const aspects = [
  'Conjunction (0°)',
  'Sextile (60°)',
  'Square (90°)',
  'Trine (120°)',
  'Opposition (180°)'
];

const houseLords = {
  'Aries': 'Mars',
  'Taurus': 'Venus',
  'Gemini': 'Mercury',
  'Cancer': 'Moon',
  'Leo': 'Sun',
  'Virgo': 'Mercury',
  'Libra': 'Venus',
  'Scorpio': 'Mars',
  'Sagittarius': 'Jupiter',
  'Capricorn': 'Saturn',
  'Aquarius': 'Saturn',
  'Pisces': 'Jupiter'
};

const AdvancedSearch = () => {
  const [filters, setFilters] = useState({
    planetPosition: {
      planet: '',
      sign: '',
      degree: '',
    },
    conjunction: {
      planet1: '',
      planet2: '',
    },
    aspect: {
      planet1: '',
      planet2: '',
      aspect: '',
    },
    houseLord: {
      houseNumber: '',
      positionHouse: '',
    },
  });

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFilterChange = (section, field, value) => {
    setFilters(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleReset = () => {
    setFilters({
      planetPosition: {
        planet: '',
        sign: '',
        degree: '',
      },
      conjunction: {
        planet1: '',
        planet2: '',
      },
      aspect: {
        planet1: '',
        planet2: '',
        aspect: '',
      },
      houseLord: {
        houseNumber: '',
        positionHouse: '',
      },
    });
    setSearchResults([]);
    setError(null);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSearchResults([]);

    try {
      let endpoint = '';
      let data = {};

      // Determine which search to perform based on filled filters
      if (filters.planetPosition.planet && filters.planetPosition.sign && filters.planetPosition.degree) {
        endpoint = 'https://jyts-app-backend.onrender.com/api/search/planet-position';
        data = filters.planetPosition;
      } else if (filters.conjunction.planet1 && filters.conjunction.planet2) {
        endpoint = 'https://jyts-app-backend.onrender.com/api/search/conjunction';
        data = filters.conjunction;
      } else if (filters.aspect.planet1 && filters.aspect.planet2 && filters.aspect.aspect) {
        endpoint = 'https://jyts-app-backend.onrender.com/api/search/aspect';
        data = filters.aspect;
      } else if (filters.houseLord.houseNumber && filters.houseLord.positionHouse) {
        endpoint = 'https://jyts-app-backend.onrender.com/api/search/house-lord';
        data = filters.houseLord;
      } else {
        setError('Please fill in all required fields for at least one search type');
        setLoading(false);
        return;
      }

      const response = await axios.post(endpoint, data);
      setSearchResults(response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred while searching');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const renderSearchResult = (celebrity) => {
    const planetInfo = Object.entries(celebrity.planets)
      .filter(([_, data]) => data && data.sign)
      .map(([planet, data]) => `${planet}: ${data.sign} ${data.degree}°`)
      .join(', ');

    return (
      <Card key={celebrity._id} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">{celebrity.name}</Typography>
          <Typography color="text.secondary" gutterBottom>
            Born: {formatDate(celebrity.birthDate)} in {celebrity.birthPlace}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ascendant: {celebrity.ascendant?.sign} {celebrity.ascendant?.degree}°
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {planetInfo}
          </Typography>
          {celebrity.houseLord && (
            <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
              {celebrity.houseLord.houseNumber}th House Lord ({celebrity.houseLord.lord}) in {celebrity.houseLord.position.house}th House ({celebrity.houseLord.position.sign} {celebrity.houseLord.position.degree}°)
            </Typography>
          )}
          <Box sx={{ mt: 1 }}>
            <Chip label={celebrity.category} size="small" sx={{ mr: 1 }} />
            <Chip 
              label={`Data Accuracy: ${celebrity.dataAccuracy}`} 
              size="small" 
              color={celebrity.dataAccuracy === 'good' ? 'success' : 'error'}
            />
          </Box>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Advanced Search
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Filter Options */}
        <Grid item xs={12} md={4}>
          <FilterSection>
            <Typography variant="h6" gutterBottom>
              Filter Options
            </Typography>

            {/* Planet Position Filter */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                By Planet Position
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Planet</InputLabel>
                <Select
                  value={filters.planetPosition.planet}
                  label="Planet"
                  onChange={(e) => handleFilterChange('planetPosition', 'planet', e.target.value)}
                >
                  {planets.map((planet) => (
                    <MenuItem key={planet} value={planet}>{planet}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Zodiac Sign</InputLabel>
                <Select
                  value={filters.planetPosition.sign}
                  label="Zodiac Sign"
                  onChange={(e) => handleFilterChange('planetPosition', 'sign', e.target.value)}
                >
                  {zodiacSigns.map((sign) => (
                    <MenuItem key={sign} value={sign}>{sign}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Degree"
                type="number"
                value={filters.planetPosition.degree}
                onChange={(e) => handleFilterChange('planetPosition', 'degree', e.target.value)}
                inputProps={{ min: 0, max: 29.99, step: 0.01 }}
              />
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Conjunction Filter */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                By Conjunction
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Planet 1</InputLabel>
                <Select
                  value={filters.conjunction.planet1}
                  label="Planet 1"
                  onChange={(e) => handleFilterChange('conjunction', 'planet1', e.target.value)}
                >
                  {planets.map((planet) => (
                    <MenuItem key={planet} value={planet}>{planet}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Planet 2</InputLabel>
                <Select
                  value={filters.conjunction.planet2}
                  label="Planet 2"
                  onChange={(e) => handleFilterChange('conjunction', 'planet2', e.target.value)}
                >
                  {planets.map((planet) => (
                    <MenuItem key={planet} value={planet}>{planet}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Aspect Filter */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                By Aspect
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Planet 1</InputLabel>
                <Select
                  value={filters.aspect.planet1}
                  label="Planet 1"
                  onChange={(e) => handleFilterChange('aspect', 'planet1', e.target.value)}
                >
                  {planets.map((planet) => (
                    <MenuItem key={planet} value={planet}>{planet}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Planet 2</InputLabel>
                <Select
                  value={filters.aspect.planet2}
                  label="Planet 2"
                  onChange={(e) => handleFilterChange('aspect', 'planet2', e.target.value)}
                >
                  {planets.map((planet) => (
                    <MenuItem key={planet} value={planet}>{planet}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Aspect</InputLabel>
                <Select
                  value={filters.aspect.aspect}
                  label="Aspect"
                  onChange={(e) => handleFilterChange('aspect', 'aspect', e.target.value)}
                >
                  {aspects.map((aspect) => (
                    <MenuItem key={aspect} value={aspect}>{aspect}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* House Lord Position Filter */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                By House Lord Position
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>House Number</InputLabel>
                <Select
                  value={filters.houseLord.houseNumber}
                  label="House Number"
                  onChange={(e) => handleFilterChange('houseLord', 'houseNumber', e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}th House
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Position House</InputLabel>
                <Select
                  value={filters.houseLord.positionHouse}
                  label="Position House"
                  onChange={(e) => handleFilterChange('houseLord', 'positionHouse', e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}th House
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Search'}
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={handleReset}
                disabled={loading}
              >
                Reset
              </Button>
            </Box>
          </FilterSection>
        </Grid>

        {/* Search Results */}
        <Grid item xs={12} md={8}>
          <FilterSection>
            <Typography variant="h6" gutterBottom>
              Search Results
            </Typography>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress />
              </Box>
            ) : searchResults.length > 0 ? (
              searchResults.map(renderSearchResult)
            ) : (
              <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
                No results found. Use the filters above to search.
              </Typography>
            )}
          </FilterSection>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdvancedSearch; 