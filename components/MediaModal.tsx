import { Modal } from "react-bootstrap"

export default function MediaModal({ show, onHide }): React.ReactElement {
  return (
    <Modal size="xl" centered show={show} onHide={onHide}>
      <Modal.Body>
        <iframe 
          width="100%" 
          height="525px"
          src="https://www.youtube.com/embed/xnmJFpS1x34"    
          allowFullScreen 
        />
      </Modal.Body>
    </Modal>
  )
}