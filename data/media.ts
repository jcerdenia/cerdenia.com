export type MediaDataItem = {
  title: string;
  widget: string;
  note?: string;
  center?: boolean;
  hidden?: boolean;
};

const media: MediaDataItem[] = [
  {
    title: "Feuertrunken",
    widget: `
      <iframe width="100%" height="300" src="https://www.youtube.com/embed/xnmJFpS1x34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
  },
  {
    title: "Heavenward",
    widget: `
      <iframe width="100%" height="300" src="https://www.youtube.com/embed/YhaNa_622Wc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
  },
  {
    title: "Cariñosa",
    widget: `
      <iframe width="100%" height="300" src="https://www.youtube.com/embed/mbSxyysJgh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `,
  },
  {
    title: "Magayon",
    widget: `
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204090592&color=%23484440&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    `,
  },
  {
    title: "Creed",
    widget: `
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/152846752&color=%23343430&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    `,
  },
  {
    title: "Dark Lady",
    widget: `
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148048374&color=%234a4a4a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    `,
  },
  {
    title: "The Getaway",
    widget: `
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/4wtlFdw77ObM13zbE7tYd7?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    `,
    center: true,
    hidden: true,
  },
].filter((item) => !item.hidden);

export default media;
