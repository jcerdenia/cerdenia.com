import { Icon } from "@iconify/react";
import { useContext, useEffect } from "react";
import { AccordionContext, Card, useAccordionButton } from "react-bootstrap";

import useAppState from "../hooks/useAppState";
import styles from "../styles/AccordionToggle.module.css";

interface AccordionToggleProps {
  eventKey: string;
  children: any;
}

const AccordionToggle = ({ eventKey, children }: AccordionToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);
  const { setActiveWorkCategory } = useAppState();

  const active = activeEventKey === eventKey;

  useEffect(() => {
    setActiveWorkCategory(activeEventKey as string);
  }, [activeEventKey, setActiveWorkCategory]);

  return (
    <div
      className={`${styles.toggle} ${active ? styles.active : styles.inactive}`}
      onClick={useAccordionButton(eventKey)}
    >
      <Card.Header className="d-flex justify-content-between align-items-center">
        {children}
        <Icon
          icon="bi:chevron-down"
          className={`${styles.icon} ${active && styles.rotating}`}
        />
      </Card.Header>
    </div>
  );
};

export default AccordionToggle;
