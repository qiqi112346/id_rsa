# 变更状态说明
**类变更状态说明**
- **新增**：新增支持的类
- **更新**：类名或类成员发生变化
- **废弃**：不再支持该类
- **计划废弃**：待废弃接口，原则上讲，预计两个大版本之后，不再支持该类

**成员更状态说明**
- **新增**：新增支持的成员方法、属性或事件
- **更新**：成员方法、属性或事件发生变化
- **废弃**：不再支持该成员方法、属性或事件
- **计划废弃**：待废弃成员接口，原则上讲，预计两个大版本之后，不再支持该接口

<br />

# V10.7.4.10 接口变更表

无变更
<br />

# V10.7.2.10 接口变更表

命名空间变更：

| 命名空间                  | 变更类型 | 变更内容说明            |
| ------------------------- | -------- | ----------------------- |
| zondy.leaflet             | 新增     | leaflet引擎插件命名空间 |
| zondy.leaflet.layer       | 新增     | 图层命名空间            |
| zondy.leaflet.tool        | 新增     | 工具命名空间            |
| zondy.leaflet.tool.sketch | 新增     | 草图编辑命名空间        |
| zondy.leaflet.widget      | 新增     | 组件命名空间            |
| zondy.leaflet.util        | 新增     | 辅助函数命名空间        |

说明： 从10.7.2.10开始，Zondy系列命名空间计划废弃，请使用zondy相关命名空间



类接口变更：

| <span style="display:inline-block;width: 65px"> 命名空间</span> | 类名                   | <span style="display:inline-block;width: 80px"> 类中文说明</span> | <span style="display:inline-block;width: 70px"> 类变更<br />类型 </span> | <span style="display:inline-block;width: 70px"> 成员名(方法/属性/枚举/常量/事件)</span> | <span style="display:inline-block;width: 70px"> 成员变更<br />类型 </span> | <span style="display:inline-block;width: 80px"> 被替代接口<br />（废弃） </span> | <span style="display:inline-block;width: 300px"> 变更内容说明</span> |
| ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| zondy.leaflet                                                | MapView                | 二维地图视图(leaflet引擎)                                    | 新增                                                         |                                                              |                                                              |                                                              | 新增zondy.leaflet.MapView类，和Zondy.MapViewLeaflet接口一致  |
| zondy                                                        | MapViewLeaflet         | 二维地图视图(leaflet引擎)                                    | 计划废弃                                                     |                                                              |                                                              |                                                              | Zondy.MapViewLeaflet预计两个大版本之后废弃，使用zondy.leaflet.MapView代替 |
| zondy.leaflet                                                | SketchEditor           | 二维草图编辑器(leaflet引擎)                                  | 新增                                                         |                                                              |                                                              |                                                              | 新增zondy.leaflet.SketchEditor类，和Zondy.SketchEditorLeaflet接口一致 |
| zondy                                                        | SketchEditorLeaflet    | 二维草图编辑器(leaflet引擎)                                  | 计划废弃                                                     |                                                              |                                                              |                                                              | Zondy.SketchEditorLeaflet预计两个大版本之后废弃，使用zondy.leaflet.SketchEditor代替 |
| zondy.leaflet.layer                                          | IGSTileLayer           | IGS瓦片图层(Leaflet)                                         | 新增                                                         |                                                              |                                                              |                                                              | 新增IGS瓦片图层                                              |
| zondy.leaflet.layer                                          | IGSMapImageLayer       | 地图图片图层(Leaflet)                                        | 新增                                                         |                                                              |                                                              |                                                              | 新增地图图片图层                                             |
| zondy.leaflet.layer                                          | ArcGISMapImageLayer    | ArcGIS地图图片图层(Leaflet)                                  | 新增                                                         |                                                              |                                                              |                                                              | 新增ArcGIS地图图片图层                                       |
| zondy.leaflet.layer                                          | WebMapServiceLayer     | WMS图层(Leaflet)                                             | 新增                                                         |                                                              |                                                              |                                                              | 新增WMS图层                                                  |
| zondy.leaflet.layer                                          | WebMapTileServiceLayer | WMTS图层(Leaflet)                                            | 新增                                                         |                                                              |                                                              |                                                              | 新增WMTS图层                                                 |
| zondy.leaflet.layer                                          | WebTileLayer           | 网络瓦片图层(Leaflet)                                        | 新增                                                         |                                                              |                                                              |                                                              | 新增网络瓦片图层                                             |
| zondy.leaflet.layer                                          | ArcGISTileLayer        | ArcGIS瓦片图层(Leaflet)                                      | 新增                                                         |                                                              |                                                              |                                                              | 新增ArcGIS瓦片图层                                           |
| zondy.leaflet.layer                                          | VectorTileLayer        | 矢量瓦片图层(Leaflet)                                        | 新增                                                         |                                                              |                                                              |                                                              | 新增矢量瓦片图层                                             |
| zondy.leaflet.layer                                          | FeatureLayer           | 要素图层(Leaflet)                                            | 新增                                                         |                                                              |                                                              |                                                              | 新增要素图层                                                 |
| zondy.leaflet.layer                                          | MapVLayer              | MapV图层(Leaflet)                                            | 新增                                                         |                                                              |                                                              |                                                              | 新增EchartsLayer图层                                         |
| zondy.leaflet.layer                                          | EchartsLayer           | Echarts图层(Leaflet)                                         | 新增                                                         |                                                              |                                                              |                                                              | 新增MapVLayer图层                                            |
| zondy.leaflet.util                                           |                        |                                                              | 新增                                                         | initializeOptions                                            |                                                              |                                                              | 通过Common的图层对象构建Leaflet图层对象的初始化参数          |
| zondy.leaflet.util                                           |                        |                                                              | 新增                                                         | initializeCRS                                                |                                                              |                                                              | 通过图层对象构造l需要传入的CRS对象                           |

<br />

# V10.7.0.10 接口变更表

| 模块名 | 类名           | 类中文说明                | <span style="display:inline-block;width: 70px"> 类变更<br />类型 </span> | 成员名<br />(方法/属性/事件) | <span style="display:inline-block;width: 70px"> 成员变更<br />类型 </span> | 被替代接口（废弃） | 变更内容说明                                                 |
| ------ | -------------- | ------------------------- | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------ | ------------------ | ------------------------------------------------------------ |
| Zondy  | MapViewLeaflet | 二维地图视图(Leaflet引擎) | 新增                                                         |                        |                                                              |                    | Leaflet引擎的地图视图                                        |
| Zondy  | MapViewLeaflet | 二维地图视图(Leaflet引擎) | 更新                                                         | goto                   | 新增                                                         |                    |                                                              |
| Zondy  | MapViewLeaflet | 二维地图视图(Leaflet引擎) | 更新                                                         | flyto                  | 计划废弃                                                     |                    | 计划废弃原因：<br /> flyto方法和新增goto方法重叠，goto方法更加灵活规范<br /> 适配指导：<br /> 使用goto方法代替flyto<br /> |
| Zondy  | MapViewLeaflet | 二维地图视图(Leaflet引擎) | 更新                                                         | getZoomByExtent()      | 新增                                                         |                    | 新增通过范围获取层级方法                                     |
