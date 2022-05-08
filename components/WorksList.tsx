import Link from "next/link";
import categories from "../data/work-categories";
import { Work } from "../data/interfaces";

interface WorksListProps {
  works: Work[];
  activeKey?: string;
}

const WorksList = ({ works, activeKey }: WorksListProps): JSX.Element => {
  return (
    <>
      <h5>Selected Works</h5>
      {Object.keys(categories).map((key: string) => {
        return (
          <section key={key} className="my-4">
            <h6 className="d-flex align-items-center">
              {categories[key].display}
            </h6>
            {works
              .filter((work: Work) => work.category === key)
              .map((work: Work) => {
                return (
                  <nav key={work.slug} className="my-3">
                    {work.slug !== activeKey ? (
                      <Link href={`/works/${work.slug}`}>{work.title}</Link>
                    ) : (
                      <strong>{work.title}</strong>
                    )}{" "}
                    {work.subtitle && `(${work.subtitle})`}{" "}
                    <span className="small text-muted">
                      {work.for ? `for ${work.for}` : work.description}
                    </span>
                  </nav>
                );
              })}
          </section>
        );
      })}
    </>
  );
};

export default WorksList;
