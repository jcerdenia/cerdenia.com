export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
}

const navs: NavItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: "Work",
    url: "/work",
  },
];

export default navs;
