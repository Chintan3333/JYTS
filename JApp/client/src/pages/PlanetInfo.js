import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { alpha } from '@mui/material/styles';
import { planetInfo, houseInfo, zodiacSignInfo, planetInSignTraits, houseLordInHouseEffects, planetInHouseEffects, getZodiacSignColor, getZodiacSignAbbr } from '../data/astrologyData';

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

// Helper function to get text color based on background
const getTextColor = (backgroundColor) => {
  // Convert hex to RGB
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

// Helper function to get house color
const getHouseColor = (houseNumber) => {
  const colorMap = {
    1: '#FF6B6B', // Coral Red
    2: '#4ECDC4', // Turquoise
    3: '#45B7D1', // Sky Blue
    4: '#96CEB4', // Mint Green
    5: '#FFEAA7', // Light Yellow
    6: '#DDA15E', // Tan
    7: '#A8DADC', // Light Blue
    8: '#9B59B6', // Purple
    9: '#F39C12', // Orange
    10: '#E74C3C', // Red
    11: '#3498DB', // Blue
    12: '#2ECC71' // Green
  };
  return colorMap[houseNumber] || '#1976d2';
};


function PlanetInfo() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={0} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
          Planet Information
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Detailed information about each planet in Vedic astrology (Jyotiṣa)
        </Typography>

        <Box>
          {Object.entries(planetInfo).map(([planetKey, info]) => {
            const planetColor = getPlanetColor(planetKey);
            const textColor = getTextColor(planetColor);

            return (
              <Accordion key={planetKey} sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: alpha(planetColor, 0.1),
                    '&:hover': {
                      backgroundColor: alpha(planetColor, 0.15),
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        backgroundColor: planetColor,
                        color: textColor,
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                      }}
                    >
                      {getPlanetAbbr(planetKey)}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {info.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.description}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Planet in Sign Personality Traits */}
                  {planetInSignTraits[planetKey] && (
                    <Box sx={{ mb: 3, width: '100%' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: planetColor }}>
                        Personality Traits by Sign
                      </Typography>
                      <Grid container spacing={1}>
                        {Object.entries(planetInSignTraits[planetKey]).map(([sign, trait]) => (
                          <Grid item xs={12} sm={6} md={4} key={sign}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 1.5,
                                border: `1px solid ${alpha(planetColor, 0.2)}`,
                                borderRadius: 2,
                                height: '100%',
                              }}
                            >
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: planetColor }}>
                                {info.name.split(' ')[0]} in {sign}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {trait}
                              </Typography>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                  {/* Planet in House Effects */}
                  {planetInHouseEffects[planetKey] && (
                    <Box sx={{ mb: 3, width: '100%' }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: planetColor }}>
                        Planet in House Effects
                      </Typography>
                      <Grid container spacing={1}>
                        {Object.entries(planetInHouseEffects[planetKey]).map(([houseNum, text]) => (
                          <Grid item xs={12} sm={6} md={4} key={houseNum}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 1.5,
                                border: `1px solid ${alpha(planetColor, 0.2)}`,
                                borderRadius: 2,
                                height: '100%',
                              }}
                            >
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: planetColor }}>
                                {info.name.split(' ')[0]} in House {houseNum}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {text}
                              </Typography>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}
                  <Grid container spacing={3}>
                    {/* Main Subjects */}
                    <Grid item xs={12} md={8}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: planetColor }}>
                        Main Subjects
                      </Typography>
                      <Grid container spacing={2}>
                        {info.mainSubjects.map((subject, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 2,
                                border: `1px solid ${alpha(planetColor, 0.2)}`,
                                borderRadius: 2,
                                height: '100%',
                              }}
                            >
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: planetColor }}>
                                {subject.title}
                              </Typography>
                              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                                {subject.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Typography variant="body2" color="text.secondary">
                                      {item}
                                    </Typography>
                                  </li>
                                ))}
                              </Box>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>

                    {/* Characteristics and Dignities */}
                    <Grid item xs={12} md={4}>
                      {/* Natural Characteristics */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          mb: 2,
                          border: `1px solid ${alpha(planetColor, 0.2)}`,
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: planetColor }}>
                          Natural Characteristics
                        </Typography>
                        {Object.entries(info.characteristics).map(([key, value]) => (
                          <Box key={key} sx={{ mb: 1.5 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {value}
                            </Typography>
                          </Box>
                        ))}
                      </Paper>

                      {/* Zodiac Dignities */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          mb: 2,
                          border: `1px solid ${alpha(planetColor, 0.2)}`,
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: planetColor }}>
                          Zodiac Dignities
                        </Typography>
                        <Box sx={{ mb: 1.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            Own Sign{info.dignities.own.length > 1 ? 's' : ''}:
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.dignities.own.join(', ')}
                          </Typography>
                        </Box>
                        <Box sx={{ mb: 1.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            Exaltation:
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.dignities.exaltation}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ fontWeight: 600 }}>
                            Debilitation:
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.dignities.debilitation}
                          </Typography>
                        </Box>
                      </Paper>

                      {/* Positive Expression */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          mb: 2,
                          border: `1px solid ${alpha('#4caf50', 0.2)}`,
                          borderRadius: 2,
                          backgroundColor: alpha('#4caf50', 0.05),
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#4caf50' }}>
                          🌟 Positive Expression
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 2 }}>
                          {info.positive.map((item, idx) => (
                            <li key={idx}>
                              <Typography variant="body2" color="text.secondary">
                                {item}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      </Paper>

                      {/* Weak or Afflicted */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          border: `1px solid ${alpha('#f44336', 0.2)}`,
                          borderRadius: 2,
                          backgroundColor: alpha('#f44336', 0.05),
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#f44336' }}>
                          ⚠️ When Weak or Afflicted
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 2 }}>
                          {info.negative.map((item, idx) => (
                            <li key={idx}>
                              <Typography variant="body2" color="text.secondary">
                                {item}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* House Lord Effects Section */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
          House Lord Effects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Effects of each house lord placed in each house (classical paragraph-style reference)
        </Typography>

        <Box>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((lordHouseNum) => (
            <Accordion key={lordHouseNum} sx={{ mb: 2 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: alpha(getHouseColor(lordHouseNum), 0.1),
                  '&:hover': { backgroundColor: alpha(getHouseColor(lordHouseNum), 0.15) },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                  <Box
                    sx={{
                      backgroundColor: getHouseColor(lordHouseNum),
                      color: getTextColor(getHouseColor(lordHouseNum)),
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                    }}
                  >
                    {lordHouseNum}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {lordHouseNum} House Lord in Different Houses
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Click to view outcomes for placement in House 1–12
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {Array.from({ length: 12 }, (_, j) => j + 1).map((placementHouseNum) => {
                    const text = houseLordInHouseEffects?.[lordHouseNum]?.[placementHouseNum];
                    if (!text) return null;
                    return (
                      <Grid item xs={12} md={6} key={placementHouseNum}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            border: `1px solid ${alpha(getHouseColor(lordHouseNum), 0.2)}`,
                            borderRadius: 2,
                            height: '100%',
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 700, mb: 1, color: getHouseColor(lordHouseNum) }}
                          >
                            {lordHouseNum} Lord in House {placementHouseNum}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {text}
                          </Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* House Information Section */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 1, mt: 4 }}>
          House Information
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Detailed information about each of the 12 houses in Vedic astrology (Jyotiṣa)
        </Typography>

        <Box>
          {Object.entries(houseInfo).map(([houseNumber, info]) => {
            const houseNum = parseInt(houseNumber);
            const houseColor = getHouseColor(houseNum);
            const textColor = getTextColor(houseColor);

            return (
              <Accordion key={houseNumber} sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: alpha(houseColor, 0.1),
                    '&:hover': {
                      backgroundColor: alpha(houseColor, 0.15),
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        backgroundColor: houseColor,
                        color: textColor,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                      }}
                    >
                      {houseNum}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {info.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.description}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    {/* Main Subjects */}
                    <Grid item xs={12} md={8}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: houseColor }}>
                        Main Subjects
                      </Typography>
                      <Grid container spacing={2}>
                        {info.mainSubjects.map((subject, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 2,
                                border: `1px solid ${alpha(houseColor, 0.2)}`,
                                borderRadius: 2,
                                height: '100%',
                              }}
                            >
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: houseColor }}>
                                {subject.title}
                              </Typography>
                              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                                {subject.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Typography variant="body2" color="text.secondary">
                                      {item}
                                    </Typography>
                                  </li>
                                ))}
                              </Box>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>

                    {/* Positive and Negative Expressions */}
                    <Grid item xs={12} md={4}>
                      {/* Positive Expression */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          mb: 2,
                          border: `1px solid ${alpha('#4caf50', 0.2)}`,
                          borderRadius: 2,
                          backgroundColor: alpha('#4caf50', 0.05),
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#4caf50' }}>
                          🌟 Positive Expression
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 2 }}>
                          {info.positive.map((item, idx) => (
                            <li key={idx}>
                              <Typography variant="body2" color="text.secondary">
                                {item}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      </Paper>

                      {/* When Afflicted */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          border: `1px solid ${alpha('#f44336', 0.2)}`,
                          borderRadius: 2,
                          backgroundColor: alpha('#f44336', 0.05),
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#f44336' }}>
                          ⚠️ When Afflicted
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 2 }}>
                          {info.negative.map((item, idx) => (
                            <li key={idx}>
                              <Typography variant="body2" color="text.secondary">
                                {item}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Zodiac Signs Information Section */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 1, mt: 4 }}>
          Zodiac Signs Information
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Detailed information about each of the 12 zodiac signs in Vedic astrology (Jyotiṣa)
        </Typography>

        <Box>
          {Object.entries(zodiacSignInfo).map(([signKey, info]) => {
            const signColor = getZodiacSignColor(signKey);
            const textColor = getTextColor(signColor);

            return (
              <Accordion key={signKey} sx={{ mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: alpha(signColor, 0.1),
                    '&:hover': {
                      backgroundColor: alpha(signColor, 0.15),
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box
                      sx={{
                        backgroundColor: signColor,
                        color: textColor,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                      }}
                    >
                      {getZodiacSignAbbr(signKey)}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {info.name} ({info.number}{info.number === 1 ? 'st' : info.number === 2 ? 'nd' : info.number === 3 ? 'rd' : 'th'} Sign)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.description}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    {/* Main Subjects */}
                    <Grid item xs={12} md={8}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: signColor }}>
                        Main Subjects
                      </Typography>
                      <Grid container spacing={2}>
                        {info.mainSubjects.map((subject, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Paper
                              elevation={0}
                              sx={{
                                p: 2,
                                border: `1px solid ${alpha(signColor, 0.2)}`,
                                borderRadius: 2,
                                height: '100%',
                              }}
                            >
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: signColor }}>
                                {subject.title}
                              </Typography>
                              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                                {subject.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Typography variant="body2" color="text.secondary">
                                      {item}
                                    </Typography>
                                  </li>
                                ))}
                              </Box>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>

                    {/* Characteristics and Relationships */}
                    <Grid item xs={12} md={4}>
                      {/* Natural Characteristics */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          mb: 2,
                          border: `1px solid ${alpha(signColor, 0.2)}`,
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: signColor }}>
                          Natural Characteristics
                        </Typography>
                        {Object.entries(info.characteristics).map(([key, value]) => (
                          <Box key={key} sx={{ mb: 1.5 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                              {key.replace(/([A-Z])/g, ' $1').trim()}:{' '}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component="span">
                              {value}
                            </Typography>
                          </Box>
                        ))}
                      </Paper>

                      {/* Relationships & Social Traits */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          mb: 2,
                          border: `1px solid ${alpha(signColor, 0.2)}`,
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: signColor }}>
                          ❤️ Relationships & Social Traits
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 2 }}>
                          {info.relationships.map((item, idx) => (
                            <li key={idx}>
                              <Typography variant="body2" color="text.secondary">
                                {item}
                              </Typography>
                            </li>
                          ))}
                        </Box>
                      </Paper>

                      {/* Summary */}
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          border: `1px solid ${alpha(signColor, 0.2)}`,
                          borderRadius: 2,
                          backgroundColor: alpha(signColor, 0.05),
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: signColor }}>
                          📌 Summary
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {info.summary}
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Paper>
    </Container>
  );
}

export default PlanetInfo;

