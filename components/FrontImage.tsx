import { Container } from "react-bootstrap"

type FrontImageContainerProps = {
  children?: React.ReactElement
}

const FrontImageContainer = ({ children }: FrontImageContainerProps): React.ReactElement => {
  return (
    <div className="front-image">
      {children}
    </div>
  )
}

export default FrontImageContainer