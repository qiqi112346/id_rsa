## MapGIS Client for JavaScript（Cesium）产品介绍

&ensp;&ensp;&ensp;&ensp;MapGIS 3DClient for WebGL 即 MapGIS Client for JavaScript (Cesium) ，是基于 WebGL 的轻量级三维 GIS 网络客户端开发平台，实现跨终端、跨浏览器、无插件的三维 GIS 应用开发。该产品提供全面的三维 GIS 应用开发能力，从地上到地下、从室外到室内、从宏观到微观、从静态到动态，为用户打造全空间一体化的跨平台多端应用体验。
<center>
  <img src="./static/modules/cesium/source/img/cesium-plugin依赖关系.png" alt="MapGIS Client for JavaScript (Cesium)各个库之间依赖关系" style="zoom:100%;" />
  <br>
  <div class="notes">MapGIS Client for JavaScript (Cesium)各个库之间依赖关系</div>
</center>

> MapGIS Client for JavaScript (Cesium) SDK 包含了三维 WebGIS 开发所需的开发库、API、示例等，结合<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id463" target="_blank">司马云-开发世界-资源中心</a>的配套开发资源，以及<a href="http://www.smaryun.com/cloudlisten/index.php" target="_blank">云听社区</a>、开源社区<a href="https://github.com/MapGIS/WebClient-JavaScript" target="_blank">GitHub</a> 、<a href="https://gitee.com/osmapgis/WebClient-JavaScript" target="_blank">Gitee</a>，助力开发者高效开发。

## <span id="download">产品下载</span>

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript 可从司马云-云开发世界下载正式发布的产品离线资源包，通过 NPM 包方式引入产品开发库：

- MapGIS 官方下载地址：<a href="http://smaryun.com/dev/download_detail.html#/download828" targer="_blank">http://smaryun.com/dev/download_detail.html#/download828</a>

- MapGIS 相关 NPM 包资源地址：<a href="https://www.npmjs.com/org/mapgis" targer="_blank">https://www.npmjs.com/org/mapgis</a>

## 产品特性

### 全空间的数据融合能力

- 提供地上地下、室内室外、空中地表全空间多源数据集成，从宏观到微观展示城市空间全要素。
- 支持各类栅格影像、矢量、切片、地形、手工建模数据、地下管线、倾斜摄影模型、BIM、激光点云、三维场数据、地质体数据模型、物感实时数据等全时空数据一体化高效渲染和多样化展示
- 对接开放的 M3D，全面、高效支持多类型、多格式的三维数据与功能
- 融合多种标准服务，包括 MapGIS、OGC、第三方在线地图服务、通用开源数据服务、异构 GIS 平台服务等标准地图服务、要素服务
- 融合 M3D 数据标准、3DTiles、kml、gltf、Geojson、czml 等三维数据服务

### 大体量数据承载及渲染

- 通过建立 LOD、多级缓存、数据高效压缩等多种优化措施，支持大数据量地形可视化，以及多层影像数据的叠加显示
- 通过多级 LOD 技术，视锥体裁剪、可视范围调度等技术支持海量三维模型数据的快速渲染
- 支持海量三维数据网络应用数据交换格式（M3D），对海量三维模型数据进行网格划分与分层组织，采用流式传输模式，实现多端一体的高效解析和渲染

### 强大的空间数据三维查询与分析能力

- 全空间数据操作交互，支持二三维要素与数据的多样化查询、编辑
- 全空间多维度量算，支持距离量算、面积量算、高度量算等功能
- 全空间一体化分析，支持地形分析、压平分析、动态剖切、阴影率、模型爆炸、可视域、洪水淹没、填挖方计算、剖面、控高等客户端三维分析功能模型压平、X 射线、动态剖切、阴影率分析、模型爆炸分析等三维专业分析，可视域分析、透明地表、地形开挖、洪水淹没分析、填挖方计算等地形分析功能
- 提供三维仿真模拟功能，支持时空演变、单体建筑物生长、城市生长、积水仿真等
- 提供 BIM 构件树、分层分户等 CIM 行业应用功能
- 提供支持视频调绘功能，支持基于视频流的调绘、量算
- 增强卷帘对比分析功能，支持纵向、横向常用的卷帘方式，支持矩形、小望远镜、多边形等自定义范围方式；增强地形剖切分析功能，支持纹理封边；增强视频投放功能，支持俯仰角、翻滚角、方位角、水平/竖直广角等参数设置

### 炫酷的大数据客户端可视化

- 通过开源技术（EchartGL、MapV、d3 等），提供蜂窝图、热力图、聚类、密度、时空立方体等多种客户端可视化表达方式
- 支持大体量的实时数据客户端绘制渲染，广泛应用于车联网、物联网，实现轨迹跟踪、轨迹渲染、实时视频投影等应用场景
- 增强粒子特效，实现逼真的雨雪雾、火焰、水面、动态草地等动态效果，支持用户定制复杂的粒子效果与运动轨迹
- 多样化三维特效，支持行人漫游、动态围墙、动态圆、雷达扫描圆等显示特效，以及泛光、景深、扫描线等后处理特效
- M3D 模型缓存图层新增支持自定义着色器，支持白模泛光特效的实现
- 支持基于 SVG 实现大数据专题图的无损缩放和动态交互

### 强大的三维客户端标绘能力

- 实现行业符号资源统一管理、动态标绘、态势推演
- 预置基础符号、点符号、线符号、区符号、算法符号等多种行业符号，支持基于 SVG 图片或算法方式扩展行业符号库
- 支持属性动画、生长动画、显隐动画、闪烁动画、路径动画以及比例动画等动画类型，支持动画编辑及脚本编辑
- 支持态势推演脚本列表化管理、脚本可视化制作、按时序模拟态势推演过程等态势推演相关功能
- 支持二三维联合编辑及漫游，提供几何编辑、颜色编辑以及属性编辑能力，打造个性化的行业图标
- 支持文字、广告牌、点、折线、矩形、多边形、圆形等基础二维图形标绘，文字覆盖物支持贴地图和站立两种类型
- 支持正方体、立体多边形、长方体、圆锥、圆柱、球体、圆/方管线、墙、动态河流等基础三维图形标绘
- 支持基于要素服务、注记图层、矢量瓦片等实现的动态注记显示；支持广告牌、贴地效果；支持避让；支持淡入淡出效果
- 支持 gltf 模型管理，如点模型、纹理模型等，预置 ground、lamp、traffic、tree 等模型，支持模型库扩展
- 提供灵活的交互方式，支持编辑几何、样式及属性等

## 环境参数

### 硬件配置

推荐配置

- CPU：酷睿 i5 10400F 及以上
- 内存：16G 及以上
- 显存：独立显卡，显存 6G 及以上（gtx 1060）
  > 场景的流畅度除了和硬件配置有关外，也和数据量的大小有关，请根据实际情况进行选择。

最低配置

- 需要浏览器支持 webgl。测试当前浏览器对 webgl 的支持情况：<a href="http://webglreport.com" targer="_blank">webglreport.com</a>

### 浏览器兼容

- 取决于浏览器对 webgl 的支持情况。可以在 <a href="http://caniuse.com/webgl" targer="_blank">caniuse.com</a>上，查看浏览器对 webgl 的支持情况

- 开启浏览器硬件加速模式。以Chrome浏览器为例，在浏览器地址栏输入 <a href="chrome://gpu/" targer="_blank">chrome://gpu/</a>，查看“Graphics Feature Status”中WebGL的状态是否为“Hardware accelerated”，若状态为“Software only, hardware acceleration unavailable”，则需要在“图形控制面板”中将当前浏览器的“首选图形处理器”设置为“高性能图形处理器”，然后在浏览器地址栏输入 <a href="chrome://settings/" targer="_blank">chrome://settings/</a>，在“系统”设置选项卡中开启硬件加速模式

### 开发环境

- 前后台混合型项目 IDE 推荐：Microsoft Visual Studio（2015 及以上）、MyEclipse（2019 及以上）等
- 纯前端项目 IDE 推荐：Visual Studio Code、WebStorm 等

### GIS 环境

&ensp;&ensp;&ensp;&ensp;产品融合了多种 GIS 服务标准，提供大量的 GIS 服务功能及纯前端 GIS 功能。开发时，用户按需选择使用已发布的 GIS 服务资源，或者构建 GIS 服务器环境，支持如下 MapGIS 服务器产品提供的各种服务：

- 传统高性能 GIS 服务器平台：提供传统 GIS 相关的地图服务、要素服务、分析服务等。包括<a href="http://smaryun.com/dev/download_detail.html#/download689" targer="_blank">MapGIS IGServer 开发版</a>、<a href="http://www.smaryun.com/goods.php?id=2229" targer="_blank">MapGIS IGServer .NET 版</a>、<a href="http://www.smaryun.com/goods.php?id=3333" targer="_blank">MapGIS IGServer Java for Windows 版</a>、 <a href="http://smaryun.com/goods.php?id=3193" targer="_blank">MapGIS IGServer（九州）版</a>等版本。产品相关安装配置和操作使用手册，请参见<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id75" targer="_blank">司马云-开发世界-资源中心-服务器 GIS</a>；
- 大数据 GIS 分析服务器平台：<a href="http://www.smaryun.com/goods.php?id=2558" targer="_blank">MapGIS IGServer -X</a>，提供矢量、影像、文本等大数据分析服务，产品相关安装配置和操作使用手册，请参见<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id172" targer="_blank">司马云-开发世界-资源中心-云 GIS-MapGIS 大数据与云平台-MapGIS IGServer-X</a>；
- 智能 GIS 分析服务器平台：<a href="http://www.smaryun.com/goods.php?id=2558" targer="_blank">MapGIS IGServer -S</a>，提供智能 GIS 服务，产品相关安装配置和操作使用手册，请参见<a href="http://www.smaryun.com/dev/service-space/resource?from=1#/node_id187" targer="_blank">司马云-开发世界-资源中心-云 GIS-MapGIS 大数据与云平台-MapGIS IGServer-S</a>。

## 开发授权

&ensp;&ensp;&ensp;&ensp;您可以通过访问<a href="http://www.smaryun.com/" targer="_blank">司马云官方网站</a>获得开发者授权，提供免费云开发授权与硬 KEY 开发授权两种模式，开发者可结合实际应用需求选用。申请免费开发授权请前往<a href="http://smaryun.com/helper.php#/16" targer="_blank">帮助中心</a>

- 免费云开发授权需联网完成授权验证。
- 硬 KEY 开发授权，可离线完成授权验证。

## 开发 SDK

### 开发包

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（Cesium） SDK，包含三维 WebGIS 开发所需的开发库、API、示例、文档等资源，可访问<a href="http://webclient.smaryun.com/#/index" target="_blank">MapGIS Client for JavaScript 产品门户</a>在线体验，或<a a href="#download">下载资源</a>本地部署。

### 开发库

| 开发库                          | 说明                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| @mapgis/webclient-cesium-plugin | Cesium地图引擎插件库，在插件层实现地图引擎和逻辑层的适配。<br />1、提供 Cesium 引擎对于二三维通用模块的实现。<br />2、提供 Cesium 引擎对控件、工具的实际渲染功能。<br />3、提供统一的视图对象操作地图。<br />3、提供其他适合 Cesium 插件层实现的功能。 |
| @mapgis/cesium                  | 地图引擎库，提供 Cesium 引擎基础功能                         |
| @mapgis/webclient-common        | 公用 JS 库。<br />1、提供基础对象接口的定义；<br />2、提供 IGS 等服务接口的封装；<br />3、提供地图（场景）管理接口的定义；<br />4、提供草图编辑、空间分析、行业标绘、视频调绘，以及其它与引擎无关的功能。 |

<br>

> 核心库分别提供ES5压缩版（webclient-cesium-plugin.min.js）与ES6压缩版（webclient-cesium-plugin-es6.min.js）两个版本。

### API 参考

- <a href="http://webclient.smaryun.com/static/modules/cesium/api/cesium/index.html" target="_blank">MapGIS Cesium 内核库 API</a>
- <a href="http://webclient.smaryun.com/static/modules/cesium/api/cesium-mapgis/index.html" target="_blank">MapGIS Cesium 插件库 API</a>

### 开发示例

- 在线体验：<a href="http://webclient.smaryun.com/#/example-gallery/cesium" target="_blank">MapGIS Client for JavaScript （Cesium）示例</a>
- 离线使用：
方式一，可在司马云-云开发世界下载<a href="http://www.smaryun.com/dev/download_detail.html#/download828" target="_blank">MapGIS Client for JavaScript 开发包</a>，解压后按说明步骤发布即可；
方式二，可通过<a href="https://github.com/MapGIS/WebClient-JavaScript" targer="_blank">GitHub</a>、<a href="https://gitee.com/osmapgis/WebClient-JavaScript" targer="_blank">Gitee</a>获取产品源码，按说明文档，自动编译、运行。

## 模块说明

&ensp;&ensp;&ensp;&ensp;MapGIS Client for JavaScript（Cesium）包括Cesium三维地图引擎包含Cesium及其插件库。Cesium提供 地图引擎基础功能。插件层实现地图引擎和逻辑层的适配，在插件层中会封装一个统一的视图对象，并提供三维扩展功能、混合开发功能。

### API 功能体系
<center>
  <img src="./static/modules/cesium/source/img/API功能体系-Cesium.jpeg" alt="功能体系"/>
  <br>
<div class="notes">MapGIS Client for JavaScript（cesium）功能体系</div>
</center>
<br/>

### API 结构说明

<center>
  <img src="./static/modules/cesium/source/img/API结构-webclient-cesium-plugin.jpeg" alt="webclient-cesium-plugin API结构" style="zoom:60%;" />
  <br>
  <font color=gray size=1>注：结构图中蓝色字体为命名空间名，黑色字体为类名。第一级结构为模块说明及所属命名空间。</font>
  <br>
  <br>
  <div class="notes">webclient-cesium-plugin API结构</div>
</center>
<center>
  <img src="./static/modules/cesium/source/img/API结构-webclient-cesium.jpeg" alt="webclient-cesium API结构" style="zoom:100%;" />
  <br>
  <div class="notes">webclient-cesium API结构</div>
</center>

<br/>

## 版本说明

### <font color=red>V10.7.4.10</font>

<font size=4>**webclient-cesium-plugin**</font>

1. 功能新增

- 三维动态注记丰富避让策略设置
- 支持S3M数据接入
- 支持M3D2.1格式的栅格体元数据接入、配色方案设置、时态切换、透明度设置
- 兼容Cesium1.22版本

2. 功能优化

- 优化绘制辅助剖切面(体)显隐状态控制
- 要素图层对接对gdbp数据的处理

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_plugin_api_update" target="_blank">webclient-cesium-plugin 接口变更表</a>

4. 新增示例
- BIM构件树(M3D-M3D服务)
- I3S图层
- 3DTiles1.1图层
- 场景夸张

<font size=4>**webclient-cesium**</font>

1. 功能新增

- Cesium引擎库由1.84升级至1.122
- 支持M3D2.1格式的栅格体元数据接入、配色方案设置、时态切换、透明度设置

2. 功能优化

- 卷帘分析增加对MaterialAppearance、EllipsoidSurfaceAppearance 类型图元的支持
- 优化M3D2.0的爆炸分析
- 优化绘制辅助剖切面(体)后的控制显隐的效果

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_api_update" target="_blank">webclient-cesium 接口变更表</a>


### <font color=red>V10.7.2.10</font>

<font size=4>**webclient-cesium-plugin**</font>

1. 功能新增
- 支持加载自定义裁图原点、自定义裁图方向的瓦片服务
- 实现多DEM服务聚合显示

2. 功能优化
- 优化坡向分析中的箭头效果

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_plugin_api_update" target="_blank">webclient-cesium-plugin 接口变更表</a>

4. 新增示例

<font size=4>**webclient-cesium**</font>

1. 功能新增
- 支持加载自定义裁图原点、自定义裁图方向的瓦片服务
- 可视域分析功能支持可视区域范围量化计算
- 支持图片标注显示层级高于可视域分析结果
- 实现多DEM服务聚合显示
- 动态剖切支持按属性筛被剖切的内容

2. 功能优化
- 可视域分析效果优化
- 优化多种场景下拾取世界坐标的结果
- 优化开启水面倒影时淹没分析的效果
- 优化动态剖切剖面的拾取效果
- 优化单体化专题图renderer的效果

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_api_update" target="_blank">webclient-cesium 接口变更表</a>


### <font color=red>V10.7.0.10</font>

<font size=4>**webclient-cesium-plugin**</font>

1. 功能新增
- 支持WebClient库与第三方Cesium库混合开发
- 三维Cesium插件上支持聚合专题图

2. 功能优化
- 提升Web端动态注记站立显示时性能Cesium引擎
- 优化阴影分析速度
- M3D2.0缓存加载流畅度优化

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_plugin_api_update" target="_blank">webclient-cesium-plugin 接口变更表</a>

4. 新增示例
- WMS-混合接口
- WMS-原生接口
- WMTS-混合接口
- WMTS-原生接口
- WFS(MapGIS)-混合接口
- WFS(MapGIS)-原生接口
- MapGIS地图服务-混合接口
- MapGIS地图服务-原生接口
- ArcGIS地图服务-混合接口
- ArcGIS地图服务-原生接口
- ArcGIS瓦片服务-混合接口
- ArcGIS瓦片服务-原生接口
- MapGIS要素服务-混合接口
- MapGIS要素服务-原生接口
- GeoJSON-混合接口
- GeoJson图层-原生接口
- 矢量瓦片(MapGIS)-混合接口
- 矢量瓦片(MapGIS)-原生接口
- 矢量瓦片(ArcGIS)-混合接口
- 矢量瓦片(ArcGIS)-原生接口
- IGS地形服务
- STK地形缓存-混合接口
- STK地形缓存-原生接口
- 倾斜摄影(3DTiles-IGS服务)
- BIM构件树(文件服务)
- 三维图层--混合接口
- 三维图层--原生接口
- 几何图层 - 混合接口
- 栅格体元数据
- 地图图片图层
- 影像图层高程模式设置
- 导航控件
- 标绘使用(场景)
- 分段-混合接口
- 聚合图
- 自定义着色器(动态泛光)
- 自定义着色器(要素高亮)
- 风场可视化
- 无人机图像拼接

<font size=4>**webclient-cesium**</font>

1. 功能新增
- 支持MeshOpt压缩模式
- 支持接入新版BIM模型缓存服务
- 支持IGS M3DServer新特性
- 支持二维图件与模型融合展示
- 支持同时进行多个可视域分析
- 全球风场数据可视化
- 实现基于无人机场景下的全景图形的拼接与展示
- 支持接入M3D2.1模型缓存服务
- 行业标绘增加对于贴场景高程模式的支持

2. 功能优化
- 优化几何体裁剪效果，支持裁剪区域反转，支持多边形几何体裁剪
- 优化专题图渲染效果，提升对Cesium的样式兼容性

3. API接口变更
<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_api_update" target="_blank">webclient-cesium 接口变更表</a>

### <font color=red>V10.6.8.10</font>

1. 功能新增

- 地质体模型夸张显示（模型局部沿地心方向拉伸）
- 模型缓存增加线框显示和轮廓显示样式
- 支持在地质体模型中模拟隧道开挖
- 模型压平增加根据要素ID压平的功能。
- 支持通过二次开发扩展的方式实现三维钻孔渲染、多视图漫游功能
- Billbord支持播放动图（git图或图片序列）

2. 功能优化

- 支持在对数缓冲下进行可视域分析
- 漫游功能优化


### <font color=red>V10.6.6.10</font>

1. 功能新增

- 新增三维场景碰撞检测功能
- 新增键盘漫游功能
- 新增自定义坐标系（如高斯）数据和服务(含矢量瓦片)的接入功能
- 新增全局的请求拦截器
- 新增水面倒影特效
- 新增地表（半）透明时，影像图层透明度独立控制功能

2. 功能优化

- 卷帘增加对以下图层类型的支持：Cesium3DTilesModelCahceLayer、IGSFeatureLayer、WFSLayer、GeoJsonLayer、KML、KMZ、CZML
- 模型编辑接口增加对 M3D、3DTiles 服务类型数据的支持
- 洪水淹没分析支持水面倒影
- 动态注记增加对含上下标、分式的三维标注的支持
- 视频投放功能支持投放到指定的场景元素上

### <font color=red>V10.6.4.10</font>

1. 功能新增

- 新增支持支持视频调绘功能，支持基于视频流的调绘、量算
- M3D 模型缓存图层新增支持自定义着色器，支持白模泛光特效的实现
- 新增支持动态河流覆盖物类型
- 新增模型沿地形漫游
- 新增基于服务端的地图要素查询，支持空间查询、属性查询；客户端查询新增支持根据 OID 显隐图元（M3D 2.0），设置图元透明度（M3D）
- 新增支持地图图片图层显示

2. 功能优化

- 卷帘对比分析功能优化，支持纵向、横向常用的卷帘方式，支持矩形、小望远镜、多边形等自定义范围方式；
- 地形剖切分析功能优化，支持纹理封边；
- 视频投放功能优化，支持俯仰角、翻滚角、方位角、水平/竖直广角等参数设置
- 文字覆盖物显示效果优化，支持贴地图和站立两种类型
- 动态注记显示效果优化，支持在前端实时绘制矢量瓦片点要素动态注记，动态注记支持广告牌、贴地效果；支持避让；支持淡入淡出效果
- 优化客户端可视化效果，包括专题图表达、基于 EChart 的可视化、基于 MapV 的可视化显示效果

### <font color=red>V10.6.2.10</font>

1. 功能新增

- 新增支持前端符号的二三维一体化管理
- 新增行业标绘功能：支持基础、军事两类符号的交互式编辑，支持属性、生长、显隐、闪烁、路径、比例等动画类型，支持态势编辑、管理、推演等功能
- 新增基于 GeoJson、要素图层创建单值、分段等前端三维专题图功能
- 新增任意面剖切
- 新增流动线、光晕等纹理效果
- 新增动态剖切封边功能
- 新增动态注记功能
- 新增模型绘存图层本地绘存功能
- 新增 M3D 模型位置和姿态编辑接口和工具
- 新增 M3D 模型按属性爆炸功能
- 新增地质体网格模型支持按空间范围进行筛选显示功能
- 新增 M3D 模型图层卷帘功能
- 新增角度测量工具
- 新增地形的网格化显示
- 动态剖切支持凹多边形折线
- 支持模型凹凸纹理贴图和显示
- 标注图层支持更丰富的注记样式：新增阴影、角度、空心、文字间距、文字轮廓、文字背景等 13 种样式

2. 功能优化

- 路径漫游支持不同路段设置不同的速度
- M3DServer、SceneServer 服务图层适配 M3D1.0 缓存数据
- cesium 量算工具，量算结果单位支持自定义
- M3D 效率优化

### <font color=red>V10.6.0.10</font>

1. 功能新增

- 新增瓦片错级机制
- 长度测量，增加避让处理、单位转换等功能，支持样式配置
- 注记图层增加控制可见性、显示文本长度等参数
- 动画漫游新增获取模型的方法、设定点不同速度漫游场景等功能

2. 功能优化

- 提升 MapGIS 矢量图层能力，提升 filter 查询、多区绘制、系统库设置等能力，支持设置线矢量图层的高度
- 解决动画漫游设定速度和时间数组中方向向量计算问题
- 优化地形图层、注记图层等图层定位、及显示显示
- 优化测量，包括三角测量、贴地测量等功能
- 优化阴影分析、动画漫游等分析功能
- 优化多个接口，新增多个属性

### <font color=red>V10.5.6.10</font>

1. 功能新增

- 注记图层增加最大显示文本长度参数
- 注记图层增加根据相机远近设置可见性的控制参数
- 增加 OGC WFS 加载接口
- 新增动态圆波纹后处理特效
- 新增雷达扫描后处理特效
- 模型图层加载新增支持跳转动画

2. 功能优化

- 解决地形剖切结果 echart 对象无法修改大小
- 修改地形压平后为避免影响默认相机加载地形瓦片

### <font color=red>V10.5.4.10</font>

1. 功能新增

- 新增 MapGIS 注记服务图层
- 添加服务数据接口新增是否开启缓存参数
- 新增支持 webMercator 坐标系 MapGIS 地图文档服务
- 新增地形剖切功能
- 新增支持 beijing54 椭球类型
- 新增支持基于 indexDB 实现 M3D 2.0 数据的前端属性存储和查询功能
- 新增支持 M3D 数据属性信息前端挂接
- 新增支持 M3D 数据 OID 拾取

2. 功能优化

- 优化 DrawElement 增加销毁对象方法
- 优化使用缓存后，数据稍大交互后无法正确加载数据
- 解决坡度坡向分析时，渲染结果不消失问题
- 优化数据加载性能
- 解决 DrawElement 对象造成鼠标移动卡顿问题
- 解决样式存在冲突的问题，统一加前缀
- popup 的 visible 参数不支持 v-model
- 解决加载 mapgis 三维地图文档服务时需要支持图层过滤

3. 开发资源丰富

- 新增多个三维示例

### <font color=red>V10.5.2.10</font>

1. 功能新增

- 实现模型压平功能,支持任意凸多边形的压平
- 优化粒子特效：优化雨雪雾粒子效果，提升真实度；新增火焰、喷泉粒子特效、以及烟雾粒子特效
- 提供解压 M3D 压缩数据流的功能，客户端支持将压缩的流进行高效解压，并渲染

2. 性能优化

- 海量倾斜摄影数据缓存结构优化策略升级，提高网络传输效率以及前端渲染效率
- 加载渲染亿级 Las 格式点云数据，帧率在 15 帧以上，交互流畅；
- 加载渲染亿级地质网格剖分结果数据，帧率在 15 帧以上，交互流畅；
- 加载渲染千万级三角网单个地质体数据，帧率在 15 帧以上，交互流畅；
- 加载渲染 500 平方公里以上倾斜模型，帧率在 15 帧以上，交互流畅；

3. 站点维护

- 示例说明文档美化

### <font color=red>V10.5.0.10</font>

1. 全面整合了 Cesium 等脚本库，代码模块化，采用最新的 JavaScript ES6 标准；
2. 提供 Cesium 开发库、示例、API，支持二三维数据可视化（含 M3D、OGC、MapGIS 地图服务、第三方地图服务等）、图形绘制、量算、模型漫游、三维查询与分析、场景特效，以及三维场景下的大数据可视化与分析等功能；
3. Cesium 示例全面优化，提供配套示例说明文档与 API；
4. 新增集成 Echarts、MapV 可视化库，支持在 Web 三维模式下实现大数据可视化、大数据分析功能；
5. 新增集成 Turf.js 客户端空间分析库，提供 Web 三维客户端空间计算能力。

## 第三方依赖

- Cesium：用于显示三维地球和地图的开源 JavaScript 库，基于 WebGL 的地图引擎（<a href="https://cesium.com/platform/cesiumjs/" target="_blank">https://cesium.com/platform/cesiumjs/</a>）

- ECharts：基于 JavaScript 的开源可视化图表库（<a href="https://echarts.apache.org/zh/index.html" target="_blank">https://echarts.apache.org/zh/index.html</a>）

- MapV：地理信息可视化开源库（<a href="https://mapv.baidu.com/" target="_blank">https://mapv.baidu.com/</a>）

- Turf：客户端空间分析开源库（<a href="https://turfjs.org/" target="_blank">https://turfjs.org/</a>）

- D3：基于 Web 标准的 JavaScript 图形可视化库（<a href="https://d3js.org/" target="_blank">https://d3js.org/</a>）
