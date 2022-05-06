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
    title: "News & Events",
    path: "/news",
  },
  {
    title: "Work",
    path: "/work",
  },
  {
    title: "About",
    path: "/about",
  },
];

export default navs;
