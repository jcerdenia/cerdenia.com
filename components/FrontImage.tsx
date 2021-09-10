import { Container } from "react-bootstrap"

export default function FrontImageContainer({ children }): React.ReactElement {
  return (
    <div className="front-image">
      {children}
    </div>
  )
}