import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index';
import MainLogin from '@/pages/login';
import RecordEntry from '@/pages/recordEntry';
import BatchFill from '@/pages/batchFill';
import AcademySelect from '@/pages/academySelect';
import LayList from '@/pages/layList';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: false,
        title: '登录志愿填报',
      },
      children:[{
        path: '/login',
        name: 'MainLogin',
        component: MainLogin,
        meta: {
          keepAlive: false,
          title: '登录志愿填报',
        }
      },{
        path: '/recordEntry',
        name: 'recordEntry',
        component: RecordEntry,
        meta: {
          keepAlive: true,
          title: '录入成绩',
        }
      },{
        path: '/batchFill',
        name: 'batchFill',
        component: BatchFill,
        meta: {
          keepAlive: true,
          title: '选择批次填报',
        }
      },{
        path: '/AcademySelect',
        name: 'AcademySelect',
        component: AcademySelect,
        meta: {
          keepAlive: true,
          title: '选择院校专业',
        }
      }]
    },{
      path: '/LayList',
      name: 'LayList',
      component: LayList,
      meta: {
        keepAlive: true,
        title: '选择院校专业弹窗',
      }
    }
  ]
})
