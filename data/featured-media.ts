export interface MediaItem {
  title: string;
  subtitle?: string;
  description?: string;
  path: string;
  src: string;
}

const featuredMedia: MediaItem[] = [
  {
    title: "Feuertrunken",
    subtitle: "Detroit Symphony Orchestra",
    description: "World Premiere, Detroit, MI, USA, 2017",
    path: "/works/feuertrunken",
    src: "https://www.youtube.com/watch?v=xnmJFpS1x34",
  },
  {
    title: "Heavenward",
    subtitle: "Ensemble Gô",
    description: "Yokohama, Japan, 2015",
    path: "/works/heavenward",
    src: "https://www.youtube.com/watch?v=YhaNa_622Wc",
  },
  {
    title: "Cariñosa",
    subtitle: "Ensemble Gô",
    description: "World Premiere, Yokohama, Japan, 2015",
    path: "/works/carinosa",
    src: "https://www.youtube.com/watch?v=mbSxyysJgh8",
  },
  {
    title: "Drunk with Fire",
    subtitle: "SoundWaves with The Florida Orchestra",
    description: "Pre-concert talk with Ross Holcombe",
    path: "https://open.spotify.com/episode/2tqRghyl0k7r1ZaJ59HzEm",
    src: "https://open.spotify.com/episode/2tqRghyl0k7r1ZaJ59HzEm",
  },
  {
    title: "Why should we compose music?",
    subtitle: "The Saad Haddad Show",
    description: "Conversation with Saad Haddad",
    path: "https://open.spotify.com/episode/6CQdEkvgMshiJJFjSJ1a8K?si=Okig4T5nQJuKpug0mRzT4Q",
    src: "https://open.spotify.com/episode/6CQdEkvgMshiJJFjSJ1a8K?si=Okig4T5nQJuKpug0mRzT4Q",
  },
  {
    title: "The Getaway",
    subtitle: "Bite-Sized Broadway",
    description: "Radio production and talkback",
    path: "https://open.spotify.com/episode/4wtlFdw77ObM13zbE7tYd7?si=c19c495a28a84d5e",
    src: "https://open.spotify.com/episode/4wtlFdw77ObM13zbE7tYd7?si=c19c495a28a84d5e",
  },
  {
    title: "Maestro Filipino",
    subtitle: "98.7 DZFE",
    description: "Conversation with Daniel Federico",
    path: "https://soundcloud.com/987dzfe/maestro-filipino-23-0506-joshua-cerdenia",
    src: "https://soundcloud.com/987dzfe/maestro-filipino-23-0506-joshua-cerdenia",
  },
  {
    title: "Maestro Filipino",
    subtitle: "98.7 DZFE",
    description: "Conversation with Tiffany Liong-Gabuya",
    path: "https://soundcloud.com/987dzfe/maestro-filipino-17-1028-joshua-cerdenia-pt01",
    src: "https://soundcloud.com/987dzfe/maestro-filipino-17-1028-joshua-cerdenia-pt01",
  },
  {
    title: "Magayon",
    subtitle: "Juilliard Orchestra",
    description: "World Premiere, New York, NY, USA, 2015",
    path: "/works/magayon",
    src: "https://soundcloud.com/joshuacerdenia/magayon",
  },
  {
    title: "Credo",
    subtitle: "Singapore Symphony Orchestra",
    description: "World Premiere, Singapore, 2014",
    path: "/works/credo",
    src: "https://soundcloud.com/joshuacerdenia/creed-singapore-symphony-orchestra",
  },
  {
    title: "Dark Lady",
    subtitle: "Adam De Wilde",
    description: "World Premiere, Singapore, 2014",
    path: "/works/dark-lady",
    src: "https://soundcloud.com/joshuacerdenia/dark-lady-four-shakespeare-sonnets",
  },
];

export default featuredMedia;
