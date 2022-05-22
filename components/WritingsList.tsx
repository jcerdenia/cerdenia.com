import Link from "next/link";
import { formatDate } from "../helpers/utils";
import { Writing } from "../data/interfaces";

interface WritingsListProps {
  writings: Writing[];
  activeKey: string;
}

const WritingsList = ({ writings, activeKey }: any): JSX.Element => {
  return (
    <section>
      <h5 className="mb-3">Assorted Writings</h5>

      {writings.map((writing: any) => {
        return (
          <div key={writing.title} className="mb-4">
            {activeKey === writing.slug ? (
              <text className="text-bold">{writing.title}</text>
            ) : (
              <Link href={`/writings/${writing.slug}`}>{writing.title}</Link>
            )}
            <aside className="small text-muted">
              {formatDate(writing.date)}
            </aside>
          </div>
        );
      })}
    </section>
  );
};

export default WritingsList;
