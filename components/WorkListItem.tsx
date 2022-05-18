import Link from "next/link";
import { Work } from "../data/interfaces";

interface WorkListItemProps {
  className?: string;
  work: Work;
  active: boolean;
}

const WorkListItem = ({
  className,
  work,
  active,
}: WorkListItemProps): JSX.Element => {
  return (
    <nav className={className}>
      {active ? (
        <text className="text-bold">{work.title}</text>
      ) : (
        <Link href={`/works/${work.slug}`}>{work.title}</Link>
      )}{" "}
      {work.subtitle && `(${work.subtitle})`}
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
