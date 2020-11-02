import React from 'react';
import {Link} from 'react-router-dom';
import './SpareItem.css';

const Spareitem = (props) => {
    return (
        //<Link to='{/spare/${props.id}}' >
            <tr className="spare-item">
                {/* <Link to='{/spare/${props.id}}'> */}
                <td>{props.quantity}</td>
                <td>{props.name}</td>
                <td>{props.type}</td>
                <td>{props.fonction}</td>
                <td>{props.consommation}</td>
                <td>{props.caracteristique}</td>
                <td>{props.unite}</td>
                <td>{props.interface}</td>
                {/* </Link> */}
            </tr>
        //</Link>
            );
};

export default Spareitem;
