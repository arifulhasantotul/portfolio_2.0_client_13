import ChatIcon from "@/components/Icons/ChatIcon.js";
import HomeIcon from "@/components/Icons/HomeIcon.js";
import ProgressIcon from "@/components/Icons/ProgressIcon.js";
import ProjectIcon from "@/components/Icons/ProjectIcon.js";
import { ImBlog } from "react-icons/im";

const routes = [
  {
    icon: <HomeIcon />,
    name: "Home",
    to: "/",
  },
  {
    icon: <ProjectIcon />,
    name: "Projects",
    to: "/projects",
  },
  {
    icon: <ProgressIcon />,
    name: "About",
    to: "/about",
  },
  {
    icon: <ImBlog />,
    name: "Blogs",
    to: "/blogs",
  },
  {
    icon: <ChatIcon />,
    name: "Contact",
    to: "/contact",
  },
];

export default routes;
