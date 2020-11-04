import React from 'react';
import { useLocation } from 'react-router-dom';

import './SpareDetails.css';

// const DUMMY_SPARE_DETAILS=[
//     {id:1,name:"HC-SR04",fonction:"Ultrason",type:"Capteur",consommation:"2mA",caracteristique:"2-500",unite:"cm",interface:"I2C",quantity:"3"},
//     {id:2,name:"HLK-PM03",fonction:"Alimentation",type:"Transformateur AC/DC",consommation:"<0.1W",caracteristique:"5-1",unite:"V & A",interface:"",quantity:"1"},
//     {id:3,name:"DS-18B20",fonction:"Température",type:"Capteur",consommation:"",caracteristique:"-10 +85",unite:"°C",interface:"I2C",quantity:"5"},
// ];

const SpareDetails = (props) => {
// useLocation allows to pass props/state data from a Link component
    const detailSpare = useLocation().query.props; //DUMMY_SPARE_DETAILS.filter(spare => spare.id == sid);
    console.log(detailSpare)
  return (
      <table className="spare-details">
          <tr>
              <th>Nom</th>
              <td>{detailSpare.name}</td>
          </tr>
          <tr>
              <th>Type</th>
              <td>{detailSpare.type}</td>
          </tr>
          <tr>
              <th>Fonction</th>
              <td>{detailSpare.fonction}</td>
          </tr>
          <tr>
              <th>Caractéristique(s)</th>
              <td>{detailSpare.caracteristique}</td>
          </tr>
          <tr>
              <th>Unité(s)</th>
              <td>{detailSpare.unite}</td>
          </tr>
          <tr>
              <th>Tension min</th>
              <td>{detailSpare.tension_min}</td>
          </tr>
          <tr>
              <th>Tension max</th>
              <td>{detailSpare.tension_max}</td>
          </tr>
          <tr>
              <th>Consommation</th>
              <td>{detailSpare.consommation}</td>
          </tr>
          <tr>
              <th>Interface</th>
              <td>{detailSpare.interface}</td>
          </tr>
          <tr>
              <th>Informations</th>
              <td>{detailSpare.informations}</td>
          </tr>
          <tr>
              <th>Datasheet</th>
              <td>{detailSpare.datasheet}</td>
          </tr>

      </table>
  )
}

export default SpareDetails;
