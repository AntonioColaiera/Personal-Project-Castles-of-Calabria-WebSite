import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ListaCastelli from './Pages/ListaCastelli';
import Accesso from './Pages/Accesso';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material'; // Importa i componenti Material-UI
import MenuIcon from '@mui/icons-material/Menu'; // Importa l'icona del menu
import LogoCastle from './LogoCastle.png'
import MappaAntica from './Pages/Mappa antica.jpg'



const App = () => {
  // Stato per gestire l'apertura e la chiusura del menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Funzione per aprire il menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Funzione per chiudere il menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <BrowserRouter>
   <div >
      {/* AppBar con il menu */}
      <AppBar position="static">
        <Toolbar>
          {/* Icona del menu */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen} // Apri il menu al clic dell'icona
          >
            <MenuIcon />
          </IconButton>
          <Typography
  variant="h6"
  component="div"
  sx={{
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "30px", // Imposta la dimensione del testo a tua scelta
    color: "yellow", // Cambia il colore del testo
  }}
>
  Castelli della Calabria
</Typography>







          <img src={LogoCastle} alt="Logo" className="logo-image" />
        
          {/* Titolo della barra */}
      
        </Toolbar>
      </AppBar>
   
      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose} // Chiudi il menu al clic fuori da esso
      >
        {/* Voci del menu */}
        <MenuItem onClick={handleMenuClose} component={Link} to="/">Mappa</MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to="/lista">Lista dei Castelli</MenuItem>
        <MenuItem onClick={handleMenuClose} component={Link} to="/accesso">Entra anche tu!</MenuItem>
      </Menu>

      {/* Contenuto delle pagine */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lista" element={<ListaCastelli />} />
        <Route path="/accesso" element={<Accesso />} />
        
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
