import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "All Services",
        path: "/services",
        newTab: false,
      },
      {
        id: 52,
        title: "New Construction",
        path: "/new-construction",
        newTab: false,
      },
      {
        id: 53,
        title: "First-Time Buyer",
        path: "/first-time-buyer",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Neighborhoods",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "All Neighborhoods",
        path: "/neighborhoods",
        newTab: false,
      },
      {
        id: 42,
        title: "Summerlin",
        path: "/neighborhoods/summerlin",
        newTab: false,
      },
      {
        id: 43,
        title: "Henderson",
        path: "/neighborhoods/henderson",
        newTab: false,
      },
      {
        id: 44,
        title: "North Las Vegas",
        path: "/neighborhoods/north-las-vegas",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 34,
    title: "Search",
    path: "/search",
    newTab: false,
  },
  {
    id: 35,
    title: "Nearby Amenities",
    path: "/amenities",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
