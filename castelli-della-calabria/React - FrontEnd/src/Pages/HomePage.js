import React from "react";
import{MapContainer, TileLayer, Marker, Popup, Icon} from "react-leaflet"
import '../App.css'
import "leaflet/dist/leaflet.css"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import L from "leaflet";
import castle from './castle.png'
import castleDiNicastro from './castelloDiNicastro.jpg'
import { Link } from "react-router-dom";




const center = [ 38.98182873212437, 16.3239411541142 ]; 


const customIcon = new L.Icon({
    iconUrl: castle, // Inserisci il percorso dell'icona
    iconSize: [32, 32], // Dimensioni dell'icona
    iconAnchor: [16, 32], // Punto di ancoraggio
  });

const markers = [
    {
      position: [38.98182873212437, 16.3239411541142],
      text: "Castello di Nicastro",
      info: "Normanno-svevo",
      condizioni: "In gran parte ruderi",
      link: "/lista"
    },
    
    {
      position: [39.0816895,17.1312037,18.81],
      text: "Castello di Crotone",
      info: "Aragonese",
      condizioni: "Ottime Condizioni",
      link: "/lista"
    },
    {
      position: [39.1468031,16.9118133,17],
      text: "Castello di Santa Severina",
      info: "Normanno",
      condizioni: "Ottime Condizioni",
      link: "/lista"
    },
    {
      position: [39.0916454, 16.1573281],
      text: "Castello di Cleto",
      info: "Normanno",
      condizioni: "Buone Condizioni",
      link: "/lista"
    }
  ];



const HomePage = () =>{


 return (
<div>

    <div > 
    
    <h1 className="centered-h1">Castelli sul territorio calabrese</h1>
    
    </div>

      {/* Spazio */}
      <Box mb={5} />


   <div  style={{ height: '300px', width: '50%', margin: 'auto' }} > 


    <MapContainer
   center={center}
   zoom= {10}
    style= {{ windth: '100vw', height: '100vh', borderRadius: '15px', border: "5px solid yellow" }}> 

    <TileLayer 
    url = "https://api.maptiler.com/maps/outdoor-v2/256/{z}/{x}/{y}.png?key=R2Ei5Q0oLaq44hUTwql7"
    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    />

{markers.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div>
                  <h3>{marker.text}</h3>
                  <p>{marker.info}</p>
                  <p>{marker.condizioni}</p>
                  <Link to={marker.link}>Vai al castello</Link>
                </div>
              </Popup>
            </Marker>
          ))}
</MapContainer>
    </div>



</div>


 ); 

}; 


export default HomePage; 