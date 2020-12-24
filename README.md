# vue练习，极简风格
    1.下载依赖 npm install 或 yarn install
    2.启动服务 npm run dev 或 yarn start
    3.打包 npm run build 或 yarn build
    4.检查需要优化模块 npm run build --report
    
# 访问
   [vue练习,点我访问](https://liuer1211.github.io/vue_-simplicity/dist/#/)
   
# 学习，问题，注意点
    1.打包
    build: {
       ...
       assetsPublicPath: './',
       ...
    }
    2.下载sass-loader，node-sass；版本不能太高，还需要设置
    { // 最新的webpack不支持缩写
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }
    3.使用mock数据
    下载依赖 npm install mockjs --save
    引用 import './mock/mockServer'
    提供接口 
      export const reqHaHa = () => ajax('/haha')
      Mock.mock('/haha', {code:1, data: data.haha})
    直接使用 import {reqMainList} from '../../api/index'
    4.使用vuex
    5.使用路由缓存
    6.使用路由守卫
    7.使用swiper
    8.使用组件
    9.使用element-ui
# github
    1.创建项目,上传
    echo "# vue_-simplicity" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin git@github.com:liuer1211/vue_-simplicity.git
    git push -u origin main
    
    2.使用github自带上传工具：GitHub Desktop
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/1.png)
   
    3.github项目设置网上访问权限
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/2.png)
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/3.png)
   
# 部分页面
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/9.png)
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/5.png)
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/7.png)

# 扫描二维码，手机查看
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/8.png)
