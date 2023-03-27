import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import Category from '../views/Category/Category.vue'
import Admin from '../views/Category/Admin.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import ListProducts from '../views/Category/ListProducts.vue'
import Signup from '../views/Signup.vue';
import Signin from '../views/Signin.vue';
import WishList from "../views/Product/WishList.vue";
import Cart from "../views/Product/Cart.vue";
import PageNotFound from '../components/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // si aucun page match , n'est trouve alors il retourne la route 404
    {
      path: '/:patchMatch(.*)*',
      name: 'NotFound',
      component: PageNotFound
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      //add categorie
      path: '/admin/addCategory/add',
      name: 'AddCategory',
      component: AddCategory
    },
    {
      //Edit categorie
      path: '/admin/EditCategory/:id',
      name: 'EditCategory',
      component: EditCategory
    },
    {
      //Edit product
      path: '/admin/product/:id',
      name: 'EditProduct',
      component: EditProduct
    },
    {
      //show detail product
      path: '/product/show/:id',
      name: 'ShowDetails',
      component: ShowDetails
    },
    {
      //detail categories
      path: '/category/show/:id',
      name: 'ListProducts',
      component: ListProducts
    },
    {
      //add product
      path: '/admin/addProduct/new',
      name: 'AddProduct',
      component: AddProduct
    },
    {
      path: '/admin/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/admin/product',
      name: 'AdminProduct',
      component: Product
    },
    {
      //admin page
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
      //sign up and signin
      {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path:'/wishlist',
      name:'WishList',
      component:WishList
    },
    //add to cart
    {
      path:'/cart',
      name:'Cart',
      component:Cart,
    }
   ]
})

export default router
