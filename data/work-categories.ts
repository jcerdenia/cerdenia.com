interface CategoryMap {
  [key: string]: {
    display: string;
    slug: string;
  };
}

const categories: CategoryMap = {
  ORCHESTRA: {
    display: "Orchestra & Large Ensemble",
    slug: "orchestra",
  },
  CHAMBER: {
    display: "Chamber (3 or more players without voice)",
    slug: "chamber",
  },
  VOCAL: {
    display: "Vocal & Vocal Chamber",
    slug: "vocal",
  },
  SOLO: {
    display: "Solo & Duet",
    slug: "solo",
  },
  OTHER: {
    display: "Other",
    slug: "other",
  },
};

export default categories;
