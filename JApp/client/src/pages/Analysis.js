import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Helper function to get planet name
const getPlanetName = (planet) => {
  const planetMap = {
    'sun': 'Sun',
    'moon': 'Moon',
    'mars': 'Mars',
    'mercury': 'Mercury',
    'jupiter': 'Jupiter',
    'venus': 'Venus',
    'saturn': 'Saturn',
    'rahu': 'Rahu',
    'ketu': 'Ketu'
  };
  return planetMap[planet] || planet;
};

function Analysis() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchAnalysis();
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/celebrities');
      const uniqueCategories = [...new Set(response.data.map(celebrity => celebrity.category))];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const fetchAnalysis = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/celebrities/analysis/planetary-positions?category=${selectedCategory}`);
      setAnalysis(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch analysis data');
      setLoading(false);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Planetary Position Analysis
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={selectedCategory}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="all">All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      <Typography variant="subtitle1" gutterBottom>
        Total Celebrities Analyzed: {analysis.totalCelebrities}
      </Typography>

      <Grid container spacing={3}>
        {/* Overall Analysis */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Most Common Zodiac Signs
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sign</TableCell>
                    <TableCell align="right">Total Planets</TableCell>
                    <TableCell align="right">Planet Distribution</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {analysis.signAnalysis.map(({ sign, count, planetDistribution }) => (
                    <TableRow key={sign}>
                      <TableCell>{sign}</TableCell>
                      <TableCell align="right">{count}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          {planetDistribution && Object.entries(planetDistribution)
                            .filter(([planet, count]) => count > 0)
                            .sort(([,a], [,b]) => b - a) // Sort by count in descending order
                            .map(([planet, planetCount]) => (
                              <Typography key={planet} variant="body2">
                                {getPlanetName(planet)}: {planetCount}
                              </Typography>
                            ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Most Common House Positions
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>House</TableCell>
                    <TableCell align="right">Total Planets</TableCell>
                    <TableCell>Planet Distribution</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {analysis.houseAnalysis.map(({ house, count, planetDistribution }) => (
                    <TableRow key={house}>
                      <TableCell>House {house}</TableCell>
                      <TableCell align="right">{count}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                          {planetDistribution && Object.entries(planetDistribution)
                            .filter(([planet, count]) => count > 0)
                            .sort(([,a], [,b]) => b - a) // Sort by count in descending order
                            .map(([planet, planetCount]) => (
                              <Typography key={planet} variant="body2">
                                {getPlanetName(planet)}: {planetCount}
                              </Typography>
                            ))}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Conjunction Analysis */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Conjunction Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Shows how many celebrities have each planet alone in a house and how many have it in conjunction with other planets
            </Typography>
            {Object.entries(analysis.conjunctionAnalysis).map(([planet, data]) => (
              <Accordion key={planet}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {getPlanetName(planet)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" gutterBottom>
                        Alone in House
                      </Typography>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Count</TableCell>
                              <TableCell align="right">Percentage</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>{data.alone}</TableCell>
                              <TableCell align="right">
                                {((data.alone / analysis.totalCelebrities) * 100).toFixed(1)}%
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" gutterBottom>
                        Conjunctions with Other Planets
                      </Typography>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Planet</TableCell>
                              <TableCell align="right">Count</TableCell>
                              <TableCell align="right">Percentage</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.conjunctions.map(({ with: otherPlanet, count }) => (
                              <TableRow key={otherPlanet}>
                                <TableCell>{getPlanetName(otherPlanet)}</TableCell>
                                <TableCell align="right">{count}</TableCell>
                                <TableCell align="right">
                                  {((count / analysis.totalCelebrities) * 100).toFixed(1)}%
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Grid>

        {/* Planet-specific Analysis */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Planet-specific Analysis
            </Typography>
            {Object.entries(analysis.planetAnalysis).map(([planet, data]) => (
              <Accordion key={planet}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {getPlanetName(planet)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" gutterBottom>
                        Most Common Signs
                      </Typography>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Sign</TableCell>
                              <TableCell align="right">Count</TableCell>
                              <TableCell align="right">Percentage</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.signs.map(({ sign, count }) => (
                              <TableRow key={sign}>
                                <TableCell>{sign}</TableCell>
                                <TableCell align="right">{count}</TableCell>
                                <TableCell align="right">
                                  {((count / analysis.totalCelebrities) * 100).toFixed(1)}%
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" gutterBottom>
                        Most Common Houses
                      </Typography>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>House</TableCell>
                              <TableCell align="right">Count</TableCell>
                              <TableCell align="right">Percentage</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.houses.map(({ house, count }) => (
                              <TableRow key={house}>
                                <TableCell>House {house}</TableCell>
                                <TableCell align="right">{count}</TableCell>
                                <TableCell align="right">
                                  {((count / analysis.totalCelebrities) * 100).toFixed(1)}%
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Grid>

        {/* House Lord Analysis */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              House Lord Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Shows the most common positions for each house lord (e.g., where the 2nd house lord is placed)
            </Typography>
            {Object.entries(analysis.houseWiseLordAnalysis).map(([house, data]) => (
              <Accordion key={house}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {house}th House Lord ({getPlanetName(data.lord)})
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Position</TableCell>
                          <TableCell align="right">Count</TableCell>
                          <TableCell align="right">Percentage</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.positions.map(({ position, count }) => (
                          <TableRow key={position}>
                            <TableCell>House {position}</TableCell>
                            <TableCell align="right">{count}</TableCell>
                            <TableCell align="right">
                              {((count / analysis.totalCelebrities) * 100).toFixed(1)}%
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Analysis; 