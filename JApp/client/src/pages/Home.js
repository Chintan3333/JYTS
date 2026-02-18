import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
  useTheme,
  alpha,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import AnalyticsIcon from '@mui/icons-material/Analytics';

function Home() {
  const theme = useTheme();

  const features = [
    {
      title: 'Add New Celebrity',
      description: 'Add detailed kundli information for new celebrities to the database',
      icon: <AddIcon sx={{ fontSize: 40 }} />,
      path: '/celebrities/new',
      variant: 'contained',
    },
    {
      title: 'Generate Celebrity Chart',
      description: 'Calculate ascendant and planet positions from birth date, time and location (lat/lon)',
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      path: '/celebrities/generate',
      variant: 'contained',
    },
    {
      title: 'View All Celebrities',
      description: 'Browse and search through the complete celebrity kundli database',
      icon: <ListIcon sx={{ fontSize: 40 }} />,
      path: '/celebrities',
      variant: 'outlined',
    },
    {
      title: 'Advanced Search',
      description: 'Use advanced filters to find specific planetary positions and placements',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      path: '/advanced-search',
      variant: 'outlined',
    },
    {
      title: 'Analysis',
      description: 'Analyze patterns and trends in celebrity kundli data',
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      path: '/analysis',
      variant: 'outlined',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 4, md: 8 } }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: { xs: 3, md: 6 },
          background: theme.palette.mode === 'light'
            ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`
            : `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.2)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              background: theme.palette.mode === 'light'
                ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
                : `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 2,
            }}
          >
            Celebrity Kundli Database
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Store and manage Vedic kundli data for celebrities, including planetary positions,
            zodiac sign placements, house positions, and ascendant information.
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.2s ease-in-out',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: alpha(
                      feature.variant === 'contained' 
                        ? theme.palette.primary.main 
                        : theme.palette.primary.light,
                      0.1
                    ),
                    color: feature.variant === 'contained' 
                      ? theme.palette.primary.main 
                      : theme.palette.primary.light,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" component="h2" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ mb: 2, flexGrow: 1 }}
                >
                  {feature.description}
                </Typography>
                <Button
                  variant={feature.variant}
                  color="primary"
                  component={RouterLink}
                  to={feature.path}
                  fullWidth
                  sx={{ mt: 'auto' }}
                >
                  {feature.title}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Home; 