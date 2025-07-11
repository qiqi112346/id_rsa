## 加载 M3D 地质钻孔

### 示例功能

&ensp;&ensp;&ensp;&ensp;本示例实现在三维场景中加载 M3D 地质钻孔数据，对接 MapGIS IGServer 发布的三维地图服务。

### M3D——全新的轻量级三维数据交换格式

&ensp;&ensp;&ensp;&ensp;M3D，是 MapGIS 定义的针对多端应用的轻量级三维数据交换格式，对海量三维数据进行网格划分与分层组织，采用流式传输模式，实现多端一体的高效解析和渲染。具备高效网络传输模式、多级 LOD 模型支持、WebGL 无缝融合等优点。可以将多样类型、多种格式的三维数据通过 M3D 数据交换格式进行高效解析并渲染，能够支持的数据类型包括：精细模型（景观模型、BIM 模型）、实景三维（倾斜摄影、地质体、管线）、点云（激光点云 las 等）、其他（栅格、地形、矢量、瓦片）等。

### 示例实现

&ensp;&ensp;&ensp;&ensp;数据准备：本示例采用的数据经过两个步骤生成，首先需在 MapGIS Desktop 桌面平台软件中为地质钻孔模型数据生成 M3D 缓存，并组织为地图文档；然后在 MapGIS Server Manager 服务管理器中根据地图文档发布为三维地图服务。

&ensp;&ensp;&ensp;&ensp;本示例需要使用【include-cesium-local.js】开发库实现，关键接口为`CesiumZondy.Layer.M3DLayer`类提供的`append()`方法，以此来加载 M3D 缓存的三维地图服务。

> 开发库使用请参见*首页-概述-原生 JS 调用*内容。

### 实现步骤

**Step 1. <font color=red>引用开发库</font>**：
&ensp;&ensp;&ensp;&ensp;本示例引用 local 本地【include-cesium-local.js】开发库，完成此步骤后才可调用三维 WebGL 的功能；

**Step 2. <font color=red>创建布局</font>**：
&ensp;&ensp;&ensp;&ensp;创建`id='GlobeView'`的 div 作为三维视图的容器，并设置其样式；

**Step 3. <font color=red>构造三维场景控件</font>**：
&ensp;&ensp;&ensp;&ensp;实例化`Cesium.WebSceneControl`对象，完成此步骤后可在三维场景中加载三维球控件；

- Example:
  ```javascript
    //构造三维视图对象（视图容器div的id，三维视图设置参数）
    var webGlobe = new Cesium.WebSceneControl('GlobeView', {})
  ```

**Step 4. <font color=red>加载数据</font>**:
&ensp;&ensp;&ensp;&ensp;加载数据：构造`CesiumZondy.Layer.M3DLayer`M3D 图层管理对象，调用`append()`方法，传入 M3D 缓存三维地图服务的 URL 地址即可加载浏览数据，同时可传入相关配置参数。

- Example:
  ```javascript
    //构造M3D模型层管理对象（视图）
    var m3dLayer = new CesiumZondy.Layer.M3DLayer({
      viewer: webGlobe.viewer,
    })
    //加载M3D地图文档（服务地址，配置参数）
    var obliqueLayer = m3dLayer.append('http://webclient.smaryun.com:6163/igs/rest/g3d/DaYanTa', {})
  ```

### 关键接口

#### 1.【三维场景控件类】`Cesium.WebSceneControl(elementId, options)`

| 参数名    | 类 型             | 说 明                |
| --------- | ----------------- | -------------------- |
| elementId | Element \| String | 放置视图的 div 的 id |
| options   | Object            | （可选）附加属性     |

- `options`属性主要参数

| 参数名           | 类 型   | 默认值 | 说 明                                                                                  |
| ---------------- | ------- | ------ | -------------------------------------------------------------------------------------- |
| viewerMode       | String  | ‘3D’   | （可选）初始视图模式默认为三维球视图 '2D'表示二维视图 'COLUMBUS_VIEW' 表示三维平面视图 |
| showInfo         | Boolean | false  | （可选）是否显示默认的属性信息框                                                       |
| animation        | Boolean | true   | （可选）默认动画控制不显示                                                             |
| baseLayerPicker  | Boolean | true   | （可选）是否创建图层控制显示小组件                                                     |
| fullscreenButton | Boolean | true   | （可选）是否创建全屏控制按钮                                                           |
| vrButton         | Boolean | false  | （可选）是否创建 VR 按钮                                                               |

#### 2.【M3D 模型层管理类】`CesiumZondy.Layer.M3DLayer`

##### 【method】`append(url, options)`：添加 M3D 地图文档服务

| 参数名  | 类 型  | 说 明        |
| ------- | ------ | ------------ |
| url     | String | 文档服务地址 |
| options | Object | 附加属性     |

- `options`属性主要参数

| 参数名                  | 类 型        | 默认值       | 说 明                                                                                              |
| ----------------------- | ------------ | ------------ | -------------------------------------------------------------------------------------------------- |
| autoReset               | Boolean      | true         | （可选）是否自动定位                                                                               |
| synchronous             | Boolean      | true         | （可选）是否异步请求                                                                               |
| loaded                  | Boolean      | function     | （可选）回调函数                                                                                   |
| proxy                   | DefaultProxy | defaultProxy | （可选）代理                                                                                       |
| showBoundingVolume      | Boolean      | false        | （可选）是否显示包围盒                                                                             |
| maximumScreenSpaceError | Number       | 16           | （可选）用于控制模型显示细节，值较大将会渲染更少的贴图，进而可以提高性能，而较低的值将提高视觉质量 |

## M3D 模型示例

> M3D 的加载代码相对比较简单，如下所示

- Example:
  ```javascript
  m3dlayer = webGlobe.append('http://192.168.10.186:6163/igs/rest/g3d/福田钻孔', {})
  ```

## 地下模式

地下模式的核心是`关闭天空盒`以及改变透明度以及调整光线角度，同时针对特定模型进行`沉降操作`已达到对应的地下效果。

- Example:
  ```javascript
  webGlobe.viewer.imageryLayers.removeAll()
  webGlobe.viewer.scene.skyAtmosphere.show = false
  webGlobe.viewer.scene.globe.enableTransparent = true
  webGlobe.viewer.scene.globe.baseColor = new Cesium.Color(1, 1, 1, 0.001)
  ```

## 加载完毕后的回调

- Example:
  ```javascript
  m3dlayer = webGlobe.append('http://192.168.10.186:6163/igs/rest/g3d/福田钻孔', {
    loaded: function(layer) {
      // 加载完毕后执行业务逻辑
    },
  })
  ```

## 图层的属性

M3D 的图层属性保持 Cesium 的 3DTIle 一致
[Cesium3DTileset](https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html?classFilter=3Dtile)

- Example:

  ```javascript
  {
  url: { type: String, required: true },
  show: { typs: Boolean, default: true },

  /**
   * @type Cesium.Matrix4
   * @default Matrix4.IDENTITY
   */
  /* modelMatrix: { typs: Object, default: undefined }, */
  /**
   * @type Cesium.ShadowMode
   * @default ShadowMode.ENABLED
   */
  /* shadows: { type: Object, default: undefined }, */

  maximumScreenSpaceError: { type: Number, default: 16 },
  maximumMemoryUsage: { type: Number, default: 512 },

  cullWithChildrenBounds: { typs: Boolean, default: true },
  cullRequestsWhileMoving: { typs: Boolean, default: true },
  cullRequestsWhileMovingMultiplier: { type: Number, default: 60.0 },

  preloadWhenHidden: { typs: Boolean, default: false },
  preloadFlightDestinations: { typs: Boolean, default: true },
  preferLeaves: { typs: Boolean, default: false },

  dynamicScreenSpaceError: { typs: Boolean, default: false },
  dynamicScreenSpaceErrorDensity: { type: Number, default: 0.00278 },
  dynamicScreenSpaceErrorFactor: { type: Number, default: 4.0 },
  dynamicScreenSpaceErrorHeightFalloff: { type: Number, default: 0.25 },

  progressiveResolutionHeightFraction: { type: Number, default: 0.3 },

  foveatedScreenSpaceError: { typs: Boolean, default: true },
  foveatedConeSize: { type: Number, default: 0.1 },
  foveatedMinimumScreenSpaceErrorRelaxation: { type: Number, default: 0.0 },
  /**
   * @type Cesium3DTileset~foveatedInterpolationCallback
   * @default Cesium.Math.lerp
   */
  /* foveatedInterpolationCallback: { type: Function, default: undefined }, */
  foveatedTimeDelay: { type: Number, default: 0.2 },

  skipLevelOfDetail: { typs: Boolean, default: false },
  baseScreenSpaceError: { type: Number, default: 1024 },
  skipScreenSpaceErrorFactor: { type: Number, default: 16 },
  skipLevels: { type: Number, default: 1 },

  immediatelyLoadDesiredLevelOfDetail: { typs: Boolean, default: false },
  loadSiblings: { typs: Boolean, default: false },

  /**
   * @type Cesium.ClippingPlaneCollection
   */
  /* clippingPlanes: { typs: Object, default: undefined }, */
  /**
   * @type Cesium.ClassificationType
   */
  /* classificationType: { typs: Object, default: undefined }, */
  /**
   * @type Cesium.Ellipsoid
   * @default Ellipsoid.WGS84
   */
  /* ellipsoid: { typs: Object, default: undefined }, */

  /* pointCloudShading: { typs: Object, default: undefined }, */
  /**
   * @type Cartesian2
   * @default new Cartesian2(1.0, 1.0)
   */
  /* imageBasedLightingFactor: { typs: Object, default: undefined }, */
  /**
   * @type Cartesian3
   */
  /* lightColor: { typs: Object, default: undefined }, */
  luminanceAtZenith: { type: Number, default: 0.2 },
  /**
   * @type Array.<Cartesian3>
   */
  /* sphericalHarmonicCoefficients: { type: Array, default: undefined }, */
  specularEnvironmentMaps: { type: String, default: "" },

  debugHeatmapTilePropertyName: { type: String, default: "" },
  debugFreezeFrame: { typs: Boolean, default: false },
  debugColorizeTiles: { typs: Boolean, default: false },
  debugWireframe: { typs: Boolean, default: false },
  debugShowBoundingVolume: { typs: Boolean, default: false },
  debugShowContentBoundingVolume: { typs: Boolean, default: false },
  debugShowViewerRequestVolume: { typs: Boolean, default: false },
  debugShowGeometricError: { typs: Boolean, default: false },
  debugShowRenderingStatistics: { typs: Boolean, default: false },
  debugShowMemoryUsage: { typs: Boolean, default: false },
  debugShowUrl: { typs: Boolean, default: false }
  }
  ```

## 动态剖切原理

&ensp;&ensp;&ensp;&ensp;将要切割的图层按照某一个切割面，进行切割，设置一个定时器不同的收缩切割面的距离，已达到动态切割的效果！

1. 创建某个轴的切割面，本例是 Y 轴：

- Example:
  ```javascript
  var g_planeDiziti = new Cesium.ClippingPlane(new Cesium.Cartesian3(0.0, 1.0, 0.0), -200.0)
  ```

2. 获取地质体的图层并绑定切割面

- Example:
  ```javascript
  assiselayer[0].clippingPlanes = new Cesium.ClippingPlaneCollection({
    modelMatrix: assiselayer[0].modelMatrix,
    planes: [g_planeDiziti],
    enabled: true,
  })
  ```

3. 如果存在地形图层，则针对相机进行全局的地形图层的切割处理

- Example:
  ```javascript
  var g_planeTerTile = new Cesium.ClippingPlane(new Cesium.Cartesian3(0.0, 1.0, 0.0), -200.0)
  webGlobe.scene.globe.clippingPlanes = new Cesium.ClippingPlaneCollection({
    modelMatrix: Cesium.Transforms.eastNorthUpToFixedFrame(transformCenter),
    planes: [g_planeTerTile],
    enabled: true,
  })
  ```

4. 设置起始的切面距离，这里的距离根据业务，采取三角测量可以测出对应的距离

- Example:
  ```javascript
  var curDis = 10
  // 定时器回调函数  --- 动态的改变切割面的距离
  function cutLayer(index) {
    let distance = -1 * index * 20
    g_planeTerTile.distance = distance
    g_planeDiziti.distance = distance
  }
  ```
