import Link from "next/link";

import type { Writing } from "../lib/interfaces";
import { formatDate } from "../lib/utils";

interface WritingsListProps {
  writings: Writing[];
  activeKey?: string;
}

const WritingsList = ({
  writings,
  activeKey,
}: WritingsListProps): JSX.Element => {
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
