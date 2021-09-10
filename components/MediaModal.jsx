import { Modal } from "react-bootstrap"

/** 
 * Have to use JSX here instead of TSX to avoid type checking because Modal's
 * size prop refuses to accept "fullscreen" even though it actually works.
 * Setting the fullscreen prop to true doesn't work.
 */

export default function MediaModal({ show, onHide }) {
  return (
    <Modal size="fullscreen" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
        <em>Feuertrunken</em> (Fire-Drunk) – Detroit Symphony Orchestra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/xnmJFpS1x34" 
         
        allowfullscreen="true"/>
      </Modal.Body>
    </Modal>
  )
}