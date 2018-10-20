import Vue from "vue";
import Router from "vue-router";
import store from "./store";

Vue.use(Router);

const components = {
  Home: () => import('./views/home/Home.vue'),
  Notice: () => import('./views/notice/notice.vue'),
  User: () => import('./views/user/user.vue'),
  userInfo: () => import('./views/user/userInfo.vue'),
  cloudInteract: () => import('./views/user/cloudInteract.vue'),
  userPoint: () => import('./views/user/userPoint.vue'),
  pointDetail: () => import('./views/user/pointDetail.vue'),
  editPassword: () => import('./views/user/editPassword.vue'),
  partyCost: () => import('./views/user/partyCost.vue'),
  Login: () => import('./views/Login/Login.vue'),
  MenuItem: () => import('./views/Menuitem/ListMessage.vue'),
  MenuArticle: () => import('./views/Menuitem/MenuArticle.vue'),
  AnyPhoto: () => import('./views/Menuitem/AnyPhoto.vue'),
  HistoryToday: () => import('./views/Menuitem/HistoryToday.vue'),
  HandLive: () => import('./views/Menuitem/HandLive.vue'),
  BMap: () => import('./views/Menuitem/BMap.vue'),
}

const router =  new Router({
  // mode: 'history',
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
    },{
      path: '/userInfo',
      name: 'userInfo',
      meta:{ title: '个人信息',requireAuth: true },
      component: components.userInfo,
      beforeEnter:(to,from,next) => {
        // console.log('userInfo',from.path,to.path);
        // if(from.path == '/userInfo' && to.path == '/updateInfo'){
        //   next({
        //     path: '/user'
        //   })
        // }else{
        //   next()
        // }
        next()
      }
    },{
      path: '/updateInfo',
      name: 'updateInfo',
      meta:{ title: '修改个人信息'},
      component: components.userInfo,
      beforeEnter:(to,from,next) => {
        // console.log('updateInfo',from.path,to.path);
        next()
      }
    },{
      path: '/cloud',
      name: 'cloud',
      // requireAuth: true:判断是否需要登录拦截
      meta:{ title: '党员云互动',requireAuth: true },
      component: components.cloudInteract
    },{
      path: '/userPoint',
      name: 'userPoint',
      meta:{ title: '个人量化积分',requireAuth: true },
      component: components.userPoint
    },{
      path: '/pointDetail',
      name: 'pointDetail',
      meta:{ title: '积分明细'},
      component: components.pointDetail
    },{
      path: '/editPassword',
      name: 'editPassword',
      meta:{ title: '修改密码', requireAuth: true},
      component: components.editPassword
    },{
      path: '/partyCost',
      name: 'partyCost',
      meta:{ title: '党费缴纳', requireAuth: true},
      component: components.partyCost
    }
  ]
});

// 重定向函数
// { path: '/', redirect: (to) => { if([判断]){ return '/index' }else{ return '/login'} } } 

// 在路由页面设置重定向
// 还可以在组件页面，监听'$route'来判断是否重定向
router.beforeEach((to, from, next)=>{
  // 在路由跳转之前进行重定向，不是正确的登录拦截的方法
  // if(to.path == '/userInfo' || to.path == ' '){
  //   if(store.state.userData == ''){
  //     next({
  //       path: '/login'
  //     })
  //   }else{
  //     next()
  //   }
  // }else{
  //   next()
  // }
  // 登录拦截
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({
        path: '/login',
        // 将跳转的路由path作为参数，登录成功后跳转至改路由
        query: {redirect: to.fullPath}
      })
    }
  }else{
    next()
  }
})

export default router