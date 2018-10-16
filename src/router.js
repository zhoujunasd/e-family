import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const components = {
  Home: () => import('./views/home/Home.vue'),
  Notice: () => import('./views/notice/notice.vue'),
  User: () => import('./views/user/user.vue'),
  Login: () => import('./views/Login/Login.vue'),
  MenuItem: () => import('./views/Menuitem/ListMessage.vue'),
  MenuArticle: () => import('./views/Menuitem/MenuArticle.vue'),
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/index",
    },
    {
      path: "/index",
      name: "index",
      component: components.Home
    },{
      path: '/notice',
      name: 'notice',
      component: components.Notice
    },{
      path: '/user',
      name: 'user',
      component: components.User
    },{
      path: '/login',
      name: 'login',
      meta:{ title: '登录' },
      component: components.Login
    },{
      path: '/menu/:id',
      name: 'menu',
      component: components.MenuItem
    },{
      path: '/men_art/:id',
      name: 'men_art',
      component: components.MenuArticle
    }
  ]
});
