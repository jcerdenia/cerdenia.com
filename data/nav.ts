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
    title: "Work",
    path: "/work",
  },
  {
    title: "News & Events",
    path: "/news",
  },
  {
    title: "About",
    path: "/about",
  },
];

export default navs;
