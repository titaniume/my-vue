import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/1.1",
    name: "Vue三大核心概念(属性、事件、插槽)",
    component: () => import(/* webpackChunkName: "about" */ "../views/1.1")
  },
  {
    path: "/1.2",
    name: "双向绑定和单向数据流不冲突",
    component: () => import(/* webpackChunkName: "about" */ "../views/1.2")
  },
  {
    path: "/1.3",
    name: "虚拟Dom",
    component: () => import(/* webpackChunkName: "about" */ "../views/1.3")
  },
  {
    path: "/1.4",
    name: "如何触发组件的更新",
    component: () => import(/* webpackChunkName: "about" */ "../views/1.4")
  },
  {
    path: "/1.5",
    name: "合理应用计算属性和侦听器",
    component: () => import(/* webpackChunkName: "about" */ "../views/1.5")
  },
  {
    path: "/1.6",
    name: "生命周期的应用场景和函数式组件",
    component: () => import(/* webpackChunkName: "about" */ "../views/1.6")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
