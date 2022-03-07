export interface Social {
  name: string;
  url: string;
  iconClassName: string;
}

const socials: Social[] = [
  {
    name: "Website",
    url: "https://cerdenia.com",
    iconClassName: "bi bi-house-fill",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC8AFaXkEZtpE-G_MsB2crqw",
    iconClassName: "bi bi-youtube",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/joshuacerdenia",
    iconClassName: "bi bi-soundwave",
  },
  {
    name: "Email",
    url: "mailto:joshua@cerdenia.com",
    iconClassName: "bi bi-envelope-fill",
  },
];

export default socials;
