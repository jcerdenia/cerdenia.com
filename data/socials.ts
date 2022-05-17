export interface Social {
  name: string;
  url: string;
  iconId: string;
  iconStyle?: any;
}

const socials: Social[] = [
  {
    name: "Website",
    url: "https://cerdenia.com",
    iconId: "bi:house-fill",
  },
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
];

export default socials;
