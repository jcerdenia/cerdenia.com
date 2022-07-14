import PageLayout from "../../components/PageLayout";
import WritingsList from "../../components/WritingsList";
import { parseMarkdown } from "../../lib/markdown";
import { compareBy } from "../../lib/utils";
import { Writing } from "../../lib/interfaces";

interface WritingsHomePageProps {
  writings: Writing[];
}

const WritingsHomePage = ({
  writings,
}: WritingsHomePageProps): React.ReactElement => {
  return (
    <PageLayout exact title="Writings">
      <WritingsList writings={writings} />
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const fs = require("fs");
  const dir = "/data/writings";

  const writings: Writing[] = fs
    .readdirSync(`${process.cwd()}/${dir}`)
    .filter((name: string) => name.endsWith(".md"))
    .map((name: string) => parseMarkdown(`${dir}/${name}`, ["metadata"]))
    .sort(compareBy("date"))
    .reverse();

  return {
    props: { writings },
  };
};

export default WritingsHomePage;
