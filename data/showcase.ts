export interface MediaItem {
  title: string;
  artist?: string;
  path: string;
  src: string;
}

const media: MediaItem[] = [
  {
    title: "Feuertrunken",
    artist: "Detroit Symphony Orchestra",
    path: "/work/feuertrunken",
    src: "https://www.youtube.com/watch?v=xnmJFpS1x34",
  },
  {
    title: "Heavenward",
    artist: "Ensemble Gô",
    path: "/work/heavenward",
    src: "https://www.youtube.com/watch?v=YhaNa_622Wc",
  },
  {
    title: "Cariñosa",
    artist: "Ensemble Gô",
    path: "/work/carinosa",
    src: "https://www.youtube.com/watch?v=mbSxyysJgh8",
  },
  {
    title: "Magayon",
    artist: "Juilliard Orchestra",
    path: "/work/magayon",
    src: "https://soundcloud.com/joshuacerdenia/magayon",
  },
  {
    title: "Credo",
    artist: "Singapore Symphony Orchestra",
    path: "/work/credo",
    src: "https://soundcloud.com/joshuacerdenia/creed-singapore-symphony-orchestra",
  },
  {
    title: "Dark Lady (Four Shakespeare Sonnets)",
    path: "/work/dark-lady",
    src: "https://soundcloud.com/joshuacerdenia/dark-lady-four-shakespeare-sonnets",
  },
];

export default media;
