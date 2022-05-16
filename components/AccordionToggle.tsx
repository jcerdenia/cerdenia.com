import { useContext, useEffect } from "react";
import { AccordionContext, useAccordionButton, Card } from "react-bootstrap";
import { useAppState } from "../context/AppStateProvider";
import { Icon } from "@iconify/react";

interface AccordionToggleProps {
  eventKey: string;
  children: any;
}

const AccordionToggle = ({ eventKey, children }: AccordionToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);
  const { setActiveWorkCategory } = useAppState();

  const active = activeEventKey === eventKey;

  const toggleStyle = {
    backgroundColor: active ? "#fbfbfb" : "#e2e2e2",
    outline: active ? "2px solid #2a6041" : "1px solid #d5d5d5",
  };

  useEffect(() => {
    setActiveWorkCategory(activeEventKey);
  }, [activeEventKey, setActiveWorkCategory]);

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
          style={{ transform: active ? "rotate(-180deg)" : "none" }}
        />
      </Card.Header>
    </div>
  );
};

export default AccordionToggle;
