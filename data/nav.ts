import meta from "./meta";

export interface NavItem {
  title: string;
  path: string;
  hidden?: true;
  special?: true;
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
  {
    title: "Writings",
    path: "/writings",
    hidden: true,
  },
  {
    title: "Contact",
    path: meta.mailto,
    special: true,
  },
];

export default navs;
