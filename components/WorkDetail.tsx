import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";
import HtmlWrapper from "./HtmlWrapper";
import LinkedIcon from "./LinkedIcon";
import { Work } from "../data/interfaces";

interface WorkDetailProps {
  work: Work;
  note: string;
}

const WorkDetail = ({ work, note }: WorkDetailProps): JSX.Element => {
  return (
    <>
      <h5 className="page-content-header">
        {work.title} {work.subtitle && `(${work.subtitle})`}
      </h5>
      <aside className="small text-muted">{work.description}</aside>
      <aside className="small text-muted mb-3">({work.year})</aside>
      <HtmlWrapper className="my-2">{note}</HtmlWrapper>
      <Button
        className="media-button px-5 py-2 m-1"
        variant="outline-secondary"
        href={work.scoreUrl}
        disabled={!work.scoreUrl}
      >
        <Icon icon="bi:file-pdf" className="me-1" /> Perusal Score
        {!work.scoreUrl ? " Unavailable" : null}
      </Button>
      <LinkedIcon
        className="mt-3 link-muted link-more-work"
        iconId="bi:arrow-return-left"
        href="/works"
      >
        More Works
      </LinkedIcon>
    </>
  );
};

export default WorkDetail;
