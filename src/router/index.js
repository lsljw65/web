import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/menu',
    name:'menu',
    component:()=>import('../views/MenuView.vue'),
    /* children:[
      {
        path:'',
        component:()=>import('../views/CoffeeView.vue')
      },
      {
        path:'/menu/coffee',
        name:'coffee',
        component:()=>import('../views/CoffeeView.vue')
      },
      {
        path:'/menu/drink',
        name:'drink',
        component:()=>import('../views/DrinkView.vue')
      },
      {
        path:'/menu/tea',
        name:'tea',
        component:()=>import('../views/CoffeeView.vue')
      },
      {
        path:'/menu/food',
        name:'food',
        component:()=>import('../views/DrinkView.vue')
      },
    ] */
  },
  {
    path:'/product',
    name:'product',
    component:()=>import('../views/ProductView.vue'),
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
