import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Modal from '../UIelements/Modal';

import './SpareItem.css';

const Spareitem = (props) => {
    const [showModal,setShowModal] = useState(false);

const openModalHandler = () => setShowModal(true);

const cancelModalHandler = () =>
{ setShowModal(false);
    console.log(props.fonction) }

    return (
        <React.Fragment>
            <Modal show={showModal} onCancel={cancelModalHandler} header={props.fonction} footer={<button onClick={cancelModalHandler}>Close</button>}>
                <h1>here is to change quantity</h1>
            </Modal>
            <tr className="spare-item">
                <td>{props.quantity}
                    <button className="itemlist-btn" onClick={openModalHandler}>Modifier</button></td>
                <td><Link to={{pathname:`/spare/${props.id}`,query:{props}}}>{props.name}</Link></td>
                <td>{props.type}</td>
                <td>{props.fonction}</td>
                <td>{props.consommation}</td>
                <td>{props.caracteristique}</td>
                <td>{props.unite}</td>
                <td>{props.interface}</td>
            </tr>
        </React.Fragment>
            );
};

export default Spareitem;
