import Vue from 'vue'
import Router from 'vue-router'
import Dlu from '@/pages/dlu/Dlu'
import Kuangia from '@/pages/kuangia/Kuangia'
import Yuangong from '@/pages/yuangong/Yuangong'
import gongzizi from '@/pages/yuangong/gongzizi'
import ccw from '@/pages/yuangong/ccw'
import cce from '@/pages/yuangong/cce'
import ccv from '@/pages/yuangong/ccv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dlu',
      component: Dlu
    },
		{
		  path: '/Kuangia',
		  name: 'Kuangia',
		  component: Kuangia
		},
		{
		  path: '/Yuangong',
		  name: 'Yuangong',
		  component: Yuangong
		},
			{
		  path: '/gongzizi',
		  name: 'gongzizi',
		  component: gongzizi
		},
			{
		  path: '/ccw',
		  name: 'ccw',
		  component: ccw
		},
			{
		  path: '/cce',
		  name: 'cce',
		  component: cce
		},
		{
		  path: '/ccv',
		  name: 'ccv',
		  component: ccv
		}
  ]
})
