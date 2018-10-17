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
  AnyPhoto: () => import('./views/Menuitem/AnyPhoto.vue'),
  HistoryToday: () => import('./views/Menuitem/HistoryToday.vue'),
  HandLive: () => import('./views/Menuitem/HandLive.vue'),
  BMap: () => import('./views/Menuitem/BMap.vue'),
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
    },{
      path: '/anyphoto',
      name: 'anyphoto',
      meta:{ title: '随时随地拍' },
      component: components.AnyPhoto
    },{
      path: '/his_tody',
      name: 'his_tody',
      meta:{ title: '党史上的今天' },
      component: components.HistoryToday
    },{
      path: '/handlive',
      name: 'handlive',
      meta:{ title: '掌上组织生活' },
      component: components.HandLive
    },{
      path: '/bmap',
      name: 'bmap',
      meta:{ title: '流动党员找组织' },
      component: components.BMap
    }
  ]
});
