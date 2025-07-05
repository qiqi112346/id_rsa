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

| 命名空间                   | 变更类型 | 变更内容说明             |
| -------------------------- | -------- | ------------------------ |
| zondy.mapboxgl             | 新增     | mapboxgl引擎插件命名空间 |
| zondy.mapboxgl.layer       | 新增     | 图层命名空间             |
| zondy.mapboxgl.tool        | 新增     | 工具命名空间             |
| zondy.mapboxgl.tool.sketch | 新增     | 草图编辑命名空间         |
| zondy.mapboxgl.util        | 新增     | 辅助函数命名空间         |

说明： 从10.7.2.10开始，Zondy系列命名空间计划废弃，请使用zondy相关命名空间



类接口变更：

| <span style="display:inline-block;width: 65px"> 命名空间</span> | 类名                 | <span style="display:inline-block;width: 100px"> 类中文说明</span> | <span style="display:inline-block;width: 70px"> 类变更<br />类型 </span> | <span style="display:inline-block;width: 70px"> 成员名(方法/属性/枚举/常量/事件)</span> | <span style="display:inline-block;width: 70px"> 成员变更<br />类型 </span> | <span style="display:inline-block;width: 80px"> 被替代接口<br />（废弃） </span> | <span style="display:inline-block;width: 300px"> 变更内容说明</span> |
| ------------------------------------------------------------ | -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| zondy.mapboxgl                                               | MapView              | 二维地图视图(mapboxgl引擎)                                   | 新增                                                         |                                                              |                                                              |                                                              | 新增zondy.mapboxgl.MapView类，和Zondy.MapViewMapboxgl接口一致 |
| zondy                                                        | MapViewMapboxgl      | 二维地图视图(mapboxgl引擎)                                   | 计划废弃                                                     |                                                              |                                                              |                                                              | Zondy.MapViewMapboxgl预计两个大版本之后废弃，使用zondy.mapboxgl.MapView代替 |
| zondy.mapboxgl                                               | SketchEditor         | 二维草图编辑器(mapboxgl引擎)                                 | 新增                                                         |                                                              |                                                              |                                                              | 新增zondy.mapboxgl.SketchEditor类，和Zondy.SketchEditorMapboxgl接口一致 |
| zondy                                                        | SketchEditorMapboxgl | 二维草图编辑器(mapboxgl引擎)                                 | 计划废弃                                                     |                                                              |                                                              |                                                              | Zondy.SketchEditorMapboxgl预计两个大版本之后废弃，使用zondy.mapboxgl.SketchEditor代替 |
| zondy.mapboxgl.layer                                         | MapVLayer            | MapVLayer图层                                                | 新增                                                         |                                                              |                                                              |                                                              | 新增EchartsLayer图层                                         |
| zondy.mapboxgl.layer                                         | EchartsLayer         | EchartsLayer图层                                             | 新增                                                         |                                                              |                                                              |                                                              | 新增MapVLayer图层                                            |
| zondy.mapboxgl.util                                          |                      |                                                              | 新增                                                         | initializeOptions                                            |                                                              |                                                              | 通过Common的图层对象构建Mapboxgl图层对象的初始化参数         |
| zondy.mapboxgl.util                                          |                      |                                                              | 新增                                                         | initializeCRS                                                |                                                              |                                                              | 通过图层对象构造需要传入的CRS对象                            |

<br />



# 10.7.0.10 接口变更表

| <span style="display:inline-block;width: 50px"> 模块名 </span> | 类名            | 类中文说明 | <span style="display:inline-block;width: 70px"> 类变更<br />类型 </span> | 成员名(方法/属性/事件) | <span style="display:inline-block;width: 70px"> 成员变更<br />类型 </span> | <span style="display:inline-block;width: 80px"> 被替代接口<br />（废弃） </span> | 变更内容说明                                                 |
| ------------------------------------------------------------ | --------------- | ---------- | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------ | ------------------ | ------------------------------------------------------------ |
| Zondy  | MapViewMapboxgl | 二维地图视图(Mapboxgl引擎) | 新增         |                        |              |                    | Mapboxgl引擎的地图视图                                       |
| Zondy  | MapViewMapboxgl | 二维地图视图(Mapboxgl引擎) | 更新         | goto                   | 新增         |                    |                                                              |
| Zondy  | MapViewMapboxgl | 二维地图视图(Mapboxgl引擎) | 更新         | flyto                  | 计划废弃     |                    | (预计)废弃原因：<br /> flyto方法和新增goto方法重叠，goto方法更加灵活规范<br /> 适配指导：<br /> 使用goto方法代替flyto |
| Zondy  | MapViewMapboxgl | 二维地图视图(Mapboxgl引擎) | 更新         | extensionOptions          | 新增         |                    | 初始化图层的额外参数，请参考MapBoxGl的API文档                |
