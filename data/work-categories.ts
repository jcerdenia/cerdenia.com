interface CategoryMap {
  [key: string]: {
    display: string;
    slug: string;
  };
}

const categories: CategoryMap = {
  ORCHESTRA: {
    display: "Orchestra & Sinfonietta",
    slug: "orchestra",
  },
  CHAMBER: {
    display: "Chamber Music",
    slug: "chamber",
  },
  VOCAL: {
    display: "Vocal Music",
    slug: "vocal",
  },
  SOLO: {
    display: "Solo and Duet Works",
    slug: "solo",
  },
};

export default categories;
