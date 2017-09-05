import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Allarticle from '@/components/Allarticle'
import Subarticle from '@/components/Subarticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/writings',
      component: Article,
      children: [
        {
          path: '',
          component: Allarticle
        },
        {
          path: ':id',
          component: Subarticle,
          props: true
        }
      ]
    },
    {
      path: '/books',
      component: Article,
      children: [
        {
          path: '',
          component: Allarticle
        },
        {
          path: ':id',
          component: Subarticle,
          props: true
        }
      ]
    }
    // ,
    // {
    //   path: '/books',
    //   component: Book

    // }
    // ,
    // {
    //   path: '/user/:id',
    //   component: User,
    //   children: [
    //     {
    //       path:'/',
    //       component: mainContent
    //     },
        // {
        //   path:':id',
        //   component: detailContent,
        //   props: true
        // }
    //   ]
    // }
  ]
})
