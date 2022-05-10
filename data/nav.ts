export interface NavItem {
  title: string;
  path: string;
}

const navs: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Works",
    path: "/works",
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
