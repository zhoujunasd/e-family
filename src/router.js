import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const components = {
  Home: () => import('./views/home/Home.vue'),
  Notice: () => import('./views/notice/notice.vue'),
  User: () => import('./views/user/user.vue'),
}

export default new Router({
  routes: [
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
    }
  ]
});
