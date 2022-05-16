import { useContext } from "react";
import { AccordionContext, useAccordionButton, Card } from "react-bootstrap";
import { Icon } from "@iconify/react";

const AccordionToggle = ({ eventKey, children }: any) => {
  const { activeEventKey } = useContext(AccordionContext);
  const isActive = activeEventKey === eventKey;

  const toggleStyle = {
    backgroundColor: isActive ? "white" : "transparent",
    borderColor: isActive ? "#e2e2e2" : "#efefef",
  };

  return (
    <div
      className="accordion-toggle"
      style={toggleStyle}
      onClick={useAccordionButton(eventKey)}
    >
      <Card.Header className="d-flex justify-content-between align-items-center">
        {children}
        <Icon
          icon="bi:chevron-down"
          className="icon-transforming"
          style={{ transform: isActive ? "rotate(-180deg)" : "none" }}
        />
      </Card.Header>
    </div>
  );
};

export default AccordionToggle;
