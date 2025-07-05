## MapGIS Client for JavaScript（Leaflet）产品介绍

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（Leaflet）是一套基于 Leaflet 的云 GIS 网络客户端开发平台，无缝对接 MapGIS 云存储、云 GIS 服务器与云应用产品，能有效集成云端的地图、服务与资源，提供全面的 WebGIS 开发应用能力，支持高效地图可视化与分析应用功能，增强了大数据、实时流数据的高效可视化表达和分析功能。该套 SDK 中集成了 Leaflet 原生接口和 MapGIS 扩展功能接口，覆盖地图显示、数据管理、查询、编辑、统计、分析、专题图、可视化、标绘等全 WebGIS 功能，极大的丰富了 SDK 的功能和应用场景，可帮助您快速构建 WebGIS 应用。
<center>
  <img src="./static/modules/leaflet/source/img/leaflet-plugin依赖关系.png" alt="MapGIS Client for JavaScript（Leaflet）各个库之间依赖关系" style="zoom:100%;" />
  <br>
  <div class="notes">MapGIS Client for JavaScript（Leaflet）各个库之间依赖关系</div>
</center>

> MapGIS Client for JavaScript (Leaflet) SDK 包含了 WebGIS 开发所需的开发库、API、示例等，结合<a href="http://www.smaryun.com/dev/resource_center.html#/type27/tag10/page1" target="_blank">司马云开发世界资源中心</a>的配套开发资源，以及<a href="http://www.smaryun.com/cloudlisten/index.php" target="_blank">云听社区</a>、开源社区<a href="https://github.com/MapGIS/WebClient-JavaScript" target="_blank">GitHub</a> 、<a href="https://gitee.com/osmapgis/WebClient-JavaScript" target="_blank">Gitee</a>，助力开发者高效开发。

### Leaflet

&ensp;&ensp;&ensp;&ensp;Leaflet 是一个为建设移动设备友好的互动地图而开发的现代的、开源的 JavaScript 库，目前发展为主流的开源 GIS 前端开发库之一。它是由 VladimirAgafonkin 带领一个专业贡献者团队开发，虽然代码仅有 31KB，但它具有开发人员开发在线地图的大部分功能。Leaflet 设计坚持简便、高性能和可用性好的思想，在所有主要桌面和移动平台能高效运作，在现代浏览器上会利用 HTML5 和 CSS3 的优势，同时也支持旧的浏览器访问。基于插件开发理念，支持插件扩展，有一个友好、易于使用的 API 文档和一个简单的、可读的源代码。在 GitHub 平台上已发布了海量的 Leaflet 插件，可极大提升开发者的开发效率，节约开发成本。

> 详情请参考<a href="https://leafletjs.com/" target="_blank">Leaflet 官网</a>地址

### 主流地图库特点

- Leaflet：一款比较成熟的轻量级开源二维地图库，小而精悍，体验好，实践多、社区活跃、插件非常丰富，Mapbox 早期的地图库就是基于 Leaflet 开发；
- MapboxGL：基于 WebGL 独立渲染的开源二维地图库，其推出的矢量瓦片可视化效果和性能都很出众，标准被业内认可；
- OpenLayers：一套比较老牌和体系比较成熟的开源二维地图库，功能丰富且稳定，业内广泛使用，浏览器兼容好（兼容 IE6 及以上版本浏览器）；

## <span id="download">产品下载</span>

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript 可从司马云-云开发世界下载正式发布的产品离线资源包，通过 NPM 包方式引入产品开发库：

- MapGIS 官方下载地址：<a href="http://smaryun.com/dev/download_detail.html#/download828" targer="_blank">http://smaryun.com/dev/download_detail.html#/download828</a>

- MapGIS 相关 NPM 包资源地址：<a href="https://www.npmjs.com/org/mapgis" targer="_blank">https://www.npmjs.com/org/mapgis</a>

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
- 智能 GIS 分析服务器平台：<a href="http://www.smaryun.com/goods.php?id=2558" targer="_blank">MapGIS IGServer -S</a>，提供智能 GIS 服务，产品相关安装配置和操作使用手册，请参见<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id187" targer="_blank">司马云-开发世界-资源中心-云 GIS-MapGIS 大数据与云平台-MapGIS IGServer-S</a>。

## 开发授权

&ensp;&ensp;&ensp;&ensp;您可以通过访问<a href="http://www.smaryun.com/" targer="_blank">司马云官方网站</a>获得开发者授权，提供免费云开发授权与硬 KEY 开发授权两种模式，开发者可结合实际应用需求选用。申请免费开发授权请前往<a href="http://smaryun.com/helper.php#/16" targer="_blank">帮助中心</a>

- 免费云开发授权需联网完成授权验证。
- 硬 KEY 开发授权，可离线完成授权验证。

## 开发 SDK

### 开发包

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（Leaflet） SDK，含 WebGIS 开发所需的开发库、API、示例、文档等资源，可访问<a href="http://webclient.smaryun.com/#/index" target="_blank">MapGIS Client for JavaScript 产品门户</a>在线体验，或<a a href="#download">下载资源</a>本地部署。

### 开发库

| 开发库                           | 说明                                                         |
| :------------------------------- | :----------------------------------------------------------- |
| @mapgis/webclient-leaflet-plugin | Leaflet 插件库，在插件层实现地图引擎和逻辑层的适配。<br/>1、提供Leaflet 引擎对于二三维通用模块的实现。<br/>2、提供Leaflet 引擎对控件、工具的实际渲染功能。<br/>3、提供统一的视图对象操作地图。<br/>4、提供其他适合Leaflet 插件层实现的功能。 |
| @mapgis/leaflet                  | 地图引擎库，提供 leaflet 引擎基础功能                        |
| @mapgis/webclient-common         | 公用 JS 库。<br/>1、提供基础对象接口的定义。<br/>2、提供 IGS 等服务接口的封装。<br/>3、提供地图（场景）管理接口的定义。<br/>4、提供草图编辑、空间分析、专题图、行业标绘、视频调绘，以及其它与引擎无关的功能。 |

> 核心库分别提供ES5压缩版（webclient-leaflet-plugin.min.js）与ES6压缩版（webclient-leaflet-plugin-es6.js）两个版本。

### 开发 API

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript 为用户提供离在线 API（应用程序编程接口），开发者可以通过 API 查找学习 MapGIS 提供的实现功能的方法。

- <a href="http://webclient.smaryun.com/static/modules/leaflet/api/leaflet-mapgis/index.html" target="_blank">MapGIS Client for JavaScript（Leaflet） API</a>
- <a href="https://leafletjs.com/reference-1.7.1.html" target="_blank">Leaflet 原生 API</a>

### 开发示例

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（Leaflet）为用户提供了功能全面的接口示例与配套文档，支持离在线访问，源码与效果可共同展现，同时提供即时编辑与运行功能，可以帮助您进行高效开发。

- 在线使用：<a href="http://webclient.smaryun.com/#/example-gallery/leaflet#internet" target="_blank">MapGIS Client for JavaScript （Leaflet）示例</a>
- 离线使用：
方式一，可在云开发世界下载<a href="http://www.smaryun.com/dev/download_detail.html#/download828" target="_blank">MapGIS Client for JavaScript 开发包</a>，解压后按说明步骤发布即可；
方式二，可通过<a href="https://github.com/MapGIS/WebClient-JavaScript" targer="_blank">GitHub</a>、<a href="https://gitee.com/osmapgis/WebClient-JavaScript" targer="_blank">Gitee</a>获取产品源码，按说明文档编译运行。

## 模块说明

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（Leaflet）包括Leaflet二维地图引擎包含Leaflet及其插件库。Leaflet提供 地图引擎基础功能以及扩展功能。插件层实现地图引擎和逻辑层的适配，在插件层中会封装一个统一的视图对象。

### API 功能体系
<center>
  <img src="./static/modules/leaflet/source/img/API功能体系-Leaflet.jpeg" alt="MapGIS Client for JavaScript（Leaflet）功能体系"  style="zoom:60%;"/>
  <br>
<div class="notes">MapGIS Client for JavaScript（Leaflet）功能体系</div>
</center>
<br/>

### API 结构说明

<center>
  <img src="./static/modules/leaflet/source/img/API结构-webclient-leaflet-plugin.jpeg" alt="webclient-leaflet-plugin API结构" style="zoom:60%;" />
  <br>  
  <font color=gray size=1>注：结构图中蓝色字体为命名空间名，黑色字体为类名。第一级结构为模块说明及所属命名空间。</font>
  <br>
  <br>
  <div class="notes">webclient-leaflet-plugin API结构</div>
</center>
<center>
  <img src="./static/modules/leaflet/source/img/API结构-webclient-leaflet.jpeg" alt="webclient-leaflet API结构" style="zoom:60%;" />
  <br>
  <div class="notes">webclient-leaflet API结构</div>
</center>

<br/>

## 版本说明

### <font color=red>V10.7.4.10</font>

<font size=4>**webclient-leaflet-plugin**</font>

1. 功能新增

- 矢量瓦片支持设置请求头

2. 功能优化

- 优化聚合效果
- 修复文字注记转换问题

3. API接口变更
- 此版本无变更

<font size=4>**webclient-leaflet**</font>

- 此版本无更新


### <font color=red>V10.7.2.10</font>

<font size=4>**webclient-leaflet-plugin**</font>

1. 功能新增
- 矢量瓦片支持多区、带洞区裁剪
- ArcGIS地图支持出一张图模式

2. 功能优化
- 此版本无更新

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/leaflet/development_leaflet_plugin_api_update" target="_blank">webclient-leaflet-plugin 接口变更表</a>

4. 新增示例
- WMS-混合接口
- WMTS-混合接口
- WFS-混合接口
- MapGIS地图图片图层-混合开发
- ArcGIS地图图片图层-混合开发
- MapGIS瓦片图层-混合开发
- ArcGIS瓦片图层-混合开发
- 网络瓦片图层-混合开发
- MapGIS要素图层-混合开发
- GeoJSON图层-混合开发
- MapGIS矢量瓦片-混合开发
- ArcGIS矢量瓦片-混合开发
- 几何图层-混合开发

<font size=4>**webclient-leaflet**</font>

1. 功能优化
- 优化TileLayer加载效果


### <font color=red>V10.7.0.10</font>

<font size=4>**webclient-leaflet-plugin**</font>

1. 功能新增
- 二维Leaflet插件支持相同空间参考系支持不同裁图方式瓦片图层的叠加显示
- 二维Leaflet插件增加地图旋转功能
- 二维Leaflet插件支持动态服务图层支持多区、带洞区裁剪

2. 功能优化
- 二维Leaflet插件符号体系优化:
增加文字光晕效果
二维虚线样式优化
- 地图视图Leaflet插件MapImageLayer平滑更新

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/leaflet/development_leaflet_plugin_api_update" target="_blank">webclient-leaflet-plugin 接口变更表</a>

### <font color=red>V10.6.8.10</font>

- SpatialReference支持自定义坐标系（深汕坐标系）
- 二维地图增加地图旋转功能
- 示例数据及二维示例丰富、更新、完善

### <font color=red>V10.6.6.10</font>

1. 功能新增

- 新增自定义坐标系（如高斯）数据和服务(含矢量瓦片)的接入功能
- 新增全局的请求拦截器

2. 功能优化

- 完善和增强前端符号体系在 leaflet 引擎上的实现。

### <font color=red>V10.6.4.10</font>

- 基础对象接口优化升级，为不同地图引擎提供统一的数据模型支持，便于功能在不同引擎上的快速移植。
- 增强 MapGIS 高性能 GIS 服务接入能力，全面适配 MapGIS IGServer 2.0 服务接口。
- 新增支持 EPSG:4326 空间参考系矢量瓦片接入。
- 基础功能丰富与完善：地图图片图层支持根据视图全图范围取图；新增绘制工具和地图出图工具等。
- 增强客户端专题图功能，矢量瓦片图层、要素图层、WFS 图层、GeoJson 图层新增支持客户端专题图；地图图片图层新增支持服务端专题图；并统一不同地图引擎专题图接口。
- 示例完善：新增 MapGIS 瓦片/要素服务、ArcGIS 瓦片/地图服务、GeoJson 图层、矢量瓦片图层、图形图层、长度测量等示例，并优化若干示例。

### <font color=red>V10.6.2.10</font>

- 维护更新，修复若干 Bug

### <font color=red>V10.6.0.10</font>

- 维护更新，修复若干 Bug

### <font color=red>V10.5.6.10</font>

- 维护更新，修复若干 Bug

### <font color=red>V10.5.4.10</font>

- 维护更新，修复若干 Bug

### <font color=red>V10.5.2.10</font>

1. 功能新增

- Leaflet 示例全面优化，提供配套示例说明文档与 API；
- 新增支持 ElasticSearch 的分布式大数据搜索与分析能力，可实现热力分析、聚类分析等功能。

2. 性能优化-无

3. 站点维护

- 示例说明文档美化

### <font color=red>V10.5.0.10</font>

1. 全面整合了 Leaflet 等脚本库，代码模块化，采用最新的 JavaScript ES6 标准；
2. 提供 Leaflet 开发库、示例、API，支持基于 OpenLayers5 的二维数据可视化（含 OGC、MapGIS 地图服务、第三方地图服务等）、量算、查询编辑、空间分析、专题图、矢量瓦片，以及大数据可视化与分析等功能；
3. 新增集成 Echarts、MapV 可视化库，支持在 Web 三维模式下实现大数据可视化、大数据分析功能；
4. 新增集成 Turf.js 客户端空间分析库，提供客户端空间计算能力，支持实现在客户端层的空间分析、拓扑分析、空间关系计算等功能。

## 第三方依赖

&ensp;&ensp;&ensp;&ensp;

- Leaflet：领先的用于移动友好交互式地图的开源 JavaScript 库，目前主流地图可视化引擎之一（<a href="https://leafletjs.com/" target="_blank">https://leafletjs.com/</a>）

- ElasticSearch：分布式搜索与分析引擎（<a href="https://www.elastic.co/cn/" target="_blank">https://www.elastic.co/cn/</a>）

- ECharts：基于 JavaScript 的开源可视化图表库（<a href="https://echarts.apache.org/zh/index.html" target="_blank">https://echarts.apache.org/zh/index.html</a>）

- MapV：地理信息可视化开源库（<a href="https://mapv.baidu.com/" target="_blank">https://mapv.baidu.com/</a>）

- Turf：客户端空间分析开源库（<a href="https://turfjs.org/" target="_blank">https://turfjs.org/</a>）

- D3：基于 Web 标准的 JavaScript 图形可视化库（<a href="https://d3js.org/" target="_blank">https://d3js.org/</a>）
