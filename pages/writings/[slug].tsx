import { Col, Row } from "react-bootstrap";

import HtmlWrapper from "../../components/HtmlWrapper";
import LinkedIcon from "../../components/LinkedIcon";
import PageLayout from "../../components/PageLayout";
import WritingsList from "../../components/WritingsList";
import { parseMarkdown } from "../../lib/helpers";
import { Writing } from "../../lib/interfaces";
import { compareBy, formatDate } from "../../lib/utils";

interface WritingPageProps {
  metadata: Writing;
  content: string;
  writings: Writing[];
}

const WritingPage = ({
  metadata,
  content,
  writings,
}: WritingPageProps): React.ReactElement => {
  return (
    <PageLayout exact title="Writings">
      <Row xs={1} lg={2}>
        <Col md={12} lg={4} className="lg-up">
          <WritingsList writings={writings} activeKey={metadata.slug} />
        </Col>

        <Col md={12} lg={8}>
          <h5>{metadata.title}</h5>
          <aside className="small text-muted">
            {formatDate(metadata.date)}, {metadata.location}
          </aside>

          <HtmlWrapper className="my-3">{content}</HtmlWrapper>

          <div className="mt-3">
            <LinkedIcon
              className="link-muted lg-down"
              iconId="bi:arrow-return-left"
              href="/writings"
            >
              More Writings
            </LinkedIcon>
          </div>
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticPaths = () => {
  const fs = require("fs");

  const slugs: any[] = fs
    .readdirSync(`${process.cwd()}/data/writings`)
    .filter((fileName: string): boolean => fileName.endsWith(".md"))
    .map((fileName: string): string => fileName.replace(".md", ""));

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (
  context: any
): Promise<{ props: WritingPageProps }> => {
  const fs = require("fs");
  const slug = context.params.slug;
  const dir = "/data/writings";

  const { metadata, content }: any = parseMarkdown(`/data/writings/${slug}.md`);

  const writings: Writing[] = fs
    .readdirSync(`${process.cwd()}/${dir}`)
    .filter((name: string) => name.endsWith(".md"))
    .map((name: string) => parseMarkdown(`${dir}/${name}`, ["metadata"]))
    .sort(compareBy("date"))
    .reverse();

  return {
    props: { metadata, content, writings },
  };
};

export default WritingPage;
