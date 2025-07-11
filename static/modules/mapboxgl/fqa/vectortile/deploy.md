# 部署
矢量瓦片的核心服务是4大类：
1. 瓦片服务-数据瓦片集： 有如下存储方式：
   1. 文件目录 每个pbf文件单独存储，文件夹金字塔组织
   2. MbTiles开源格式，数据库表tile_data中记录了对应的数据
   3. 商业格式 MapGIS（Tdf/Mut）, ArcGIS（Vptk）
2. 样式服务-对应地图文档，表明了地图的显示风格：黑夜/光明/深蓝等多种不用的地图配色样式
3. 字体服务-对应字体库，表明当前地图中使用那些字体：黑体、宋体等
4. 符号服务-对应符号库，表明当前地图中使用那些符号：医院、长城、植被

# 1.在线部署
在线部署这四类服务的对应的地址如下：
| 服务名|服务地址|示例|
|:---|:---|:---|
|瓦片服务|http://webclient.smaryun.com:6163/igs/rest/mrms/tile/{docname}/{z}/{y}/{x}?type=cpbf|http://webclient.smaryun.com:6163/igs/rest/mrms/tile/中国行政区/3/2/5?type=cpbf|
|样式服务|http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/styles/{stylename}.json|http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/styles/浅色-墨卡托.json|
|字体服务|http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/fonts/{fontstack}/{range}.pbf|http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/fonts/微软雅黑,微软雅黑/65024-65279.pbf|
|符号服务|http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/{spritename}|http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/sprite.json http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/sprite.png |



``` javascript
    var map = new mapboxgl.Map({
      container: 'map', // 绑定div
      style: 'http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/styles/浅色-墨卡托.json', // 样式服务
      center: [106.563777, 29.578285],
      zoom: 3
    });

    // 浅色-墨卡托里面记录了另外三种服务的地址
    // 瓦片数据服务
    "tiles": ["http://webclient.smaryun.com:6163/igs/rest/mrms/tile/OSM全中国/{z}/{y}/{x}?type=cpbf&returnError=false"],
    // 符号库服务
    sprite:"http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/sprite"
    // 字体库服务
    glyphs:"http://webclient.smaryun.com:6163/igs/rest/mrms/vtiles/fonts/{fontstack}/{range}.pbf"
}
```

# 2.离线部署
> 如果是商业GIS平台,下面4类服务已经`内置到GIS平台`中，无需重新操作，可跳过该教程

> 如何针对4种服务进行离线部署，以文件数据格式为例
![IIS](../../static/modules/mapboxgl/fqa/vectortile/img/services.png)

## 2.1 瓦片服务
   `1. 文件格式`，该方式直接走静态文件资源访问
   ``` sh
   zoom                 级别文件夹
     |---row            行文件夹
          |---col.pbf   列瓦片文件
   举例： 5/2/3.pbf
   ```
   `2. MBTIles` SQLite数据库, 该数据下一定存在表/视图 `tiles` 如下：通过自定义的服务读取瓦片的数据并转发

   |rowid|zoom_level | tile_column | tile_row | tile_data|
   |:---|:---|:---|:---|:---|
   |1|0|0|0|(blob)|

   `3. 商业格式` MapGIS使用IGServer直接发布Tdf/Mut，ArcGIS使用ArcServer直接发布Vptk

### 2.1.1 举例
使用IIS/Apache/Nodejs 发布，以window自带的IIS举例说明，难点有2处
1.瓦片的行列号匹配
   1. 按照 级别-行号-列号对应的瓦片地址是 {z}/{y}/{x}.pbf
   2. 按照 级别-列号-行号对应的瓦片地址是 {z}/{x}/{y}.pbf
   此处常见的问题是 行列号错位后导致的瓦片不请求，如下图所示，第0级的时候可以看见数据，后几级发出网络请求对应的瓦片为空，导致以为是瓦片服务不正确。
      ![MIME](../../static/modules/mapboxgl/fqa/vectortile/img/colraw.png)
      打开浏览器，发现请求的的`8/84/176`,遇见这类情况则说明是行列号不匹配导致，请结合数据修改样式中行列号规则。
      ``` json
      "sources": {
         "OSM全中国": {
         "type": "vector",
         "tiles": [
            "http://webclient.smaryun.com:6163/igs/rest/mrms/tile/OSM全中国/{z}/{x}/{y}.pbf"  // 或者{z}/{y}{x}
         ],
         "minZoom": 0,
         "maxZoom": 13
         }
      },
      ```



2.单张瓦片的MIME类型，请在MIME类型设置中设置类型为  `application/x-protobuf`
   ![MIME](../../static/modules/mapboxgl/fqa/vectortile/img/mime.png)

## 2.2 样式服务
样式服务目录如下：
   ![MIME](../../static/modules/mapboxgl/fqa/vectortile/img/style.png)
### 常见问题
   1. 瓦片没有请求, 一般是数据源中设置了请求级别
      ``` js
      "sources": {
         "OSM全中国": {
         "type": "vector",
         "tiles": [
            "http://webclient.smaryun.com:6163/igs/rest/mrms/tile/OSM全中国/{z}/{x}/{y}.pbf"  // 或者{z}/{y}{x}
         ],
         "minZoom": 11,    // 此处说明该数据只有11级到-13级才请求数据源， 0-10  14-20都不发请求
         "maxZoom": 13     
         }
      },
      ``` 
   2. 瓦片有请求，但是不显示，一般是图层中设置了级别或者显示控制
      ``` js
      {
         "layers": [{
            "id": "观光胜地",
            "source": "OSM全中国",
            "source-layer": "观光胜地",
            "minzoom": 11,  // 此处说明该数据只有11级到-13级才请求数据源， 0-10  14-20都不发请求
            "maxzoom": 13,
            "type": "fill",
            "paint": {
               "fill-outline-color": "rgba(221, 92, 92, 1)",
               "fill-color": "rgba(220,175,205,1.0)"
            },
            "layout": {
               "visibility": "visible"  // visible表示显示  none表示不显示
            }
         }]
      }
      ```
## 2.3 符号服务
符号服务目录如下：
   ![MIME](../../static/modules/mapboxgl/fqa/vectortile/img/sprites.png)

## 2.4 字体服务
字体服务最为特殊，由于字体在使用的时候存在首选字体与备选字体的概念，如服务地址{fontsatck}中 `fontstack = 黑体,黑体` 2种字体组成
如果是文件形式的服务，需要将文件夹修改成如下形式
> `文件夹名`   --->  `文件夹名,文件夹名`

|修改前|修改后|
|:---|:---|
|![Before](../../static/modules/mapboxgl/fqa/vectortile/img/origin-font.png)|![After](../../static/modules/mapboxgl/fqa/vectortile/img/after-font.png)|




