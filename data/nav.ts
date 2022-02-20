export interface NavItem {
  title: string;
  path: string;
  disabled?: boolean;
}

const navs: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "News",
    path: "/news",
  },
  {
    title: "Work",
    path: "/work",
  },
];

export default navs;
