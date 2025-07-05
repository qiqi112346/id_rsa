## MapGIS Client for JavaScript（common）产品介绍

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（common）是 MapGIS Client for JavaScript 产品的重要组成部分，他提供与地图引擎无关的接口和功能，采用面向对象设计理念，遵循 ES6 标准，包含基础对象、地图符号、服务库、图层、地图（场景）、地图（场景）视图、空间分析、草图编辑、行业标绘等模块。可独立使用，也可以和 MapGIS Client for JavaScript 产品中地图引擎库、引擎插件库组合使用，可以最大限度的实现代码在不同在图引擎上的复用，快速实现二三维一体化应用的开发。MapGIS Client for JavaScript（common）与其它库之间的关系如下图所示：

<center>
  <img src="./static/modules/common/source/img/struct.png" alt="与其它库之间的关系"/>
  <br>
<div class="notes">MapGIS Client for JavaScript（common）与其它库之间的关系</div>
</center>
<br/>

> MapGIS Client for JavaScript (common) SDK 包含了 WebGIS 开发所需的开发库、API、示例等，结合<a href="http://www.smaryun.com/dev/resource_center.html#/type27/tag10/page1" target="_blank">司马云开发世界资源中心</a>的配套开发资源，以及<a href="http://www.smaryun.com/cloudlisten/index.php" target="_blank">云听社区</a>，助力开发者高效开发。

## <span id="download">产品下载</span>

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript 可从司马云-云开发世界下载正式发布的产品离线资源包，通过 NPM 包方式引入产品开发库：

- MapGIS 官方下载地址：<a href="http://smaryun.com/dev/download_detail.html#/download828" targer="_blank">http://smaryun.com/dev/download_detail.html#/download828</a>

- MapGIS 相关 NPM 包资源地址：<a href="https://www.npmjs.com/org/mapgis" targer="_blank">https://www.npmjs.com/org/mapgis</a>

- npm 仓库获取：

```plain
npm install @mapgis/webclient-common
```

## 环境参数

### 硬件配置

推荐配置

- CPU：酷睿 i5 10400F 及以上
- 内存：16G 及以上
- 显存：独立显卡，显存 6G 及以上（gtx 1060）
  > 场景的流畅度除了和硬件配置有关外，也和数据量的大小有关，请根据实际情况进行选择。

### 开发环境

- 前后台混合型项目 IDE 推荐：Microsoft Visual Studio（2015 及以上）、MyEclipse（2019 及以上）等
- 纯前端项目 IDE 推荐：Visual Studio Code、WebStorm 等

### GIS 环境

&ensp;&ensp;&ensp;&ensp;产品融合了多种 GIS 服务标准，提供大量的 GIS 服务组件。开发时，用户可直接使用第三方已发布的 GIS 服务资源，也可以自行构建 GIS 服务器环境，支持如下 MapGIS 服务器产品：

- 传统高性能 GIS 服务器平台：提供传统 GIS 相关的地图服务、要素服务、分析服务等。包括<a href="http://smaryun.com/dev/download_detail.html#/download689" targer="_blank">MapGIS IGServer 开发版</a>、<a href="http://www.smaryun.com/goods.php?id=2229" targer="_blank">MapGIS IGServer .NET 版</a>、<a href="http://www.smaryun.com/goods.php?id=3333" targer="_blank">MapGIS IGServer Java for Windows 版</a>、 <a href="http://smaryun.com/goods.php?id=3193" targer="_blank">MapGIS IGServer（九州）版</a>等版本。产品相关安装配置和操作使用手册，请参见<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id75" targer="_blank">司马云-开发世界-资源中心-服务器 GIS</a>；
- 大数据 GIS 分析服务器平台：<a href="http://www.smaryun.com/goods.php?id=2558" targer="_blank">MapGIS IGServer -X</a>，提供矢量、影像、文本等大数据分析服务，产品相关安装配置和操作使用手册，请参见<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id172" targer="_blank">司马云-开发世界-资源中心-云 GIS-MapGIS 大数据与云平台-MapGIS IGServer-X</a>；
- 智能 GIS 分析服务器平台：<a href="http://www.smaryun.com/goods.php?id=2558" targer="_blank">MapGIS IGServer -S</a>，提供智能 GIS 服务，产品相关安装配置和操作使用手册，请参见<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id187" targer="_blank">司马云-开发世界-资源中心-云 GIS-MapGIS 大数据与云平台-MapGIS IGServer-S</a>；

## 开发授权

&ensp;&ensp;&ensp;&ensp;您可以通过访问<a href="http://www.smaryun.com/" targer="_blank">司马云官方网站</a>获得开发者授权。提供免费云开发授权与硬 KEY 开发授权两种模式，开发者可结合实际应用需求选用。申请免费开发授权请前往<a href="http://smaryun.com/helper.php#/16" targer="_blank">帮助中心</a>

- 免费云开发授权需联网完成授权验证。
- 硬 KEY 开发授权，可离线完成授权验证。

## 开发 SDK

### 开发包

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（common） SDK，含 WebGIS 开发所需的开发库、API、示例、文档等资源，可访问<a href="http://webclient.smaryun.com/#/index" target="_blank">MapGIS Client for JavaScript 产品门户</a>在线体验，或<a a href="#download">下载资源</a>本地部署。

### 开发库

| **开发库**                    | **说明**                                                     |
| :---------------------------- | :----------------------------------------------------------- |
| @mapgis/webclient-common       | 包括基础对象、地图符号、服务库、图层、地图（场景）、地图（场景）视图、空间分析、草图编辑相关接口 |
| @mapgis/webclient-plot        | 包括行业标绘相关接口                                         |
| @mapgis/webclient-video-plugin | 包括视频视图、视频草图编辑等视频调绘相关接口                 |

  > 开发库分别提供ES5压缩版（webclient-common.min.js）与ES6压缩版（webclient-common-es6.min.js）两个版本。

### 开发 API

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript 为用户提供离在线 API（应用程序编程接口），开发者可以通过 API 查找学习 MapGIS 提供的实现功能的方法。

- <a href="http://webclient.smaryun.com/static/modules/common/api/common-mapgis/index.html" target="_blank">MapGIS Client for JavaScript（common） API</a>

### 开发示例

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（common）为用户提供了功能全面的接口示例与配套文档，支持离在线访问，源码与效果可共同展现，同时提供即时编辑与运行功能，可以帮助您进行高效开发。

- 在线使用：<a href="http://webclient.smaryun.com/#/example-gallery/common" target="_blank">MapGIS Client for JavaScript（common）示例</a>
- 离线使用：方式一，可在云开发世界下载<a href="http://www.smaryun.com/dev/download_detail.html#/download828" target="_blank">MapGIS Client for JavaScript 开发包</a>，解压后按说明步骤发布即可；方式二，可通过<a href="https://github.com/MapGIS/WebClient-JavaScript" targer="_blank">GitHub</a>、<a href="https://gitee.com/osmapgis/WebClient-JavaScript" targer="_blank">Gitee</a>获取产品源码，按说明文档编译运行。

## 模块说明

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（common）包括基础对象、地图符号、图层、地图（场景）、地图（场景）视图等与地图引擎无关的接口的定义，提功了 MapGIS 服务对接、空间分析、草图编辑、行业标绘等与地图引擎无关的功能。

### API 功能体系

<center>
  <img src="./static/modules/common/source/img/functions.png" alt="功能体系"/>
  <br>
<div class="notes">MapGIS Client for JavaScript（common）功能体系</div>
</center>
<br/>

### API 结构说明

<center>
  <img src="./static/modules/common/source/img/模块说明-webclient-common.jpeg" alt="开发接口结构" style="zoom:60%;"/>
  <br>
  <font color=gray size=1>注：结构图中蓝色字体为命名空间名，黑色字体为类名。第一级结构为模块说明及所属命名空间。</font>
  <br>
  <br>
  <div class="notes">MapGIS Client for JavaScript（common）API结构</div>
</center>

<br/>

- 几何模块：定义了几何的多种类型，包含点、线、区、多点、多线、多区、圆、矩形等常用基础几何结构；空间参考系;
- 符号模块：定义了地图渲染所需的符号；
- 要素模块：定义了要素、要素集；
- 渲染器模块：定义了图层的渲染器；
- 服务模块：提供 GIS 服务接口的封装，方便 GIS 服务接口的调用；
- 图层模块：定义了图层相关的 API，方便 GIS 服务的接入；
- 地图模块：提供图层管理功能；
- 视图模块：提供地图视图、场景视图接口的定义；
- 工具模块：包含草图编辑工具，提供点、线、区等几何的绘制和编辑功能，用于实现要素的采集和量算。
- 标绘模块：行业标绘模块，提供丰富的二三维行业标绘图形。
- video插件模块：视频GIS模块，提供视频视图、视频草图编辑等，实现视频调绘功能。

  > 具体请查看配套的 MapGIS Client for JavaScript（common） API。

## 版本说明

### <font color=red>V10.7.4.10</font>

1. 功能新增

- IGS要素图层支持传入FeatureServer中的查询参数
- 分段专题图支持归一化配置
- 新增IS场景图层，支持加载S3M数据

2. 功能优化

- 修复要素服务图层无法使用gdb地址的问题
- 优化矢量瓦片的子图层显隐逻辑


3. API接口变更
  <a href="http://webclient.smaryun.com/#/guideMulti/common/development_api_update" target="_blank">webclient-common 接口变更表</a>

4. 新增示例

- IGS要素图层 - 服务端过滤
- 栅格体元(M3D-M3D服务)
- 分段专题图-归一化
- IS场景服务


### <font color=red>V10.7.2.10</font>

1. 功能新增
- 矢量瓦片图层支持单独加载矢量瓦片服务中的子图层
- ArcGIS地图服务支持出一张图模式

2. 功能优化
- 优化投影变化功能支持自定义WKID投影

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/common/development_api_update" target="_blank">webclient-common 接口变更表</a>

4. 新增示例
- 场景图层-MapGIS多地形服务

### <font color=red>V10.7.0.10</font>

1. 功能新增
- 多引擎新增支持接入ArcGIS矢量瓦片服务
- 多引擎支持接入标准互联网瓦片服务
- 地图服务支持服务器端空间过滤显示
- 草图编辑支持手绘线、区，支持扩展三角形、椭圆类型
- 符号体系增加对三维符号和动态注记的支持

2. 功能优化
- 优化Echart图层效果，解决偏移问题

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/common/development_api_update" target="_blank">webclient-common 接口变更表</a>

4. 新增示例
- 网络瓦片图层-天地图
- 网络瓦片图层-百度瓦片(TMS裁图)
- 几何图层 - 高程模式设置
- 底图切换
- 图层列表
- 平滑过渡
- 草图编辑器
- 离散化
- 单值专题图-场景图层
- 单值专题图-模型缓存图层
- 分段专题图-场景图层
- 分段专题图-模型缓存图层
- 矢量瓦片专题图
- 自定义-网格专题
- 轨迹汇聚
- 热力图
- 迁移图
- 区数据渲染
- 点数据播放
- 方形网格密度
- 蜂窝形密度
- 点重叠播放
- 点微博数据
- 单一迁移轨迹
- 动态轨迹
- 交通轨迹
- 草图编辑应用
- 视频调绘
- 矢量瓦片专题图

### <font color=red>V10.6.8.10</font>

- 矢量瓦图层和栅格瓦片图层支持空间裁剪
- 增加支持 ArcGISVectorTileLayer 加载
- 增加Basemap地图底图功能
- 丰富完善草图编辑相关功能
- 符号体系增强，Render接口的增强

### <font color=red>V10.6.6.10</font>

- 新增 Symbol 模块、SketchEditor 模块
- 增加 GeometryEngine 类。
- 丰富完善 MapView 上接口
- 维护更新，修复若干 Bug

### <font color=red>V10.6.4.10</font>

- 首次发行，提供 Geometry 模块、Feature 模块、Service 模块、Layer 模块、Map 模块、View 模块

## 第三方依赖

- Turf：客户端空间分析库（<a href="https://turfjs.org/" target="_blank">https://turfjs.org/</a>）
- proj4：客户端地理坐标投影变换库（<a href="[http://proj4js.org/](http://proj4js.org/)" target="_blank">[http://proj4js.org/](http://proj4js.org/)</a>）

## webclient-common库对各个引擎支持情况
- <a href="http://webclient.smaryun.com/#/guideMulti/common/development_common_support" target="_blank">webclient-common库对各个引擎支持情况表</a>
