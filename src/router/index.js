import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import MainLogin from '@/pages/login';
import RecordEntry from '@/pages/recordEntry';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainLogin',
      component: MainLogin,
      meta: {
        title: '登录志愿填报'
      },
      children:[{
        path: '/login',
        name: 'MainLogin',
        component: MainLogin,
        meta: {
          title: '登录志愿填报'
        }
      },{
        path: '/recordEntry',
        name: 'recordEntry',
        component: RecordEntry,
        meta: {
          title: '录入成绩'
        }
      },]
    }
  ]
})
