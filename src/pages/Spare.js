import React from 'react';
import SpareList from '../components/SpareList';

const Spare = () => {
    // this component is called stateful component because it adds logics to tha app, not only presentational HTML
    const DUMMY_SPARE=[
        {id:1,name:"HC-SR04",fonction:"Ultrason",type:"Capteur",consommation:"2mA",caracteristique:"2-500",unite:"cm",interface:"I2C",quantity:"3"},
        {id:2,name:"HLK-PM03",fonction:"Alimentation",type:"Transformateur AC/DC",consommation:"<0.1W",caracteristique:"5-1",unite:"V & A",interface:"",quantity:"1"},
        {id:3,name:"DS-18B20",fonction:"Température",type:"Capteur",consommation:"",caracteristique:"-10 +85",unite:"°C",interface:"I2C",quantity:"5"},
    ];

  return (
      <SpareList items={DUMMY_SPARE} />
  )
}

export default Spare;
