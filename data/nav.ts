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
    title: "About",
    path: "/about",
  },
  {
    title: "Works",
    path: "/works",
  },
  {
    title: "News & Events",
    path: "/news",
  },
];

export default navs;
