import {useState} from "react"
import './App.css';
import Modal from "./Modal";

function App() {

const [showModal, setShowModal] = useState(0);

  return (
    <div className="App">
      <h1>Reusbale-Modal Component</h1>
     
      <button className="modal-button" onClick={() =>{
        setShowModal((prev) => !prev)}}
      >Show Modal</button>
  <Modal
  shouldShow = {showModal}
  onRequestClose = {()=>{
    setShowModal((prev) =>!prev)
  }}>
    <div>Opps..! You have lost the connection. Please try again.</div>
  </Modal>

     
    </div>
  );
}

export default App;
