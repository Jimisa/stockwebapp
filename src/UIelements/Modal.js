import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';

import './Modal.css';

const ModalOverlay = props => {
const content = (<div className={`modal ${props.className}`}>
    <header className={`header__modal ${props.headerClass}`}>
        <h2>{props.header}</h2>
    </header>
    <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <div className={`modal__content ${props.contentClass}`}>
            {props.children}
        </div>
        <footer className={'footer__footer ${props.footerClass}'}>
            {props.footer}
        </footer>
    </form>
</div>
);
    return ReactDOM.createPortal(content,document.getElementById('modal-hook'));
}


const Modal = props => {
    const showClass = props.show? 'modal display-block' : 'modal display-none'
 return (
     <React.Fragment>
         {props.show && <Backdrop onClick={props.onCancel} />}
         <ModalOverlay className={showClass} {...props} />
     </React.Fragment>
 );
}

export default Modal;
