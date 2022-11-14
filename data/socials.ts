export interface Social {
  name: string;
  url: string;
  iconId: string;
  iconStyle?: any;
}

const socials: Social[] = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC8AFaXkEZtpE-G_MsB2crqw",
    iconId: "bi:youtube",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/joshuacerdenia",
    iconId: "fa6-brands:soundcloud",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/joshuatopia",
    iconId: "bi:instagram",
  },
  /*
  {
    name: "Personal Site",
    url: "https://j.cerdenia.com",
    iconId: "bi:link-45deg",
  },
  */
  {
    name: "Email",
    url: "https://www.instagram.com/joshuatopia/",
    iconId: "bi:envelope-fill",
  },
];

export default socials;
