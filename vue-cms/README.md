# 默儿的项目
## 好好学习 天天向上
### 你必须努力 才能显得毫不费力
#### 不废话 好好学习把
## 主流的开源协议有何异同？
[主流的开源协议有何异同]: https://www.zhihu.com/question/19568896
## 使用传统的方式 提交代码到github 上
 - git add .
 - git commit -m "this commit messge"
 - git push
## 制作首页APP 组件
 1. 完成HEADER 区域，使用 mint-ui 中的Header 组件
 2. 制作底部的Tabbar 区域，使用MUI 中的Tabbar.html
    - 在制作底部购物车的时候，操作过一些
        - 先把 扩展的图标css 样式 拷贝到项目中
        - 拷贝扩展字体库 tff 文件到 项目中
        - 为购物车的小图标 添加如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'   
 3. 要在中间区域放置一个 router-view 来展示路由匹配到的组件
##  改造tabbar 为router-link
##  设置路由高亮
##  点击tabbar的路由链接，展示对应的组件
## 制作首页轮播图
## 加载首页轮播图的数据
  1. 获取数据，使用vue-resource
  2. 使用vue-resource的this.$http.get 获取数据
  3. 获取的数据，要保存到data身上
  4. 使用v-for 渲染每个item项 注意组件使用使用v-for必须要指定key
## 改造九宫格的样式
  ```发现打包后html里面，img的src为[object Module]，
  {
                  // limit >= 图片大小（byte） 可以转化为base64
                  // limit <= 图片大小（byte） 不可以转化为base64 ，会修改图片的名字，hash  保证文件名唯一
                  // name 可以使用name参数进行修改
                  test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=1&name=[hash:8]-[name].[ext]&esModule=false'
                  // 图片路径  处理url 可以传参，修改相关属性,
              },
```


