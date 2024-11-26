const Modal = ({shouldShow, onRequestClose, children}) =>{
return shouldShow ? (
    <div
    className="modal-overlay"
    onClick={onRequestClose} // Closes modal when clicking on overlay 
    >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()} // Prevents overlay click from closing modal
    >
      <button
        className="close-button"
        onClick={onRequestClose} // Close modal when clicking the button
      >
        X
      </button>
      {children}
    </div>
  </div>
): null;
} 

export default Modal;