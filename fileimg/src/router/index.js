import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/view/home'
import Content from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home',
      name: 'Home',
      component: Home,
      children: [
        { path: '/', component: Content }
      ]
    }
  ]
})
