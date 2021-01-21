import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/assets/js/auth' // 验权
import { Message } from 'element-ui'

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  // 开始Progress
  NProgress.start()
  // token 存在 -  1.要进入login时，直接替换，进入首页（无需登陆）；2.进入其他路由，判断权限; 2-1:没权限；2-2：有权限
  // token 不存在 - 1.路由= login,不进行操作；2.路由!=login,跳转到 login
  if (getToken()) {
    if (to.path === '/login') {
      Message.success('token 已存在！不再进行跳转登陆页面！')
      // next({ path: '/' })
      NProgress.done()
    } else { // 路由不是login，自然跳转，并掉接口，拼接路由，显示菜单--这块如果是管理系统需要显示不用的菜单，可以这样做
      if (false) { // 没权限
        // 掉接口...，拼接路由...，进入首页
        try{
          next({ path: '/' })
        } catch (e) {
          console.log(e)
        }
      } else { // 有权限，自然跳转
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 路由=login，自然跳转-跳到login
      next()
    } else { // 路由不是login，跳到login
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
