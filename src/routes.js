import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Users from "views/Users";
import Posts from "views/Posts.js";
import NewPost from "views/NewPost.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-notes",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/post",
    name: "Posts",
    icon: "nc-icon nc-paper-2",
    component: Posts,
    layout: "/admin",
  },
  {
    path: "/newpost",
    name: "NewPost",
    icon: "nc-icon nc-atom",
    component: NewPost,
    layout: "/admin",
  },
];

export default dashboardRoutes;
