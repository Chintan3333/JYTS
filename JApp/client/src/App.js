import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CelebrityList from './pages/CelebrityList';
import CelebrityForm from './pages/CelebrityForm';
import GenerateCelebrityChart from './pages/GenerateCelebrityChart';
import CelebrityDetail from './pages/CelebrityDetail';
import Analysis from './pages/Analysis';
import AdvancedSearch from './pages/AdvancedSearch';
import PlanetInfo from './pages/PlanetInfo';

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar onToggleTheme={toggleTheme} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celebrities" element={<CelebrityList />} />
          <Route path="/celebrities/new" element={<CelebrityForm />} />
          <Route path="/celebrities/generate" element={<GenerateCelebrityChart />} />
          <Route path="/celebrities/:id" element={<CelebrityDetail />} />
          <Route path="/celebrities/:id/edit" element={<CelebrityForm />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/advanced-search" element={<AdvancedSearch />} />
          <Route path="/planet-info" element={<PlanetInfo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 