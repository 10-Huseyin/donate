import { UserPage } from './components/pages/user';
import { PostPage } from './components/pages/post';
import { NewPostPage } from './components/pages/newPost';
const dashboardRoutes = [
  {
    path: "/user",
    name: "Users",
    icon: "glyphicon glyphicon-user",
    component: UserPage ,
    layout: "/home",
  },
  {
    path: "/post",
    name: "PostPage",
    icon: "nglyphicon glyphicon-film",
    component: PostPage ,
    layout: "/home",
  },
  {
    path: "/newpost",
    name: "NewPostPage",
    icon: "glyphicon glyphicon-pencil",
    component: NewPostPage ,
    layout: "/home",
  }
]

export default dashboardRoutes;