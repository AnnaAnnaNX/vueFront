import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.vue'
import Product from './views/Product.vue'
import Sellers from './views/Sellers.vue'
import Seller from './views/Seller.vue'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products,
      props: true
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product,
      props: true
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: Sellers,
    },
    {
      path: '/sellers/:id',
      name: 'seller',
      component: Seller,
      props: true
    }
    // {
    //   path: '/:filter',
    //   name: 'home',
    //   component: Home,
    //   props: true
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (['all', 'active', 'completed'].some(record => record === to.params.filter)) {
//     next()
//   } else {
//     next('/all')
//   }
// })

export default router
