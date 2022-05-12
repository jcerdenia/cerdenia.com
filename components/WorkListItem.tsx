import Link from "next/link";
import { Work } from "../data/interfaces";

interface WorkListItemProps {
  work: Work;
  active: boolean;
}

const WorkListItem = ({ work, active }: WorkListItemProps): JSX.Element => {
  return (
    <nav className="my-2">
      {active ? (
        <strong>{work.title}</strong>
      ) : (
        <Link href={`/works/${work.slug}`}>{work.title}</Link>
      )}{" "}
      {work.subtitle && `(${work.subtitle})`}{" "}
      <aside className="small text-muted">
        {work.instrumentation
          ? `for ${work.instrumentation}`
          : work.description}{" "}
        ({work.year})
      </aside>
    </nav>
  );
};

export default WorkListItem;
