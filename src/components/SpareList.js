import React from 'react';
import Spareitem from './Spareitem';
import '../index.css';
import './SpareList.css';
import './SpareItem.css';

const SpareList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No Spare part found</h2>
            </div>
        );
    }

    return (
        <table id="sparetable">
            <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Nom</th>
                    <th>Type</th>
                    <th>Fonction</th>
                    <th>Consommation</th>
                    <th>Caractéristique</th>
                    <th>Unité</th>
                    <th>Interface</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(spare => (
                    <Spareitem
                        key={spare.id}
                        id={spare.id}
                        name={spare.name}
                        fonction={spare.fonction}
                        type={spare.type}
                        quantity={spare.quantity}
                        consommation={spare.consommation}
                        caracteristique={spare.caracteristique}
                        unite={spare.unite}
                        interface={spare.interface}
                        tension_min={spare.tension_min}
                        tension_max={spare.tension_max}
                        informations={spare.informations}
                    />

                ))
                }
            </tbody>
        </table>
    );

};

export default SpareList;
