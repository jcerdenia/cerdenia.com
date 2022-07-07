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
    url: "https://www.instagram.com/joshuatopia/",
    iconId: "bi:instagram",
  },
  {
    name: `"Digital Garden"`,
    url: "https://garden.cerdenia.com",
    iconId: "fa6-solid:leaf",
  },
];

export default socials;
