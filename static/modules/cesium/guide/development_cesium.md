# 1、获取 MapGIS 3DClient for WebGL 开发包

开发时需要引入MapGIS 3DClient for WebGL 开发包；其中包括必备的 CSS 文件和 JS 文件；


开发库分为正式发行版和Beta版;

* 正式版：面向公网用户，半年发行一次，发行后不会增加新功能，仅会修订BUG

* Beta版：面向内网用户，每周发行一次，会修订BUG并增加新功能


下面分别介绍两种版本包的获取方式：

## 1.1、正式发行版及其更新包

### 1.1.1、文件方式引入

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载MapGIS 3DClient for WebGL开发库**

以10.7.4.10为例，其中：

* mapgis-client-for-javascript-dist-v10.7.4.10.rar为开发库

* mapgis-client-for-javascript-all-v10.7.4.10.rar为开发库+示例站点

**MapGIS 3DClient for WebGL所需开发包位于如下文件夹中**

* webclient-cesium-plugin库：`mapgis-client-for-javascript-all-v10.7.4.10\dist\cdn\zondyclient\webclient-cesium-plugin.min.js`

* Cesium库：`mapgis-client-for-javascript-all-v10.7.4.10\dist\cdn\cesium`

**之后请将webclient-cesium-plugin.min.js文件和cesium文件夹拷贝出来，放入项目的静态资源目录**

### 1.1.2、npm 方式引入

**通过****公网****NPM的方式进行安装**

```plain
npm install @mapgis/cesium
npm install @mapgis/webclient-cesium-plugin
```


**安装中需要注意的事项：**

* 其中@mapgis/cesium开发包仅支持通过文件的方式引入，不支持模块化通过import的方式引入，npm安装完成后，请将开发包从node_modules里的@mapgis/cesium文件夹里拷贝出来，放入项目的静态资源目录中

        

<center>

<img src="http://webclient.smaryun.com/static/modules/cesium/source/img/开发指南_3.png" style="zoom:100%;" />

</center>


## 1.2、Beta版

### 1.2.1、文件方式引入

**前往内网****npm****开发库下载MapGIS 3DClient for WebGL相关开发包**

* [@mapgis/webclient-cesium-plugin](http://192.168.11.130:4873/-/web/detail/@mapgis/webclient-cesium-plugin)

* [@mapgis/cesium](http://192.168.11.130:4873/-/web/detail/@mapgis/cesium)

以 17.4.0版本为例进行说明

1.在该网页中请先选择要下载的版本


<center>

<img src="http://webclient.smaryun.com/static/modules/cesium/source/img/开发指南_1.png" style="zoom:100%;" />

</center>


2.点击相应的版本号，在右侧点击下载按钮，下载压缩包


<center>

<img src="http://webclient.smaryun.com/static/modules/cesium/source/img/开发指南_2.png" style="zoom:100%;" />

</center>


**开发包位于如下文件夹中**

* webclient-cesium-plugin库：`webclient-cesium-plugin-17.4.0\package\dist\webclient-cesium-plugin.min.js`

* cesium库：`cesium-17.4.0\package\dist`

 

**请将**`cesium-17.4.0\package\dist`**文件夹改名为“cesium”，之后将**`webclient-cesium-plugin.min.js`**文件和cesium文件夹拷贝出来，放入项目的静态资源目录。**


### 1.2.2、npm 方式引入


**请先将npm源切换为内网：**

```typescript
npm set registry http://192.168.11.130:4873/
```


**通过内网NPM的方式进行安装**

```plain
npm install @mapgis/cesium
npm install @mapgis/webclient-cesium-plugin
```


**安装中需要注意的事项：**

* 其中@mapgis/cesium开发包仅支持通过文件的方式引入，不支持模块化通过import的方式引入，npm安装完成后，请将开发包从node_modules里的@mapgis/cesium文件夹里拷贝出来，放入项目的静态资源目录中

![图片](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa0AAABLCAMAAAD04iguAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAEXUExURTw/QTIyMk9LQVdoD4SFBHJeQE5eGnpoNzEzNUtur2qFr4qcsIibsHuRsF17sGiEr0p6tKi6uru7u7qttF9trl+Vt6iVsWaBsF57sHaLsU5xsEpts5e6urq6t4V6rl56sKyusqitsomYsq+xs42asUptsYWturqis7q6tnFtrkqItoWVtpeIrnGiul+Itqiis4WitI+csqi6t1h3sIWttpeiupeis3Fts1t6r2xwbYuVmomTmH2DhWBgWmFdVWtua2pnYaytr4qLiGJfV6mqq4NwLmFwAoOED2pUQE5UJHqEAk5KN2p6Ak5KLnKEAoN6JFdKQGpwJJCRj1tZUIOEGmFKQHl4c1JPRY2Ni3JwLldUJF5eV////3XuZhcAAAABYktHRFzq2ACXAAAAB3RJTUUH6AkaCTQ574mmtQAAAAFvck5UAc+id5oAAAR+SURBVHja7ZwJV9pAEIARQY29IBp7eLSFBjSVHvbS3lWhBUXtffj//0d3ZrMEyBpQYZMJ871nWHaDyn5vZybLI5kMMpWNk+kckB984kxuNtZ/NE4yU3NzmSTYGhq2xbZoQM/WJMO2KMG2KNFty2ISDtuiBNuiBNuiBNuiBNuiBNuihCFb81eAq9eux/1+aWPUluBG3G+YNKZtnamrULQFC4sX/hOOvTTWmUoCI7V181aneftOz0hgq4v5YHx5ZXUNHp2L+2Jb5+PuvftKV6n8oGdogK1CUc20W7nE8ko9I11bpbKvq9NQRNtaXqlaujbTx2jzlm8pJGuALWd9w7I82159KBr4xLE3ayKNbVryaOGwbHn2ErThLAGMLzyCAQ9HHXV+KhlxlYGewrKibbkVEQcdkbgKRREGC8VNnPRNscxskYvcCqS0wmNxYg1aHtYiMtHJsZrdsQVnuE9SG0tHXRMKU0/DsqJtgZ/lFchcNfSAtiAeypojSGqFYhWsYGbDtiPXUU3ZSnsYHXkFXyprZEXb8sSC8DCy1aqWsuUHPcv3YmHDrqpOLEdUSeIEtvwAmVJGf71V0sgabAuzlVsRNgpba722cMFAVBRUVX4SZtc31FLylC23Yqe6jh/D1fEzTV90JNzybcnoBuul35bQIJSiHd+WW9HYklLT68v4XobGFsQ+SE7u8xcLi1hkhGzJaOjbWpIvWliEH8vqioTYb8sL7TSSBFtYXIiktLqGB+jR2/LsoMrAMSwSYeEFtjqlRxpJhC25nroJR0IRKVWVAUcs9mVVAclKVRkvLUxocc/quEiErfBy0FYZ66/8SFiT9Yal8lSQt7zL7QwnHUO2tuc1bAfjfnjDEn4AXriKcNKbqXpJzGfHjm0Pt2kUtjU5O8GJsTU03bY80CS3nyYC2rbkXm+6d5u6oWdrkmFblGBblOBvBFGCbVGCbVGCbVGCbVGCbVGCbVEifls7r4E3b9/FPRUEMGjrvb5b2hJ8iHsuko85Wx8/7Wr7O7bOqWt6Au8gZM7W3n55V9cf2OpiZ/DvY1tj5QxdF7U1iZisMvS62NbwGK0JtboG2IK7TNah0RCNWdWThzvfiUPj8xfR02zNQne+gSON4e5KSRGzFbxOV6Stg0PQMZPPto+OT4SguhR08PVEYysHp4FS+aoUYvh661t5/3tfV6StabVKGj9+ZlFO+6gue8K26vgCYVV2pBCztnbL+3v9fVG2Dg5h7gW+IyGvfYTetJEwq+4M2mzV457YsWDUlk5WpK3OrDdbOUn+4NBPX1G2OgswZZi0pZU1rK3O9ENqAiVsa6zoZUXawtqipyGf5IQktjVOfullRVcZDVXcNXqqPDCDtqQi3NZgW6Pk9x+trGhb7SO/gm+2oLiYqWfbf7OyQkRbzZZYcyKpsS1DDLg6bvhXx5iuoDEjHiEsoi0sP47/cSQ0xemOhtO45yWZxG+LGR62RQm2RQm2RQm2RQm2RQm2RQm2RQm2RQm2RQm2RQm2RQm2RYn4bfF3TIaHv2NCCbD1H7yTEWnQmh4ZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA5LTI2VDA5OjUyOjU3KzAwOjAwdqPXcQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wOS0yNlQwOTo1Mjo1NyswMDowMAf+b80AAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMDktMjZUMDk6NTI6NTcrMDA6MDBQ604SAAAAAElFTkSuQmCC)

# 2、引入开发库 


## 2.1、文件方式引入


**在index.html中引入引擎库和插件库**

```typescript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--引擎库-->
    <script src="http://{ip}:{port}/{你的路径}/cesium/Cesium.js"></script>
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/cesium/Widgets/widgets.css"/>
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/cesium/MapGIS/css/mapgis.css"/>
    <!--插件库-->
    <script src="http://{ip}:{port}/{你的路径}/webclient-cesium-plugin/webclient-cesium-plugin.min.js"></script>
</head>
</html>
```


## 2.1、npm 方式引入

在你的项目文件夹下，通过npm的方式安装@mapgis/cesium库和@mapgis/webclient-cesium-plugin插件库
说明：**@mapgis/cesium 仅在17.4.0及以后版本支持ES6引入方式**，请参考 <a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_122_update">10.7.2.10 到 10.7.4.10接口升级</a><font color=gray size=2>（参考章节“二、变更 Q&A” 中 “10.7.4.10 版本如何引入库、配置资源路径?”、“10.7.4.10 版本接口访问形式是怎样的? ”）</font>

```typescript
npm install @mapgis/cesium
npm install @mapgis/webclient-cesium-plugin
```
为了更好地管理和维护项目插件包，请将插件名称和版本号写入项目的package.json文件中，如下所示：
```plain
{
  "version": "0.0.0",
  "scripts": {},
  "dependencies": {
    "@mapgis/cesium": "^17.4.0",
    "@mapgis/webclient-cesium-plugin": "^17.4.0",
  },
  "devDependencies": {}
}
```


# 3、初始化场景视图


## 3.1、文件方式引入


**在项目的css文件中设置场景视图容器的样式，否则场景视图无法显示**

```typescript
/*设置场景视图的样式，一定要设置否则地图无法显示*/
#你的场景视图的id {
    width: 100%;
    height: 100%;
    position: absolute;
}
```


**初始化场景视图对象**

```typescript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--引擎库-->
    <script src="http://{ip}:{port}/{你的路径}/cesium/Cesium.js"></script>
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/cesium/Widgets/widgets.css"/>
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/cesium/MapGIS/css/mapgis.css"/>
    <!--插件库-->
    <script src="http://{ip}:{port}/{你的路径}/webclient-cesium-plugin/webclient-cesium-plugin.min.js"></script>  
    <style>
      /*设置地图视图的样式，一定要设置否则地图无法显示*/
      #你的场景视图的id {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    </style>
    <script>
      //初始化图层管理容器
      const map = new zondy.Map();
      //初始化场景视图对象
      const sceneView = new zondy.cesium.SceneView({
        //视图id
        viewId: "你的场景视图的id",
        //图层管理容器
        map: map
      });
    </script>
</head>
<!--场景视图容器div-->
<div id="你的场景视图的id">
</div>
</html>
```

## 

## 3.2、npm 方式引入


**以VUE项目为例，React和Angular类似**


**在项目的css文件中设置场景视图容器的样式，否则场景视图无法显示**

```typescript
/*设置场景视图的样式，一定要设置否则地图无法显示*/
#你的场景视图的id {
    width: 100%;
    height: 100%;
    position: absolute;
}
```


**找到项目的index.html文件，由于@mapgis/Cesium不支持ES6模式，因此在里面引入引擎库**

```typescript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--引擎库-->
    <script src="http://{ip}:{port}/{你的路径}/cesium/Cesium.js"></script>
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/cesium/Widgets/widgets.css"/>
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/cesium/MapGIS/css/mapgis.css"/>
</head>
<div id="app"></div>
</html>
```


**在你的vue组件的template中设置场景视图容器的div元素**

```typescript
<!--场景视图容器div-->
<div id="你的场景视图的id">
</div>
```


**引入需要的构造函数**

```typescript
import { SceneView } from '@mapgis/webclient-cesium-plugin'
import { Map } from "@mapgis/webclient-common"
```


**在mounted生命周期中初始化场景视图**

```typescript
// 初始化图层管理容器
const map = new Map();
// 初始化地图视图对象
const sceneView = new SceneView({
  // 视图id
  viewId: "你的场景视图的id",
  // 图层管理容器
  map: map
});
```


