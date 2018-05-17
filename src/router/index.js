import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/projects',
      component: Main,
      children: [
        {
        	path: 'projects',
        	name: 'main_projects',
        	component: resolve => require(['@/views/main-pages/Projects.vue'],resolve) 
        },
        {
          path: 'project/:project_id',
          name: 'main_project_item',
          component: resolve => require(['@/views/main-pages/ProjectItem.vue'],resolve) 
        }
      ]
    },
    {
      path: '/project',
      redirect: '/projects',
      component: Main
    }
  ]
})
