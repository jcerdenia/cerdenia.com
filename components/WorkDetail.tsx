import Link from "next/link";
import { Badge, Button } from "react-bootstrap";

import email from "../data/email";
import useAppState from "../hooks/useAppState";
import { Work } from "../lib/interfaces";
import { slugify } from "../lib/utils";
import HtmlWrapper from "./HtmlWrapper";
import LinkedIcon from "./LinkedIcon";

interface WorkDetailProps {
  work: Work;
  note: string;
}

const getInquiryEmailLink = (title: string, category: string) => {
  const template = category === "orchestra" ? email.rental : email.purchase;
  const subject = template.subject(title);
  const body = template.body;

  return `mailto:joshua@cerdenia.com?subject=${subject}&body=${body}`;
};

const WorkDetail = ({ work, note }: WorkDetailProps): JSX.Element => {
  const { activeWorkCategory } = useAppState();

  return (
    <>
      <div className="d-flex justify-content-between">
        <h5 className="text-height-1">
          {work.title} {work.subtitle && `(${work.subtitle})`}
        </h5>
        <LinkedIcon
          iconId="bi:x"
          className="link-muted lg-up"
          iconStyle={{ height: "1.25rem" }}
          href={`/works?category=${activeWorkCategory}`}
        />
      </div>

      <aside className="small text-muted text-height-1">
        {work.instrumentation && `For ${work.instrumentation} (${work.year})`}
      </aside>
      <aside className="small text-muted text-height-1">
        {work.description} {!work.instrumentation && `(${work.year})`}
      </aside>

      <HtmlWrapper className="my-3">{note}</HtmlWrapper>

      <Button
        className="media-button px-5 py-2 m-1"
        variant="outline-success"
        href={work.scoreUrl}
        target={work.scoreUrl && "_blank"}
        disabled={!work.scoreUrl}
      >
        Perusal Score
        {!work.scoreUrl ? " Unavailable" : null}{" "}
      </Button>
      <Button
        className="media-button px-5 py-2 m-1"
        variant="outline-success"
        href={getInquiryEmailLink(work.title, work.category)}
      >
        Contact to Perform
      </Button>

      {work.tags ? (
        <div className="mt-3">
          {work.tags.sort().map((tag) => {
            return (
              <Link key={tag} href={`./tags/${slugify(tag)}`} passHref>
                <a>
                  <Badge className="mx-1 work-tag">{tag}</Badge>
                </a>
              </Link>
            );
          })}
        </div>
      ) : null}

      <div className="mt-3">
        <LinkedIcon
          className="link-muted lg-down"
          iconId="bi:arrow-return-left"
          href={`/works?category=${work.category}`}
        >
          More Works
        </LinkedIcon>
      </div>
    </>
  );
};

export default WorkDetail;
