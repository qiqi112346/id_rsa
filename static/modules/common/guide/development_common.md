# 1、获取 MapGIS Client for JavaScript（common） 开发包

开发时需要引入 MapGIS Client for JavaScript（common）开发包；其中包括必备的 JS 文件；

开发库分为正式发行版和 Beta 版;

- 正式版：面向公网用户，半年发行一次，发行后不会增加新功能，仅会修订 BUG
- Beta 版：面向内网用户，每周发行一次，会修订 BUG 并增加新功能
  下面分别介绍两种版本包的获取方式：

## 1.1、正式发行版及其更新包

### 1.1.1、文件方式引入

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载 MapGIS Client for JavaScript（common）开发库**

以 10.6.4.10 为例，其中：

**前往**[司马云官网](http://smaryun.com/dev/download_detail.html#/download828)**下载 MapGIS Client for JavaScript 开发库**

以 10.6.4.10 为例，其中：

- mapgis-client-for-javascript-dist-v10.6.4.10.rar 为开发库
- mapgis-client-for-javascript-all-v10.6.4.10.rar 为开发库+示例站点

**MapGIS Client for JavaScript（common）所需开发包位于如下文件夹中**

- webclient-common 库：`mapgis-client-for-javascript-all-v10.6.4.10\static\libs\cdn\zondyclient\webclient-common.min.js`
  **之后请将 webclient-common.min.js 文件拷贝出来，放入项目的静态资源目录**

### 1.1.2、npm 方式引入

**通过公网 NPM 的方式进行安装**

```typescript
npm install @mapgis/webclient-common
```

## 1.2、Beta 版

### 1.2.1、文件方式引入

**请前往内网开发库下载 MapGIS Client for JavaScript（common）相关开发包**

- [@mapgis/](http://192.168.11.130:4873/-/web/detail/@mapgis/webclient-common)[webclient-common](http://192.168.11.130:4873/-/web/detail/@mapgis/webclient-common)
  以 16.3.32 版本为例进行说明

  1.在该网页中请先选择要下载的版本

<center>
  <img src="http://webclient.smaryun.com/static/modules/common/source/img/开发指南_1.png" style="zoom:100%;" />
</center>

2.之后点击相应的版本号，在右侧点击下载按钮，下载压缩包

<center>
  <img src="http://webclient.smaryun.com/static/modules/common/source/img/开发指南_2.png" style="zoom:100%;" />
</center>

开发包位于`webclient-common-16.3.32\package\dist`中

**请将 `webclient-common.min.js`文件拷贝出来，放入项目的静态资源目录**

### 1.2.2、npm 方式引入

**请先将 npm 源切换为内网：**

```typescript
npm set registry http://192.168.11.130:4873/
```

**通过内网 NPM 的方式进行安装**

```plain
npm install @mapgis/webclient-common
```

# 2、如何引入开发库

## 2.1、文件方式引入

**在 index.html 中引入引擎库和插件库**

```typescript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--common库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-common.min.js"></script>
</head>
</html>
```

## 2.2、npm 方式引入

**通过 npm 的方式安装 MapGIS Client for JavaScript（common）库**

```typescript
npm install @mapgis/webclient-common
```


# 3、MapGIS Client for JavaScript（common）库开发入门

## 3.1、文件方式引入

**引入并使用 common 库**

```typescript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <!--common库-->
    <script src="http://{ip}:{port}/{你的路径}/zondyclient/webclient-common.min.js"></script>
    <script>
      // 例如初始化一个图层对象
      const mapImageLayer = new zondy.layer.IGSMapImageLayer()
    </script>
</head>
</html>
```

## 3.2、npm 方式引入

**以 VUE 项目为例，React 和 Angular 类似**

**引入需要的构造函数**

```typescript
import { IGSMapImageLayer } from '@mapgis/webclient-common'
```

**例如在 mounted 生命周期中初始化一个地图图片图层**

```typescript
// 初始化一个地图图片图层
const mapImageLayer = new IGSMapImageLayer()
```
