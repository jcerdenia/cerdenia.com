import { Accordion, Card } from "react-bootstrap";
import WorkListItem from "./WorkListItem";
import AccordionToggle from "./AccordionToggle";
import categories from "../data/work-categories";
import { Work } from "../data/interfaces";

interface WorksListProps {
  works: Work[];
  activeKey?: string;
  activeGroupKey?: string;
}

const WorksList = ({
  works,
  activeKey,
  activeGroupKey,
}: WorksListProps): JSX.Element => {
  return (
    <>
      <h5>Selected Works</h5>
      <p className="small">
        List of compositions with program notes, detailed instrumentations,
        scores, and recordings
      </p>
      <Accordion defaultActiveKey={activeGroupKey}>
        {Object.keys(categories).map((key: string) => {
          return (
            <Card key={key} className="my-4">
              <AccordionToggle eventKey={key}>
                {categories[key].display}
              </AccordionToggle>
              <Accordion.Collapse eventKey={key}>
                <Card.Body>
                  {works
                    .filter((work: Work) => work.category === key)
                    .map((work: Work, idx: number) => {
                      return (
                        <WorkListItem
                          key={work.slug}
                          className={idx > 0 ? "mt-3" : undefined}
                          active={work.slug === activeKey}
                          work={work}
                        />
                      );
                    })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </>
  );
};

export default WorksList;
