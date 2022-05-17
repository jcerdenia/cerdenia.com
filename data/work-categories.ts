interface CategoryMap {
  [key: string]: {
    display: string;
    description?: string;
    slug: string;
  };
}

const categories: CategoryMap = {
  ORCHESTRA: {
    display: "Orchestra & Large Ensemble",
    slug: "orchestra",
  },
  CHAMBER: {
    display: "Chamber",
    description: "3 or more instruments without voice",
    slug: "chamber",
  },
  SOLO: {
    display: "Solo & Duet",
    description: "Solo instrument with or without piano",
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
