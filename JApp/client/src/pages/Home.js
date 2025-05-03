import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';

function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Welcome to Celebrity Kundli Database
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Store and manage Vedic kundli data for celebrities, including planetary positions,
          zodiac sign placements, house positions, and ascendant information.
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/celebrities/new"
                startIcon={<AddIcon />}
                size="large"
                fullWidth
              >
                Add New Celebrity
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/celebrities"
                startIcon={<ListIcon />}
                size="large"
                fullWidth
              >
                View All Celebrities
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Home; 