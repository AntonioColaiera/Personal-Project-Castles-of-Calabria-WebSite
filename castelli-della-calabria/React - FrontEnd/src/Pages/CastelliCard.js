import React, { useState, useEffect } from 'react';
import { getCastles } from './API'; 
import PropTypes from "prop-types"
import '../App.css'




function CastelliCard(props){

    const {nome, posizione, info, condizioni, difficoltàPercorso, image_url }  = props; 

    return(
       
       <div className="castelli-card">
       <h2 >{nome}</h2>
       <img src={require(`../Pages/${image_url}`)} alt={nome} className="castelli-image" />
       <h3>{posizione}</h3>
       <h3>{info}</h3>
       <h3>{condizioni}</h3>
       <h3>{difficoltàPercorso}</h3>
      
       
       
       </div>
    )
}

CastelliCard.propTypes = {

nome: PropTypes.string.isRequired
}





function App() {
    const [castles, setCastles] = useState([]);
  
    useEffect(() => {
      // Recupera i dati dal database al caricamento dell'app
      getCastles()
        .then(response => {
          setCastles(response.data);
        })
        .catch(error => {
          console.error('Errore nel recupero dei dati dei castelli:', error);
        });
    }, []);
  
    return (
      <div className="app">
       
        <div >
          {castles.map(castle => (
            <CastelliCard
              key={castle.id}
              nome={castle.nome}
              image_url={castle.image_url}
              posizione={castle.posizione}
              info={castle.info}
              condizioni={castle.condizioni}
              difficoltàPercorso={castle.difficoltàPercorso}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default App;
