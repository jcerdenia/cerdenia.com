interface CategoryMap {
  [key: string]: {
    display: string;
    description?: string;
  };
}

const categories: CategoryMap = {
  orchestra: {
    display: "Orchestra & Large Ensemble",
  },
  chamber: {
    display: "Chamber",
    description: "3 or more instruments without voice",
  },
  solo: {
    display: "Solo & Duet",
    description: "Solo instrument with or without piano",
  },
  vocal: {
    display: "Vocal & Vocal Chamber",
  },
  theater: {
    display: "Theater",
  },
};

export default categories;
