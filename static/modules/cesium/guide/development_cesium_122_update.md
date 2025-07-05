# 一、变更目的

webclient-cesium-plugin及webclient-cesium 10.7.4.10，将依赖的开源Cesium库由1.84升级为1.122，天然支持开源Cesium 1.122诸多新特性（如支持3TIle1.1）。webclient-cesium-plugin对开源Cesium 1.84、Cesium1.122皆可兼容，支持与开源Cesium库、第三方Cesium库进行混合开发。

<br />

# 二、变更 Q&A

- **10.7.2.10 升级到 10.7.4.10 做了哪些变更？**
  
  - Cesium内核库的变更：webclient-cesium 库，依赖的开源Cesium库由 1.84升级到1.122。
  - 功能所属库的变更：请参考本文档《三、功能所属库变更对照表》
  - 接口变更表：
  <a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_plugin_api_update" target="_blank">《**webclient-cesium-plugin 类接口变更表**》 </a><font color=gray size=2>（参考章节“V10.7.4.10 接口变更表”）</font>
  <a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_api_update" target="_blank">《**webclient-cesium 类接口变更表**》 </a><font color=gray size=2>（参考章节“V10.7.4.10 接口变更表”）</font>
  
- **10.7.4.10 版本如何引入库、配置资源路径?**
  
  - webclient-cesium 库的引入方式：
    - ES5的引用方式：
      ```html
      <script src="http://webclient.smaryun.com/static/libs/cdn/cesium/Cesium.js"></script>
      <link rel="stylesheet" href="http://webclient.smaryun.com/static/libs/cdn/cesium/Widgets/widgets.css" />
      ```
  
    - ES6的引用方式（新增）：
      ```javascript
      import Cesium from '@mapgis/cesium'
      ```
  
  - webclient-cesium-plugin 库的引入方式：
  
    - ES5的引用方式：
  
      ```html
      <script src="http://webclient.smaryun.com/static/libs/cdn/zondyclient/webclient-cesium-plugin.min.js"></script>
      ```
      
    - ES6的引用方式（新增）：
    
      ```javascript
      import {xxx} from '@mapgis/webclient-cesium-plugin'
      ```
    
  - webclient-cesium-plugin资源路径的引用及配置方式：webclient-cesium-plugin的资源统一放置在webclien-cesium-plugin-resource文件夹下
  
    - 资源导入：从@mapgis/webclient-cesium-plugin包中获取webclien-cesium-plugin-resource文件夹资源，将其导入到项目目录中。
    - 设置MAPGIS_BASE_URL时机：引入/导入webclient-cesium-plugin.min.js之前设置MAPGIS_BASE_URL的值。
    - 配置方法：
              将webclien-cesium-plugin-resource所在项目目录路径配置给window上的全局变量MAPGIS_BASE_URL。
              ES5项目中，可设置自定义的MAPGIS基地址 MAPGIS_BASE_URL，如果不做设置，则默认取webclient-cesium-plugin.min.js文件所在的路径作为MAPGIS基地址 MAPGIS_BASE_URL的值。
              ES6项目中，必需设置MAPGIS_BASE_URL，否则cesium-plugin无法使用相关资源。例如vue项目中，推荐在src/main.js中设置window.MAPGIS_BASE_URL = “xxx”。
    
  
- **10.7.4.10 版本接口访问形式是怎样的?**
  
  - ES5 方式：“zondy.模块名.接口名” 的方式引入对象。例如 
    ```javascript
    zondy.cesium.MapGISMapServerImageryProvider
    ```
  - ES6 方式：使用import导入的方式引入对象。例如 
    ```javascript
    import { MapGISMapServerImageryProvider } from '@mapgis/webclient-cesium-plugin'
    ```
  
-  **如何查看当前使用的 API 版本号？**
  
  - 10.7.4.10 版本
    
    - 查看 webclient-cesium-plugin 版本号
      - 浏览器调试界面查看方式：在浏览器调试界面的 Console 中输入：zondy.cesium.VERSION
      - npm包中查看方式：在 webclient-cesium-plugin 的 package.json 中查看版本号
    - 查看 webclient-cesium 版本号
      - 浏览器调试界面查看方式：在浏览器调试界面的 Console 中输入：Cesium.MAPGIS_VERSION
      - npm包中查看方式：在 webclient-cesium 的 package.json 中查看版本号
    - 查看  webclient-cesium依赖的开源Cesium版本号
      - 浏览器调试界面查看方式：在浏览器调试界面的 Console 中输入：Cesium.VERSION
    
    
    
  - 10.7.2.10 版本
    
    - 查看 webclient-cesium-plugin 版本号
      - 浏览器调试界面查看方式：在浏览器调试界面的 Console 中输入：zondy.cesium.VERSION
      - npm包中查看方式：在 webclient-cesium-plugin 的 package.json 中查看版本号
    - 查看 webclient-cesium 版本号
      - 浏览器调试界面查看方式：在浏览器调试界面的 Console 中输入：Cesium.VERSION
      - npm包中查看方式：在 webclient-cesium 的 package.json 中查看版本号
    
  - 10.6.4.10 至 10.7.0.10版本
    
    - 查看 webclient-cesium-plugin 版本号
      - 浏览器调试界面查看方式：在浏览器调试界面的 Console 中输入：zondy.PluginVersion
      - npm包中查看方式：在 webclient-cesium-plugin 的 package.json 中查看版本号
    - 查看 webclient-cesium 版本号
      - 浏览器调试界面查看方式：在浏览器调试界面的 Console 中输入：Cesium.VERSION
      - npm包中查看方式：在 webclient-cesium 的 package.json 中查看版本号
    
  - 10.6.2.10 及以前版本
    
    - 查看 webclient-cesium-plugin 版本号
      - 仅可在 npm 的 package.json 中查询到版本号
    - 查看 Cesium 的版本号
      - 在浏览器调试界面的 Console 中输入：Cesium.VERSION
  
- **升级到10.7.4.10的推荐做法？**
  
  - 第一步：引入webclient-cesium-plugin以及webclient-cesium（或开源cesium库、第三方cesium库）

    &ensp;&ensp;&ensp;&ensp;确保项目中已引入webclient-cesium-plugin以及webclient-cesium（或开源cesium库、第三方cesium库）。引入方式请参考上述问题“**10.7.4.10 的引用方式是否发生变化?**”。
    
  - 第二步：升级命名空间变更的相关接口

    &ensp;&ensp;&ensp;&ensp;根据<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_plugin_api_update" target="_blank">《**所属命名空间（所属库）发生变化的接口列表**》 </a><font color=gray size=2>（参考章节“V10.7.4.10 接口变更表 - 所属命名空间（所属库）变更的接口列表”）</font>中列举的接口名称，逐条处理，在项目以接口名为关键词搜索，将用该方法的代码，将“升级前所属命名空间.接口名”统一替换成“使用升级后所属命名空间.接口名"的形式（如果是ES6 impor口，则统一替换成“接口名”）。例如：
    
    ​&ensp;&ensp;&ensp;&ensp;《所属命名空间（所属库）发生变化的接口列表》中的接口“WaterReflection”，可在项目中全文搜索“Cesium.WaterReflection”关键词，统一替换成“zondy.cesium.WaterReflection”（如果是ES6 import方式引入WaterReflection方法，则统一替换成“WaterReflection”）。
    
  - 第三步：升级API方法变更的相关接口
  
    &ensp;&ensp;&ensp;&ensp;根据<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_plugin_api_update" target="_blank">《**webclient-cesium-plugin 类接口变更表**》 </a><font color=gray size=2>（参考章节“V10.7.4.10 接口变更表 - 类接口变更表”）</font>以及<a href="http://webclient.smaryun.com/#/guideMulti/cesium/development_cesium_api_update" target="_blank">《**webclient-cesium 类接口变更表**》 </a><font color=gray size=2>（参考章节“V10.7.4.10 接口变更表 - 类接口变更表”）</font>的列举的变更记录，逐条处理，在项目已“类名”或“成员名”为关键词搜索：如果是“类变更类型”为“废弃”或“计划废弃”，则在项目中直接以“类名”作为关键词搜索，将于该类相关逻辑，按照“变更内容说明”中的指导做更改；如果是“类变更类型”为“更新”，且“成员变成类型”不为空，则说明，该类中有成员方法/属性/枚举/常量/事件发生变化，在项目中直接以“成员名”作为关键词搜索，将使用该类的成员相关逻辑，按照“变更内容说明”中的指导做更改。
  
  - 第四步：升级开源CesiumAPI方法变更的相关接口
  
    ​&ensp;&ensp;&ensp;&ensp;该类接口变动较多，建议在项目升级过程中调试代码时依次排查。如果调试时遇到无法调通的方法时，首先在<a href="http://webclient.smaryun.com/static/modules/cesium/guide/开源Cesium接口变更.xlsx" target="_blank">《**开源Cesium API接口变更表**》</a><font color=gray size=2>（点击下载）</font>中查找，是否是开源Cesium接口变更导致的，并进行新接口的适配。
  
- **MapGIS 3DClient for WebGL 产品版本对应的开源Cesium库版本**

| MapGIS 3DClient for WebGL版本 | **10.5.4.10 及以下** | **10.5.6.10至10.7.2.10** | **10.7.4.10 及以上** |
| ----------------------------- | :------------------- | :----------------------- | :------------------- |
| 开源Cesium库版本              | 1.50                 | 1.84                     | 1.122                |

<br />

# 三、功能所属库变更对照表

| 功能项-Markdown版                               | 升级需求完成前所属库    | 升级需求完成后所属库    |
| ----------------------------------------------- | ----------------------- | ----------------------- |
| 互联网图层-天地图                               | webclient-cesium-plugin | webclient-cesium-plugin |
| 互联网图层-百度地图                             | webclient-cesium        | webclient-cesium-plugin |
| 互联网图层-高德地图                             | webclient-cesium        | webclient-cesium-plugin |
| 互联网图层-自定义裁图方式地图                   | webclient-cesium        | webclient-cesium-plugin |
| OGC图层-WMS(MapGIS)-4326                        | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMS(MapGIS)-3857                        | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMS(MapGIS)-custom                      | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMS-混合接口                            | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMS-原生接口                            | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMTS(MapGIS)-4326                       | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMTS(MapGIS)-3857                       | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMTS(MapGIS)-自定义坐标系               | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMTS-混合接口                           | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMTS-原生接口                           | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WFS(MapGIS)-4326                        | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WFS(MapGIS)-3857                        | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WFS(MapGIS)-混合接口                    | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WFS(MapGIS)-原生接口                    | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMS(ArcGIS)                             | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WMTS(ArcGIS)                            | webclient-cesium-plugin | webclient-cesium-plugin |
| OGC图层-WFS(MapGIS)-设置高度模式                | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-MapGIS地图服务-4326                | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-MapGIS地图服务-3857                | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-MapGIS地图服务-自定义坐标系        | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-MapGIS图层服务                     | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-ArcGIS地图服务                     | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-MapGIS地图服务-混合接口            | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-MapGIS地图服务-原生接口            | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-ArcGIS地图服务-混合接口            | webclient-cesium-plugin | webclient-cesium-plugin |
| 地图图片图层-ArcGIS地图服务-原生接口            | webclient-cesium-plugin | webclient-cesium-plugin |
| 瓦片图层-MapGIS瓦片服务-4326                    | webclient-cesium-plugin | webclient-cesium-plugin |
| 瓦片图层-MapGIS瓦片服务-3857                    | webclient-cesium-plugin | webclient-cesium-plugin |
| 瓦片图层-MapGIS瓦片服务-自定义坐标系            | webclient-cesium-plugin | webclient-cesium-plugin |
| 瓦片图层-MapGIS瓦片服务-原生接口                | webclient-cesium-plugin | webclient-cesium-plugin |
| 瓦片图层-MapGIS瓦片服务-混合接口                | webclient-cesium-plugin | webclient-cesium-plugin |
| 瓦片图层-ArcGIS瓦片服务-混合接口                | webclient-cesium-plugin | webclient-cesium-plugin |
| 瓦片图层-ArcGIS瓦片服务-原生接口                | webclient-cesium-plugin | webclient-cesium-plugin |
| 要素图层-MapGIS要素服务-4326                    | webclient-cesium-plugin | webclient-cesium-plugin |
| 要素图层-MapGIS要素服务-3857                    | webclient-cesium-plugin | webclient-cesium-plugin |
| 要素图层-MapGIS要素服务-自定义坐标系            | webclient-cesium-plugin | webclient-cesium-plugin |
| 要素图层-MapGIS要素服务-设置高度模式            | webclient-cesium-plugin | webclient-cesium-plugin |
| 要素图层-MapGIS要素服务-混合接口                | webclient-cesium-plugin | webclient-cesium-plugin |
| 要素图层-MapGIS要素服务-原生接口                | webclient-cesium-plugin | webclient-cesium-plugin |
| GeoJson图层-GeoJSON                             | webclient-cesium-plugin | webclient-cesium-plugin |
| GeoJson图层-设置高度模式                        | webclient-cesium-plugin | webclient-cesium-plugin |
| GeoJSON图层-混合接口                            | webclient-cesium-plugin | webclient-cesium-plugin |
| GeoJson图层-原生接口                            | webclient-cesium-plugin | webclient-cesium-plugin |
| KML图层-KML                                     | webclient-cesium        | webclient-cesium        |
| KML图层-KMZ                                     | webclient-cesium        | webclient-cesium        |
| CZML图层-CZML                                   | webclient-cesium        | webclient-cesium        |
| 矢量瓦片图层-矢量瓦片(MapGIS)-4326              | webclient-cesium-plugin | webclient-cesium-plugin |
| 矢量瓦片图层-矢量瓦片(MapGIS)-3857              | webclient-cesium-plugin | webclient-cesium-plugin |
| 矢量瓦片图层-矢量瓦片(MapGIS)-自定义坐标系      | webclient-cesium-plugin | webclient-cesium-plugin |
| 矢量瓦片图层-矢量瓦片(MapGIS)-混合接口          | webclient-cesium-plugin | webclient-cesium-plugin |
| 矢量瓦片图层-矢量瓦片(MapGIS)-原生接口          | webclient-cesium-plugin | webclient-cesium-plugin |
| 矢量瓦片图层-矢量瓦片(ArcGIS)-混合接口          | webclient-cesium-plugin | webclient-cesium-plugin |
| 矢量瓦片图层-矢量瓦片(ArcGIS)-原生接口          | webclient-cesium-plugin | webclient-cesium-plugin |
| 地形缓存图层-STK地形缓存-自定义服务             | webclient-cesium        | webclient-cesium-plugin |
| 地形缓存图层-IGS地形服务                        | webclient-cesium        | webclient-cesium-plugin |
| 地形缓存图层-STK地形缓存-混合接口               | webclient-cesium        | webclient-cesium-plugin |
| 地形缓存图层-STK地形缓存-原生接口               | webclient-cesium        | webclient-cesium-plugin |
| 场景图层-MapGIS地形服务                         | webclient-cesium        | webclient-cesium-plugin |
| 场景图层-MapGIS多地形服务                       | webclient-cesium        | webclient-cesium-plugin |
| 场景图层-倾斜摄影(MapGIS-场景服务)              | webclient-cesium        | webclient-cesium        |
| 场景图层-MapGIS注记服务                         | webclient-cesium-plugin | webclient-cesium-plugin |
| 场景图层-MapGIS-场景服务(组图层)                | webclient-cesium        | webclient-cesium-plugin |
| 场景图层-IS场景服务                             | webclient-cesium-plugin | 无                      |
| 模型缓存图层-粗模(M3D-文件服务)                 | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-倾斜摄影(M3D-M3D服务)              | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-倾斜摄影(M3D-MeshOpt)              | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-点云(M3D-文件服务)                 | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-景观模型(M3D-文件服务)             | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-BIM(M3D-文件服务)                  | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-地质体网格(M3D-文件服务)           | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-地质建模(M3D-文件服务)             | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-地质钻孔(M3D-文件服务)             | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-地下管网(M3D-文件服务)             | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-倾斜摄影(3DTiles-文件服务)         | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-倾斜摄影(3DTiles-IGS服务)          | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-倾斜摄影(3DTiles-MeshOpt)          | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-点云(3DTiles-文件服务)             | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-三维钻孔数据渲染(3DTiles-文件服务) | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-BIM构件树(M3D-文件服务)            | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-三维图层--混合接口                 | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-三维图层--原生接口                 | webclient-cesium        | webclient-cesium        |
| 模型缓存图层-栅格体元数据                       | webclient-cesium        | webclient-cesium-plugin |
| 动态图层-交通仿真                               | webclient-cesium        | webclient-cesium        |
| 动态图层-飞机航线                               | webclient-cesium        | webclient-cesium        |
| 图形图层-几何图层 - 4326                        | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-几何图层 - 3857                        | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-几何图层 - custom                      | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-简单Marker符号                         | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-图片Marker符号                         | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-简单线符号                             | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-简单填充符号                           | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-文字符号                               | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-MapGIS文字符号                         | webclient-cesium        | webclient-cesium-plugin |
| 图形图层-几何图层 - 混合接口                    | webclient-cesium        | webclient-cesium-plugin |
| 图层控制-地图图片图层                           | webclient-cesium-plugin | webclient-cesium-plugin |
| 图层控制-影像图层高程模式设置                   | webclient-cesium        | webclient-cesium        |
| 场景设置-显示模式                               | webclient-cesium        | webclient-cesium        |
| 场景设置-场景参数                               | webclient-cesium        | webclient-cesium        |
| 场景设置-视图参数                               | webclient-cesium        | webclient-cesium        |
| 场景设置-地表透明度独立控制                     | webclient-cesium        | webclient-cesium-plugin |
| 场景设置-M3D缓存透明度整体控制                  | webclient-cesium        | webclient-cesium        |
| 场景设置-金字塔缓存透明度整体控制               | webclient-cesium        | webclient-cesium        |
| 场景操作-截图                                   | webclient-cesium        | webclient-cesium-plugin |
| 相机                                            | webclient-cesium        | webclient-cesium-plugin |
| 相机-绕点旋转                                   | webclient-cesium        | webclient-cesium-plugin |
| 相机-坐标互转                                   | webclient-cesium        | webclient-cesium-plugin |
| 相机-键盘漫游                                   | webclient-cesium        | webclient-cesium-plugin |
| 控件                                            | webclient-cesium        | webclient-cesium        |
| 自定义导航控件                                  | webclient-cesium        | webclient-cesium        |
| 服务端查询-基本要素查询                         | webclient-cesium        | webclient-cesium        |
| 服务端查询-动态单体化(MapGIS要素服务)           | webclient-cesium        | webclient-cesium        |
| 客户端查询-静态单体化(M3D1.0)                   | webclient-cesium        | webclient-cesium        |
| 客户端查询-静态单体化(M3D2.0)                   | webclient-cesium        | webclient-cesium        |
| 客户端查询-根据OID显隐图元(M3D-2.0)             | webclient-cesium        | webclient-cesium        |
| 客户端查询-根据OID调整图元透明度(M3D)           | webclient-cesium        | webclient-cesium        |
| 客户端查询-模型线框和轮廓显示                   | webclient-cesium        | webclient-cesium        |
| 测量工具                                        | webclient-cesium        | webclient-cesium-plugin |
| 模型编辑(M3D)                                   | webclient-cesium        | webclient-cesium-plugin |
| 模型编辑(GLTF)                                  | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-气泡弹窗(Graphic类型)                  | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-点                                     | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-广告牌                                 | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-标注                                   | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-标注+广告牌                            | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-文本                                   | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-线                                     | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-圆                                     | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-多边形                                 | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-矩形                                   | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-正方形                                 | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-管线                                   | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-圆球                                   | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-圆锥                                   | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-墙                                     | webclient-cesium        | webclient-cesium-plugin |
| 基础标绘-动态河流                               | webclient-cesium        | webclient-cesium-plugin |
| 行业标绘-符号库使用                             | webclient-plot          | webclient-plot          |
| 行业标绘-符号库查询                             | webclient-plot          | webclient-plot          |
| 行业标绘-标绘使用                               | webclient-plot          | webclient-plot          |
| 行业标绘-标绘使用(场景)                         | webclient-plot          | webclient-plot          |
| 行业标绘-标绘使用(地形)                         | webclient-plot          | webclient-plot          |
| 行业标绘-属性编辑                               | webclient-plot          | webclient-plot          |
| 行业标绘-图层控制                               | webclient-plot          | webclient-plot          |
| 行业标绘-图层使用                               | webclient-plot          | webclient-plot          |
| 行业标绘-动效设置                               | webclient-plot          | webclient-plot          |
| 行业标绘-态势图管理                             | webclient-plot          | webclient-plot          |
| 行业标绘-三维态势推演                           | webclient-plot          | webclient-plot          |
| 行业标绘-算法扩展                               | webclient-plot          | webclient-plot          |
| 行业标绘-二三维联动标绘                         | webclient-plot          | webclient-plot          |
| 行业标绘-态势推演二三维联动                     | webclient-plot          | webclient-plot          |
| 空间分析-缓冲分析(要素缓冲)                     | webclient-cesium        | webclient-cesium        |
| 空间分析-泰森多边形构建                         | webclient-cesium        | webclient-cesium        |
| 空间分析-Tin三角网构建                          | webclient-cesium        | webclient-cesium        |
| 空间分析-中心点计算                             | webclient-cesium        | webclient-cesium        |
| 空间分析-空间插值                               | webclient-cesium        | webclient-cesium        |
| 空间分析-曲线光滑                               | webclient-cesium        | webclient-cesium        |
| 空间分析-拓扑关系判断                           | webclient-cesium        | webclient-cesium        |
| 对比分析-卷帘                                   | webclient-cesium        | webclient-cesium        |
| 三维分析-可视域                                 | webclient-cesium        | webclient-cesium        |
| 三维分析-天际线                                 | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-通视                                   | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-阴影率分析                             | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-限高                                   | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-路径漫游                               | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-飞行漫游                               | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-多视图漫游                             | webclient-cesium        | webclient-cesium        |
| 三维分析-实时漫游                               | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-室内漫游                               | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-碰撞检测                               | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-模型沿地形漫游                         | webclient-cesium        | webclient-cesium-plugin |
| 三维分析-无人机视频投放                         | webclient-cesium        | webclient-cesium        |
| 三维分析-场景投放                               | webclient-cesium        | webclient-cesium        |
| 三维分析-压平分析                               | webclient-cesium        | webclient-cesium        |
| 地形分析-剖面分析                               | webclient-cesium        | webclient-cesium-plugin |
| 地形分析-等高线(面)                             | webclient-cesium        | webclient-cesium-plugin |
| 地形分析-坡度坡向                               | webclient-cesium        | webclient-cesium-plugin |
| 地形分析-填挖方                                 | webclient-cesium        | webclient-cesium-plugin |
| 地形分析-洪水淹没                               | webclient-cesium        | webclient-cesium-plugin |
| 地形分析-地形压平                               | webclient-cesium        | webclient-cesium-plugin |
| 地形分析-地形开挖                               | webclient-cesium        | webclient-cesium-plugin |
| 模型分析-模型空间过滤                           | webclient-cesium        | webclient-cesium-plugin |
| 模型分析-模型爆炸                               | webclient-cesium        | webclient-cesium        |
| 模型分析-动态剖切                               | webclient-cesium        | webclient-cesium-plugin |
| 模型分析-纹理缩放                               | webclient-cesium        | webclient-cesium        |
| 地质分析-地质体封边                             | webclient-cesium        | webclient-cesium        |
| 地质分析-地质体剖面                             | webclient-cesium        | webclient-cesium        |
| 地质分析-地质体夸张显示                         | webclient-cesium        | webclient-cesium        |
| 专题图-统一                                     | webclient-cesium        | webclient-cesium-plugin |
| 专题图-单值                                     | webclient-cesium        | webclient-cesium-plugin |
| 专题图-分段                                     | webclient-cesium        | webclient-cesium-plugin |
| 专题图-分段-混合接口                            | webclient-cesium        | webclient-cesium-plugin |
| 专题图-分段(字段归一)                           | webclient-cesium        | webclient-cesium-plugin |
| 专题图-分段(总和归一)                           | webclient-cesium        | webclient-cesium-plugin |
| 专题图-分段(M3D-2.0)                            | webclient-cesium        | webclient-cesium-plugin |
| 专题图-单值(M3D-2.0)                            | webclient-cesium        | webclient-cesium-plugin |
| 专题图-包含(M3D-2.0)                            | webclient-cesium        | webclient-cesium-plugin |
| 专题图-统计图                                   | webclient-cesium        | webclient-cesium-plugin |
| 专题图-区域视觉变量                             | webclient-cesium        | webclient-cesium-plugin |
| 专题图-点视觉变量                               | webclient-cesium        | webclient-cesium-plugin |
| 专题图-动态注记                                 | webclient-cesium-plugin | webclient-cesium-plugin |
| 专题图-热力图                                   | webclient-cesium        | webclient-cesium-plugin |
| 专题图-聚合图                                   | webclient-cesium        | webclient-cesium        |
| Echarts-热力图-空气质量                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-散点图-微博签到                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-散点图-空气质量                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-散点图-纽约热力                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-散点图-世界GPS                          | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-路径图-模拟迁徙                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-路径图-渐进绘制                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-路径图-公交路线                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-路径图-中国主干                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-渐进线-纽约街道                         | webclient-cesium-plugin | webclient-cesium-plugin |
| Echarts-自定义-网格专题                         | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-轨迹汇聚                                   | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-热力图                                     | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-迁移图                                     | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-区数据渲染                                 | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-点数据渲染                                 | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-方形网格密度                               | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-蜂窝形密度                                 | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-点重叠播放                                 | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-点微博数据                                 | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-单一迁移轨迹                               | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-动态轨迹                                   | webclient-cesium-plugin | webclient-cesium-plugin |
| MapV-交通轨迹                                   | webclient-cesium-plugin | webclient-cesium-plugin |
| 场景美化-自定义片元着色器                       | webclient-cesium        | webclient-cesium        |
| 场景美化-自定义顶点着色器                       | webclient-cesium        | webclient-cesium        |
| 场景美化-自定义着色器(动态泛光)                 | webclient-cesium        | webclient-cesium        |
| 场景美化-自定义着色器(要素高亮)                 | webclient-cesium        | webclient-cesium        |
| 场景美化-水面倒影特效                           | webclient-cesium        | webclient-cesium-plugin |
| 粒子特效-天气效果(雾)                           | webclient-cesium        | webclient-cesium-plugin |
| 粒子特效-天气效果(雨)                           | webclient-cesium        | webclient-cesium-plugin |
| 粒子特效-天气效果(雪)                           | webclient-cesium        | webclient-cesium-plugin |
| 粒子特效-积雨                                   | webclient-cesium        | webclient-cesium        |
| 粒子特效-烟雾                                   | webclient-cesium        | webclient-cesium-plugin |
| 粒子特效-火焰                                   | webclient-cesium        | webclient-cesium-plugin |
| 粒子特效-喷泉                                   | webclient-cesium        | webclient-cesium-plugin |
| 粒子特效-风场可视化                             | webclient-cesium        | webclient-cesium-plugin |
| 后处理特效-方向光                               | webclient-cesium        | webclient-cesium        |
| 后处理特效-点光源                               | webclient-cesium        | webclient-cesium        |
| 后处理特效-聚光源                               | webclient-cesium        | webclient-cesium        |
| 三维纹理-纹理使用                               | webclient-cesium        | webclient-cesium        |
| 综合-模型坐标网格显示                           | webclient-cesium        | webclient-cesium-plugin |
| 综合-目标检测与跟踪                             | webclient-cesium        | webclient-cesium-plugin |
| 综合-隧道开挖模拟                               | webclient-cesium        | webclient-cesium        |
| 综合-无人机图像拼接                             | webclient-cesium        | webclient-cesium        |

