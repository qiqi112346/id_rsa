# 1、获取 MapGIS Client for JavaScript（Leaflet） 开发包


开发时需要引入MapGIS Client for JavaScript（Leaflet）开发包；其中包括必备的 CSS 文件和 JS 文件；


开发库分为正式发行版和Beta版;

* 正式版：面向公网用户，半年发行一次，发行后不会增加新功能，仅会修订BUG

* Beta版：面向内网用户，每周发行一次，会修订BUG并增加新功能


下面分别介绍两种版本包的获取方式：

## 1.1、正式发行版及其更新包

### 1.1.1、文件方式引入

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载MapGIS Client for JavaScript开发库**

以10.7.0.10为例，其中：

* mapgis-client-for-javascript-dist-v10.7.0.10.rar为开发库

* mapgis-client-for-javascript-all-v10.7.0.10.rar为开发库+示例站点


**Webclient-Leaflet-Plugin所需开发包位于如下文件夹中**

* webclient-leaflet-plugin库：`mapgis-client-for-javascript-all-v10.7.0.10\dist\cdn\zondyclient\webclient-leaflet-plugin.min.js`

* Leaflet库：`mapgis-client-for-javascript-all-v10.7.0.10\dist\cdn\leaflet`


**之后请将webclient-leaflet-plugin.min.js文件和leaflet文件夹拷贝出来，放入项目的静态资源目录****。**

### 1.1.2、npm 方式引入


**通过公网NPM的方式进行安装**

```plain
npm install @mapgis/webclient-leaflet-plugin
```
## 1.2、Beta版

### 1.2.1、文件方式引入


**请前往内网开发库下载Webclient-Leaflet-Plugin相关开发包**

* [@mapgis/webclient-leaflet-plugin](http://192.168.11.130:4873/-/web/detail/@mapgis/webclient-leaflet-plugin)

* [@mapgis/leaflet](http://192.168.11.130:4873/-/web/detail/@mapgis/leaflet)

以 17.0.0版本为例进行说明

1.在该网页中请先选择要下载的版本


<center>

<img src="http://webclient.smaryun.com/static/modules/leaflet/source/img/开发指南_1.png" style="zoom:100%;" />

</center>


2.之后点击相应的版本号，在右侧点击下载按钮，下载压缩包


<center>

<img src="http://webclient.smaryun.com/static/modules/leaflet/source/img/开发指南_2.png" style="zoom:100%;" />

</center>


**开发包位于如下文件夹中**

* webclient-leaflet-plugin库：`webclient-leaflet-plugin-17.0.0\package\dist\webclient-leaflet-plugin.min.js`

* Leaflet库：`leaflet-17.0.0\package\dist`

 

**请将**`leaflet-17.0.0\package\dist`**改名为leaflet，之后将**`webclient-leaflet-plugin.min.js`

 **文件和leaflet文件夹拷贝出来，放入项目的静态资源目录**


### 1.2.2、npm 方式引入


**请先将npm源切换为内网：**

```typescript
npm set registry http://192.168.11.130:4873/
```


**通过内网NPM的方式进行安装**

```plain
npm install @mapgis/webclient-leaflet-plugin
```


# 2、如何引入开发库 


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
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/leaflet/leaflet.css">
    <script src="http://{ip}:{port}/{你的路径}/leaflet/leaflet.js"></script>
    <!--plugin库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-leaflet-plugin.min.js"></script>
</head>
</html>
```


## 2.2、npm 方式引入


在你的项目文件夹下，通过npm的方式安装@mapgis/webclient-leaflet-plugin插件库

```typescript
npm install @mapgis/webclient-leaflet-plugin
```
为了更好地管理和维护项目插件包，请将插件名称和版本号写入项目的package.json文件中，如下所示：
```plain
{
  "version": "0.0.0",
  "scripts": {},
  "dependencies": {
    "@mapgis/webclient-leaflet-plugin": "^17.0.0",
  },
  "devDependencies": {}
}
```


# 3、开发入门


## 3.1、文件方式引入


**在项目的css文件中设置地图视图容器的样式，否则地图视图无法显示**

```typescript
/*设置地图视图的样式，一定要设置否则地图无法显示*/
#你的地图视图的id {
    width: 100%;
    height: 100%;
    position: absolute;
}
```


**初始化地图视图对象**

```typescript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
     <!--引擎库-->
    <link rel="stylesheet" href="http://{ip}:{port}/{你的路径}/leaflet/leaflet.css">
    <script src="http://{ip}:{port}/{你的路径}/leaflet/leaflet.js"></script>
    <!--plugin库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-leaflet-plugin.min.js"></script>
    <style>
      /*设置地图视图的样式，一定要设置否则地图无法显示*/
      #你的地图视图的id {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    </style>
    <script>
      // 初始化图层管理容器
      const map = new Zondy.Map()
      // 初始化地图视图对象
      const mapView = new Zondy.MapViewLeaflet({
        // 视图id
        viewId: '你的地图视图的id',
        // 图层管理容器
        map: map
      })
    </script>
</head>
<!--地图视图容器div-->
<div id="你的地图视图的id">
</div>
</html>
```

## 

## 3.2、npm 方式引入


**以VUE项目为例，React和Angular类似**


**在项目的css文件中设置地图视图容器的样式，否则地图视图无法显示**

```typescript
/*设置地图视图的样式，一定要设置否则地图无法显示*/
#你的地图视图的id {
    width: 100%;
    height: 100%;
    position: absolute;
}
```


**在你的vue组件的template中设置地图视图容器的div元素**

```typescript
<!--地图视图容器div-->
<div id="你的地图视图的id">
</div>
```


**引入需要的构造函数**

```typescript
import { MapView } from '@mapgis/webclient-leaflet-plugin'
import { Map } from "@mapgis/webclient-common"
```


**在mounted生命周期中初始化地图视图**

```typescript
// 初始化图层管理容器
const map = new Map();
// 初始化地图视图对象
const mapView = new MapViewLeaflet({
  // 视图id
  viewId: "你的地图视图的id",
  // 图层管理容器
  map: map
});
```


