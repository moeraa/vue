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
## 改造 新闻资讯 路由链接
## 新闻咨询页面 制作
   1. 绘制界面 使用使用MuI中的media-list 
   ```
    //导入格式化时间插件
    import moment from 'moment'
    //定义全局的过滤器
    Vue.filter('dataFormat',function (dataStr,pattern="yyyy-MM-DD HH:mm:ss") {
        return moment(dataStr).format(pattern);
    });
   ```
   2. 使用vue-resource获取数据
   3. 渲染真实数据
## 实现新闻咨询列表 点击跳转新闻详情
  1. 把列表中的每一项改造为：router-link 同时 在跳转的时候 应该提供唯一的ID标识符
  2. 创建 新闻详情的组件页面 newsinfo.vue
  3. 在路由模块中，将新闻详情的路由地址 和页面组件对应起来
## 实现 新闻详情的页面布局和数据渲染
## 单独封装一个单独的 comment.vue组件
 1. 先创建一个单独的 comment.vue 组件模版
 2. 在需要用的页面 手动导入此组件
  - import comment from './comment.vue'
 3. 在父组件中，使用 、components、 属性，将刚才导入的comment组件，注册为自己的子组件，
 4. 将注册的子组件 注册名称，以标签的形式在页面中引用即可
 ## 获取所有评论的数据显示到页面中
 ## 实现点击搭载更多的功能
 1. 为了加载更多按钮绑定点击事件，在事件中，点击下一页
 2. 点击加载更多 让page index++ 然后重新嗲用getcommets()方法，获取下一页的数据
 3.


