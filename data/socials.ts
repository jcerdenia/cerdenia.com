import meta from "./meta";

export interface Social {
  name: string;
  url: string;
  iconId: string;
  iconStyle?: any;
  hidden?: boolean;
}

const socials: Social[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/joshuatopia",
    iconId: "bi:instagram",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/joshuacerdenia",
    iconId: "fa6-brands:soundcloud",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC8AFaXkEZtpE-G_MsB2crqw",
    iconId: "bi:youtube",
  },
  {
    name: "Personal Site",
    url: "https://j.cerdenia.com",
    iconId: "bi:link-45deg",
    hidden: true,
  },
  {
    name: "Email",
    url: meta.mailto,
    iconId: "bi:envelope-fill",
  },
];

export default socials.filter((s) => !s.hidden);
