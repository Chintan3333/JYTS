import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  CircularProgress,
  Box,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function CelebrityList() {
  const [celebrities, setCelebrities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchCelebrities();
  }, []);

  const fetchCelebrities = async () => {
    try {
      const response = await axios.get('https://jyts-app-backend.onrender.com/api/celebrities');
      setCelebrities(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch celebrities');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this celebrity?')) {
      try {
        await axios.delete(`https://jyts-app-backend.onrender.com/api/celebrities/${id}`);
        fetchCelebrities();
      } catch (err) {
        setError('Failed to delete celebrity');
      }
    }
  };

  // Get unique categories from celebrities
  const categories = ['all', ...new Set(celebrities.map(c => c.category || 'Uncategorized'))];

  // Filter celebrities based on selected category
  const filteredCelebrities = selectedCategory === 'all' 
    ? celebrities 
    : celebrities.filter(celebrity => celebrity.category === selectedCategory);

  // Group filtered celebrities by category
  const groupedCelebrities = filteredCelebrities.reduce((acc, celebrity) => {
    const category = celebrity.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(celebrity);
    return acc;
  }, {});

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" color="primary">
          Celebrity List
        </Typography>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      {Object.entries(groupedCelebrities).map(([category, categoryCelebrities]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2, mt: 3 }} color="secondary">
            {category}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={3}>
            {categoryCelebrities.map((celebrity) => (
              <Grid item xs={12} sm={6} md={4} key={celebrity._id}>
                <Card sx={{ 
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      {celebrity.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Birth Date: {new Date(celebrity.birthDate).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Birth Time: {celebrity.birthTime}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Birth Place: {celebrity.birthPlace}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ascendant: {celebrity.ascendant.sign} ({celebrity.ascendant.degree}°)
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/celebrities/${celebrity._id}`}
                      color="primary"
                    >
                      View Details
                    </Button>
                    <Button
                      size="small"
                      component={RouterLink}
                      to={`/celebrities/${celebrity._id}/edit`}
                      startIcon={<EditIcon />}
                      color="secondary"
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(celebrity._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default CelebrityList; 