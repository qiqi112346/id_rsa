# mapboxgl.InternetMapCorrection
mapboxgl插件，对互联网地图栅格瓦片进行纠偏。



## 心路历程

[mapboxgl 互联网地图纠偏插件（一）](http://gisarmory.xyz/blog/index.html?blog=mapboxglMapCorrection1)

[mapboxgl 互联网地图纠偏插件（二）](http://gisarmory.xyz/blog/index.html?blog=mapboxglMapCorrection2)

[mapboxgl 互联网地图纠偏插件（三）](http://gisarmory.xyz/blog/index.html?blog=mapboxglMapCorrection3)

## todo

- [x] 移除图层后，有时会莫名其妙的突然出现
- [ ] 瓦片缩放时增加平滑效果（淡入、淡出）
- [ ] 瓦片在未请求来之前使用前一视图的瓦片
- [ ] 解决栅格瓦片注记图层的走样问题（字体边缘锯齿等现象）


## 地图抖动问题
参考官方的解决方案
https://github.com/mapbox/mapbox-gl-js/issues/7268
https://zhuanlan.zhihu.com/p/388865214

## 支持百度、高德叠加天地图

```javascript
    var map = new mapboxgl.Map({
        container: 'map', 
        // 设置为EPSG:4326即可
        crs:'EPSG:4326',
        style:  {
            "version": 8,
            layers:[],
            sources:{}
        },
        center: [116.39104,39.90502], 
        zoom: 15,
        hash: true
    });
```

