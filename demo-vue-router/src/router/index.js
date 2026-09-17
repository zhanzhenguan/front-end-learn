import { createMemoryHistory, createRouter } from 'vue-router'
import Home from"../views/Home.vue";
import Menu from "../views/Menu.vue";
import Permission from "../views/Permission.vue";
import User from "../views/User/User.vue";
import UserProfile from "../views/User/UserProfile.vue";
import UserPosts from "../views/User/UserPosts.vue";

//1、定义路由表

const routes = [
  { path: '/',name:'home', component: Home },
  { path: '/user/:id',
    name:"user",
    component: User ,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        name:"profile",
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        name:"posts",
        component: UserPosts,
      },
    ],},

  { path: '/permission', name:'permission',component: Permission },
  { path: '/menu', name:'menu',component: Menu },
  { path: '/system',name:"system", component: ()=>import('../views/System.vue') },
  { path: '/common/:id/:name/:age',name :"common", component: ()=>import('../views/Common.vue') },
]


//2、创建路由器
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})


//导航守卫 登录鉴权 未登录 跳回登录页
router.beforeEach((to, from) => {
  console.log("to",to)
  console.log("from",from)
  //1、返回 false：取消导航
  //2、返回true，不返回：继续导航
  //3、返回'路径'：跳转到指定页面
  // return false
  if(to.name == ''){
    return '/'
  }

  return true
})




//3、导出路由器
export default router;


//4、vue实例使用路由器
//在 main.js 挂载即可

