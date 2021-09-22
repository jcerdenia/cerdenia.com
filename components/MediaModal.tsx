import { Modal } from "react-bootstrap"

export default function MediaModal({ show, onHide }): React.ReactElement {
  return (
    <Modal fullscreen centered show={show} onHide={onHide}>
      <Modal.Header closeButton />
      <Modal.Body>
        <iframe 
          width="100%" 
          height="100%"
          src="https://www.youtube.com/embed/xnmJFpS1x34"    
          allowFullScreen 
        />
      </Modal.Body>
    </Modal>
  )
}