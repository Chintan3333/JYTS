import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function Navbar({ onToggleTheme, mode }) {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Celebrity Kundli Database
          </Typography>
          <Button
            color="inherit"
            component={RouterLink}
            to="/celebrities"
          >
            Celebrities
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/analysis"
            startIcon={<AnalyticsIcon />}
          >
            Analysis
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/celebrities/new"
            startIcon={<AddIcon />}
          >
            Add Celebrity
          </Button>
          <IconButton
            color="inherit"
            onClick={onToggleTheme}
            sx={{ ml: 1 }}
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 