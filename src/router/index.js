import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Orders from '@/components/Orders';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
//父組件
import Guest from '@/components/pages/Guest';
//訪客組件
import GuestHome from '@/components/guests/GuestHome';
import GuestProductList from "@/components/guests/GuestProductList"

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: 'guest/home',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/guest',
      name: 'Guest',
      component: Guest,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: GuestHome,
        },
        {
          path: 'productlist/:brand',
          name: "Productlist",
          component : GuestProductList,
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