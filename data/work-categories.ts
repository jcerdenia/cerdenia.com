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
  SOLO: {
    display: "Solo & Duet",
    slug: "solo",
  },
  VOCAL: {
    display: "Vocal & Vocal Chamber",
    slug: "vocal",
  },
  OTHER: {
    display: "Other",
    slug: "other",
  },
};

export default categories;
