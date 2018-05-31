import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home';
import Film from '@/components/film';
import Detail from '@/components/detail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/film',
      component: Film
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/*',
      redirect : '/home'	
    }
  ]
})
