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
      <LinkedIcon
        className="link-muted link-more-work"
        iconId="bi:arrow-return-left"
        href="/works"
      >
        More Works
      </LinkedIcon>
    </>
  );
};

export default WorkDetail;
