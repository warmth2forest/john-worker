import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
        	path: 'projects',
        	name: 'main_projects',
        	component: resolve => require(['@/views/main-pages/Projects.vue'],resolve) 
        }
      ]
    }
  ]
})
