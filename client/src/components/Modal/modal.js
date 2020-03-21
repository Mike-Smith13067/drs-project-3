

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Submit</button>
        </section>
      </div>
    );
  };

  export default Modal;