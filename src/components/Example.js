import { Modal ,Button} from "react-bootstrap";


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.price}</h4>
          <p>
          <h5 className="text-success">Description :</h5>
            {props.desc}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
export default MyVerticallyCenteredModal;