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
    display: "Chamber",
    slug: "chamber",
  },
  VOCAL: {
    display: "Art Song, Vocal Chamber & Choral",
    slug: "vocal",
  },
  SOLO: {
    display: "Solo Instrument with/without Piano",
    slug: "solo",
  },
};

export default categories;
