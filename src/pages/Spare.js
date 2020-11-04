import React from 'react';
import SpareList from '../components/SpareList';

const Spare = () => {
    // this component is called stateful component because it adds logics to tha app, not only presentational HTML
    const DUMMY_SPARE=[
        {
            id:1,
            name:"HC-SR04",
            fonction:"Ultrason",
            type:"Capteur",
            consommation:"2mA",
            caracteristique:"2-500",
            unite:"cm",
            interface:"I2C",
            quantity:"3",
            informations:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna. ",
            tension_max:"12.5"
        },
        {id:2,name:"HLK-PM03",fonction:"Alimentation",type:"Transformateur AC/DC",consommation:"<0.1W",caracteristique:"5-1",unite:"V & A",interface:"",quantity:"1"},
        {id:3,name:"DS-18B20",fonction:"Température",type:"Capteur",consommation:"",caracteristique:"-10 +85",unite:"°C",interface:"I2C",quantity:"5"},
    ];

  return (
      <SpareList items={DUMMY_SPARE} />
  )
}

export default Spare;
