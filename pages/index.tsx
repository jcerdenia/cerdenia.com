import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../components/PageLayout";
import MediaWidget from "../components/MediaWidget";
import { parseMarkdown } from "../utils/markdown";

interface HomePageProps {
  works: Work[];
}

interface Work {
  title: string;
  for: string;
  mediaUrl: string;
  slug: string;
}

const HomePage = ({ works }: HomePageProps): JSX.Element => {
  const [hoveredWidgetId, setHoveredWidgetId] = useState<number | null>(null);

  const decideWidgetStyle = (widgetId: number): {} => ({
    filter:
      hoveredWidgetId === null || hoveredWidgetId === widgetId
        ? "brightness(100%)"
        : "brightness(50%)",
  });

  const decideShowcaseLinkClass = (widgetId: number): string => {
    return hoveredWidgetId !== widgetId ? "link-muted" : "showcase-link";
  };

  return (
    <PageLayout exact title="Joshua Cerdenia, Composer">
      <Row xs={1} lg={2} xl={3} className="g-2">
        {works.map((work: any, idx: number) => (
          <Col className="showcase-container" key={idx}>
            <MediaWidget
              className="showcase"
              src={work.mediaUrl}
              onMouseEnter={() => setHoveredWidgetId(idx)}
              onMouseLeave={() => setHoveredWidgetId(null)}
              style={decideWidgetStyle(idx)}
            />
            <p className="small">
              <a
                className={decideShowcaseLinkClass(idx)}
                href={`/work/${work.slug}`}
              >
                {work.title}
              </a>{" "}
              for {work.for}
            </p>
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async (): Promise<{ props: HomePageProps }> => {
  const workIds = [
    "feuertrunken",
    "heavenward",
    "carinosa",
    "magayon",
    "credo",
    "dark-lady",
  ];

  const works = workIds.map((slug): any => {
    return parseMarkdown(`/data/work/${slug}.md`).metadata;
  });

  return {
    props: { works },
  };
};

export default HomePage;
