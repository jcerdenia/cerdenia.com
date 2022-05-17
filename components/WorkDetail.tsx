import { Button } from "react-bootstrap";
import HtmlWrapper from "./HtmlWrapper";
import LinkedIcon from "./LinkedIcon";
import { useAppState } from "../context/AppStateProvider";
import { Icon } from "@iconify/react";
import { Work } from "../data/interfaces";
import email from "../data/email";

interface WorkDetailProps {
  work: Work;
  note: string;
}

const getInquiryEmailLink = (title: string, category: string) => {
  const template = category === "ORCHESTRA" ? email.rental : email.purchase;
  const subject = template.subject(title);
  const body = template.body;

  return `mailto:joshua@cerdenia.com?subject=${subject}&body=${body}`;
};

const WorkDetail = ({ work, note }: WorkDetailProps): JSX.Element => {
  const { activeWorkCategory } = useAppState();

  return (
    <>
      <div className="d-flex justify-content-between">
        <h5 className="page-content-header">
          {work.title} {work.subtitle && `(${work.subtitle})`}
        </h5>
        <LinkedIcon
          iconId="bi:x"
          className="work-detail-close link-muted"
          iconStyle={{ height: "1.25rem" }}
          href={`/works?q=${activeWorkCategory}`}
        />
      </div>
      <aside className="small text-muted text-height-1">
        {work.instrumentation && `For ${work.instrumentation}`} ({work.year})
      </aside>
      <aside className="small text-muted text-height-1">
        {work.description}
      </aside>
      <HtmlWrapper className="my-3">{note}</HtmlWrapper>
      <Button
        className="media-button px-5 py-2 m-1"
        variant="outline-secondary"
        href={work.scoreUrl}
        target={work.scoreUrl && "_blank"}
        disabled={!work.scoreUrl}
      >
        <Icon icon="bi:file-pdf-fill" className="me-1" /> Perusal Score
        {!work.scoreUrl ? " Unavailable" : null}{" "}
      </Button>
      <Button
        className="media-button px-5 py-2 m-1"
        variant="outline-secondary"
        href={getInquiryEmailLink(work.title, work.category)}
        target={work.scoreUrl && "_blank"}
        disabled={!work.scoreUrl}
      >
        <Icon icon="bi:envelope-fill" className="me-1" /> Contact to Perform
      </Button>
      <LinkedIcon
        className="mt-3 link-muted link-more-work"
        iconId="bi:arrow-return-left"
        href={`/works?q=${work.category}`}
      >
        More Works
      </LinkedIcon>
    </>
  );
};

export default WorkDetail;
