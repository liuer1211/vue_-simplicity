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
   ![image.png](https://liuer1211.github.io/vue_-simplicity/static/img/4.png)
