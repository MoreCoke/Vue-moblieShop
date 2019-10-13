import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Orders from '@/components/Orders';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
//父組件
import frontend from '@/components/pages/Frontend';
//訪客組件
import guestHome from '@/components/guests/guestHome'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: 'guests/home',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/guests',
      name: 'Guests',
      component: frontend,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: guestHome,
        }
      ]
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
      ]
    },
  ]
})