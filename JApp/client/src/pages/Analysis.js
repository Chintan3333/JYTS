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
      const response = await axios.get('https://jyts-app-backend.onrender.com/api/celebrities');
      const uniqueCategories = [...new Set(response.data.map(celebrity => celebrity.category))];
      setCategories(uniqueCategories);
    } catch (err) {
      console.error('Failed to fetch categories:', err);
    }
  };

  const fetchAnalysis = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://jyts-app-backend.onrender.com/api/celebrities/analysis/planetary-positions?category=${selectedCategory}`);
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
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" gutterBottom>
                  Most Common Zodiac Signs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
                                .sort(([, a], [, b]) => b - a) // Sort by count in descending order
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
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" gutterBottom>
                  Most Common House Positions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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
                                .sort(([, a], [, b]) => b - a) // Sort by count in descending order
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
              </AccordionDetails>
            </Accordion>
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


        {/* House Lord Conjunction Analysis */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              House Lord Conjunction Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Shows how many celebrities have each house lord alone in a house and how many have it in conjunction with other house lords
            </Typography>
            {analysis.conjunctionLordsAnalysis.map((data, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {index} House
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
                            {data.conjunctions.map((lord, index2) => (
                              <TableRow key={index2}>
                                <TableCell>{lord.house} House</TableCell>
                                <TableCell align="right">{lord.count}</TableCell>
                                <TableCell align="right">
                                  {((lord.count / analysis.totalCelebrities) * 100).toFixed(1)}%
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

        {/* Zodiac Sign Exchange Analysis */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Zodiac Sign Exchange Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Shows how many celebrities have planets exchanging signs (e.g., Sun in Cancer and Moon in Leo)
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Total Exchanges Found: {analysis.zodiacExchangeAnalysis.totalExchanges}
              </Typography>
            </Box>

            {/* Overall Exchange Analysis */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                  Most Common Zodiac sign exchanges
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer sx={{ mb: 4 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Planets</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Percentage</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {analysis.zodiacExchangeAnalysis.exchanges.map(({ planets, count, percentage }) => (
                        <TableRow key={planets.join('-')}>
                          <TableCell>
                            {planets.map(planet => getPlanetName(planet)).join(' ↔ ')}
                          </TableCell>
                          <TableCell align="right">{count}</TableCell>
                          <TableCell align="right">{percentage}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>

            {/* Planet-specific Exchange Analysis */}
            <Typography variant="subtitle2" gutterBottom>
              Planet-specific Exchanges
            </Typography>
            {Object.entries(analysis.zodiacExchangeAnalysis.planetExchanges).map(([planet, data]) => (
              <Accordion key={planet}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {getPlanetName(planet)} (Total Exchanges: {data.total})
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Exchanges With</TableCell>
                          <TableCell align="right">Count</TableCell>
                          <TableCell align="right">Percentage</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.exchanges.map(({ with: otherPlanet, count, percentage }) => (
                          <TableRow key={otherPlanet}>
                            <TableCell>{getPlanetName(otherPlanet)}</TableCell>
                            <TableCell align="right">{count}</TableCell>
                            <TableCell align="right">{percentage}%</TableCell>
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

        {/* Planet Aspect Analysis */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Planet Aspect Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Shows how many celebrities have planets aspecting each other through different houses. All planets have 7th aspect, while some have additional aspects:
              <ul>
                <li>Mars: 4th and 8th aspects</li>
                <li>Jupiter: 5th and 9th aspects</li>
                <li>Saturn: 3rd and 10th aspects</li>
                <li>Rahu & Ketu: 5th and 9th aspects</li>
              </ul>
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Total Aspects Found: {analysis.aspectAnalysis.totalAspects}
              </Typography>
            </Box>

            {/* Aspect Types Analysis */}
            <Typography variant="subtitle2" gutterBottom>
              Analysis by Aspect Type
            </Typography>
            {Object.entries(analysis.aspectAnalysis.aspectTypes).map(([type, data]) => (
              <Accordion key={type}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {type} House Aspects (Total: {data.total})
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Planets</TableCell>
                          <TableCell align="right">Count</TableCell>
                          <TableCell align="right">Percentage</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.aspects.map(({ planets, count, percentage }) => (
                          <TableRow key={planets.join('-')}>
                            <TableCell>
                              {planets.map(planet => getPlanetName(planet)).join(' → ')}
                            </TableCell>
                            <TableCell align="right">{count}</TableCell>
                            <TableCell align="right">{percentage}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}

            {/* Overall Aspect Analysis */}

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
                  Most Common Aspects (All Types)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer sx={{ mb: 4 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Planets</TableCell>
                        <TableCell>Aspect Type</TableCell>
                        <TableCell align="right">Count</TableCell>
                        <TableCell align="right">Percentage</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {analysis.aspectAnalysis.aspects.map(({ planets, aspectType, count, percentage }) => (
                        <TableRow key={planets.join('-') + aspectType}>
                          <TableCell>
                            {planets.map(planet => getPlanetName(planet)).join(' → ')}
                          </TableCell>
                          <TableCell>{aspectType}</TableCell>
                          <TableCell align="right">{count}</TableCell>
                          <TableCell align="right">{percentage}%</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>

            {/* Planet-specific Aspect Analysis */}
            <Typography variant="subtitle2" gutterBottom>
              Planet-specific Aspects
            </Typography>
            {Object.entries(analysis.aspectAnalysis.planetAspects).map(([planet, data]) => (
              <Accordion key={planet}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {getPlanetName(planet)} (Total Aspects: {data.total})
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    {/* Aspect Types Summary */}
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Aspect Types
                      </Typography>
                      <TableContainer sx={{ mb: 2 }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Aspect Type</TableCell>
                              <TableCell align="right">Count</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {Object.entries(data.aspectTypes).map(([type, count]) => (
                              <TableRow key={type}>
                                <TableCell>{type}</TableCell>
                                <TableCell align="right">{count}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>

                    {/* Detailed Aspects */}
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom>
                        Detailed Aspects
                      </Typography>
                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Aspects</TableCell>
                              <TableCell align="right">Count</TableCell>
                              <TableCell align="right">Percentage</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.aspects.map(({ with: otherPlanet, count, percentage }) => {
                              const connectionTypes = [];

                              // Check for conjunction
                              const hasConjunction = analysis.conjunctionAnalysis[planet]?.conjunctions.some(
                                c => c.with === otherPlanet && c.count > 0
                              );
                              if (hasConjunction) connectionTypes.push('Conjunction');

                              // Check for 7th aspect
                              const hasSeventhAspect = analysis.aspectAnalysis.planetAspects[planet]?.aspects.some(
                                a => a.with === otherPlanet && a.count > 0 && a.aspectType === '7th House Aspects'
                              );
                              if (hasSeventhAspect) {
                                const seventhAspectCount = analysis.aspectAnalysis.planetAspects[planet]?.aspects.find(
                                  a => a.with === otherPlanet && a.aspectType === '7th House Aspects'
                                )?.count || 0;
                                connectionTypes.push(`7th Aspect (${Math.ceil(seventhAspectCount / 2)} celebs)`);
                              }

                              // Check for zodiac exchange
                              const hasExchange = analysis.zodiacExchangeAnalysis.planetExchanges[planet]?.exchanges.some(
                                e => e.with === otherPlanet && e.count > 0
                              );
                              if (hasExchange) connectionTypes.push('Zodiac Exchange');

                              return (
                                <TableRow key={otherPlanet}>
                                  <TableCell>
                                    {getPlanetName(planet)} → {getPlanetName(otherPlanet)}
                                  </TableCell>
                                  <TableCell align="right">{count}</TableCell>
                                  <TableCell align="right">{percentage}%</TableCell>
                                  <TableCell>{connectionTypes.join(', ')}</TableCell>
                                </TableRow>
                              );
                            })}
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

        {/* Planet-wise Total Analysis */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Planet-wise Total Analysis
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Shows the total number of celebrities who have any connection (conjunction, 7th aspect, or zodiac sign exchange) between planets.
            </Typography>

            {Object.entries(analysis.planetAnalysis).map(([planet, _]) => {
              // Get conjunction data for this planet
              const conjunctionData = analysis.conjunctionAnalysis[planet] || { conjunctions: [] };

              // Get 7th aspect data for this planet
              const aspectData = analysis.aspectAnalysis.planetAspects[planet] || { aspects: [] };


              // Get zodiac exchange data for this planet
              const exchangeData = analysis.zodiacExchangeAnalysis.planetExchanges[planet] || { exchanges: [] };

              // Create a map to store total connections for each planet
              const totalConnections = new Map();

              // Process conjunctions
              conjunctionData.conjunctions.forEach(({ with: otherPlanet, count }) => {
                totalConnections.set(otherPlanet, (totalConnections.get(otherPlanet) || 0) + count);
              });

              // Process aspects
              aspectData.aspects.forEach(({ with: otherPlanet, count }) => {
                // For 7th aspects, take half the count since both planets aspect each other
                totalConnections.set(otherPlanet, (totalConnections.get(otherPlanet) || 0) + count);
              });

              // Process zodiac exchanges
              exchangeData.exchanges.forEach(({ with: otherPlanet, count }) => {
                totalConnections.set(otherPlanet, (totalConnections.get(otherPlanet) || 0) + count);
              });

              // Convert to array and sort by count
              const sortedConnections = Array.from(totalConnections.entries())
                .map(([otherPlanet, count]) => ({
                  planet: otherPlanet,
                  count,
                  percentage: ((count / analysis.totalCelebrities) * 100).toFixed(1)
                }))
                .sort((a, b) => b.count - a.count);

              return (
                <Accordion key={planet}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle1">
                      {getPlanetName(planet)} - Total Connections
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Connected With</TableCell>
                            <TableCell align="right">Total Connections</TableCell>
                            <TableCell align="right">Percentage</TableCell>
                            <TableCell>Connection Types</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {sortedConnections.map(({ planet: otherPlanet, count, percentage }) => {
                            const connectionTypes = [];

                            // Check for conjunction
                            const hasConjunction = conjunctionData.conjunctions.some(
                              c => c.with === otherPlanet && c.count > 0
                            );
                            if (hasConjunction) connectionTypes.push('Conjunction');

                            // Check for 7th aspect
                            const hasSeventhAspect = aspectData.aspects.some(
                              a => a.with === otherPlanet && a.count > 0
                            );
                            if (hasSeventhAspect) {
                              connectionTypes.push(`7th Aspect`);
                            }

                            // Check for zodiac exchange
                            const hasExchange = exchangeData.exchanges.some(
                              e => e.with === otherPlanet && e.count > 0
                            );
                            if (hasExchange) connectionTypes.push('Zodiac Exchange');

                            return (
                              <TableRow key={otherPlanet}>
                                <TableCell>{getPlanetName(otherPlanet)}</TableCell>
                                <TableCell align="right">{count}</TableCell>
                                <TableCell align="right">{percentage}%</TableCell>
                                <TableCell>{connectionTypes.join(', ')}</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Analysis; 