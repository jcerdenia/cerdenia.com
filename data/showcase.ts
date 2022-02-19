export interface MediaDataItem {
  url: string;
  type: "youtube" | "soundcloud";
}

const media: MediaDataItem[] = [
  {
    url: "https://www.youtube.com/watch?v=xnmJFpS1x34",
    type: "youtube",
  },
  {
    url: "https://www.youtube.com/watch?v=YhaNa_622Wc",
    type: "youtube",
  },
  {
    url: "https://www.youtube.com/watch?v=mbSxyysJgh8",
    type: "youtube",
  },
  {
    url: "https://soundcloud.com/joshuacerdenia/magayon",
    type: "soundcloud",
  },
  {
    url: "https://soundcloud.com/joshuacerdenia/creed-singapore-symphony-orchestra",
    type: "soundcloud",
  },
  {
    url: "https://soundcloud.com/joshuacerdenia/dark-lady-four-shakespeare-sonnets",
    type: "soundcloud",
  },
];

export default media;
