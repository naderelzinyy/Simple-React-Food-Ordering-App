
import React,{Fragment} from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
};

const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portal = document.getElementById("overlays");

export const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart}/>,portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
        </Fragment>
    );
};

export default Modal;