import {Fragment} from 'react'
import ReactDOM from'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
  return <div className={classes.backdrop} />
};

const ModalOverlay = props => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
}

// Create target to portal, which was defined in index.html
const portalElement = document.getElemenitById('overlays'); 

const Modal = props => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </Fragment>
};

export default Modal;