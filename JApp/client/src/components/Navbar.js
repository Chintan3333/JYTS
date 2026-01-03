import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  alpha,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';

function Navbar({ onToggleTheme, mode }) {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    {
      title: 'Celebrities',
      path: '/celebrities',
      icon: <ListIcon />,
    },
    {
      title: 'Analysis',
      path: '/analysis',
      icon: <AnalyticsIcon />,
    },
    {
      title: 'Advanced Search',
      path: '/advanced-search',
      icon: <SearchIcon />,
    },
    {
      title: 'Planet Info',
      path: '/planet-info',
      icon: <InfoIcon />,
    },
    {
      title: 'Add Celebrity',
      path: '/celebrities/new',
      icon: <AddIcon />,
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              backgroundColor: isActive(item.path) 
                ? alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.1 : 0.2)
                : 'transparent',
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.05 : 0.1),
              },
            }}
          >
            <ListItemIcon sx={{ color: isActive(item.path) ? theme.palette.primary.main : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.title} 
              primaryTypographyProps={{ 
                fontWeight: isActive(item.path) ? 600 : 400,
                color: isActive(item.path) ? theme.palette.primary.main : 'inherit',
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </ListItemIcon>
          <ListItemText 
            primary={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`}
            onClick={onToggleTheme}
            sx={{ cursor: 'pointer' }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.9)' 
          : 'rgba(15, 23, 42, 0.9)',
        color: theme.palette.mode === 'light' 
          ? theme.palette.text.primary 
          : theme.palette.common.white,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            Celebrity Kundli
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                color: theme.palette.mode === 'light' 
                  ? theme.palette.text.primary 
                  : theme.palette.common.white,
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    position: 'relative',
                    color: isActive(item.path) 
                      ? theme.palette.primary.main 
                      : theme.palette.mode === 'light'
                        ? theme.palette.text.primary
                        : theme.palette.common.white,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: isActive(item.path) ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '80%',
                      height: 2,
                      backgroundColor: theme.palette.primary.main,
                      transition: 'transform 0.2s ease-in-out',
                    },
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      '&::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    },
                    fontWeight: isActive(item.path) ? 600 : 400,
                  }}
                >
                  {item.title}
                </Button>
              ))}
              <IconButton
                onClick={onToggleTheme}
                sx={{ 
                  ml: 1,
                  color: theme.palette.mode === 'light' 
                    ? theme.palette.text.primary 
                    : theme.palette.common.white,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: theme.palette.background.paper,
            borderLeft: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            color: theme.palette.text.primary,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar; 