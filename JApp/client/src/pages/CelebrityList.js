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
  TextField,
  InputAdornment,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function CelebrityList() {
  const [celebrities, setCelebrities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter celebrities based on selected category and search query
  const filteredCelebrities = celebrities.filter(celebrity => {
    const matchesCategory = selectedCategory === 'all' || celebrity.category === selectedCategory;
    const matchesSearch = celebrity.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            sx={{ minWidth: 200 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
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
      </Box>
      
      {Object.keys(groupedCelebrities).length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No celebrities found matching your search criteria
          </Typography>
        </Box>
      ) : (
        Object.entries(groupedCelebrities).map(([category, categoryCelebrities]) => (
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
                        component={RouterLink}
                        to={`/celebrities/${celebrity._id}/regenerate`}
                        startIcon={<AutoAwesomeIcon />}
                        color="info"
                      >
                        Re-generate
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
        ))
      )}
    </Container>
  );
}

export default CelebrityList; 