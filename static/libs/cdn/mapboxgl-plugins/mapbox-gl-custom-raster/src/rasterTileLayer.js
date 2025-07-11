import customTileLayer from "./customTileLayer.js";

 function RasterTileLayer(layerId, layerType, options) {
  var _options = options || {};

  var providers = RasterTileLayer.providers

  var parts = layerType.split(".");

  var providerName = parts[0];
  var mapName = parts[1];
  var mapType = parts[2];

  var url = providers[providerName][mapName][mapType];
  var subdomains = providers[providerName].Subdomains;
  var minzoom = providers[providerName][mapName].minzoom;
  var maxzoom = providers[providerName][mapName].maxzoom;
  var tileType = providers[providerName].tileType;

  if (providerName === "Custom") {
    url = _options.url ? _options.url : url;
    minzoom = _options.minzoom ? _options.minzoom : 0;
    maxzoom = _options.maxzoom ? _options.maxzoom : 20;
  }

  var tilelayer;
  if (providerName === "TianDiTu" || providerName === "OSM") {
    //天地图使用大地2000坐标可以直接使用，不用偏移
    var key = _options.key || providers[providerName].key;
    var urls = [];
    for (var sub of subdomains) {
      urls.push(url.replace("{s}", sub).replace("{key}", key));
    }
    tilelayer = {
      id: layerId,
      type: "raster",
      source: {
        type: "raster",
        tiles: urls,
        tileSize: 256,
        minzoom: minzoom,
        maxzoom: maxzoom,
      },
    };
  } else {
    tilelayer = new customTileLayer(layerId, url, {
      subdomains: subdomains,
      minZoom: minzoom,
      maxZoom: maxzoom,
      tileType: tileType,
    });
  }

  return tilelayer;
}

RasterTileLayer.providers = {
  TianDiTu: {
    Normal: {
      Map: "http://t{s}.tianditu.com/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",
      Annotion:
        "http://t{s}.tianditu.com/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}",
      minzoom: 0,
      maxzoom: 18,
    },
    Normal4326: {
      Map: "http://t{s}.tianditu.com/DataServer?T=vec_c&X={x}&Y={y}&L={z}&tk={key}",
      Annotion:
        "http://t{s}.tianditu.com/DataServer?T=cva_c&X={x}&Y={y}&L={z}&tk={key}",
      minzoom: 0,
      maxzoom: 18
    },
    Satellite: {
      Map: "http://t{s}.tianditu.com/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",
      Annotion:
        "http://t{s}.tianditu.com/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}",
      minzoom: 0,
      maxzoom: 18,
    },
    Satellite4326: {
      Map: "http://t{s}.tianditu.com/DataServer?T=img_c&X={x}&Y={y}&L={z}&tk={key}",
      Annotion:
        "http://t{s}.tianditu.com/DataServer?T=cia_c&X={x}&Y={y}&L={z}&tk={key}",
      minzoom: 0,
      maxzoom: 18
    },
    Terrain: {
      Map: "http://t{s}.tianditu.com/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
      Annotion:
        "http://t{s}.tianditu.com/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}",
      minzoom: 0,
      maxzoom: 14,
    },
    Subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
    key: "",
  },
  GaoDe: {
    Normal: {
      Map: "http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      minzoom: 3,
      maxzoom: 18,
    },
    Normal_NoTag: {
      Map: "https://wprd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&scl=1&ltype=11&x={x}&y={y}&z={z}",
      minzoom: 3,
      maxzoom: 18,
    },
    Satellite: {
      Map: "http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
      Annotion:
        "http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
      minzoom: 3,
      maxzoom: 18,
    },
    Subdomains: ["1", "2", "3", "4"],
  },
  Baidu: {
    Normal: {
      Map: "//online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1",
    },
    Satellite: {
      Map: "//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",
      Annotion:
        "//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020",
    },
    Subdomains: "0123456789",
    tileType: "bd09",
  },
  Geoq: {
    Normal: {
      Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      PurplishBlue:
        "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
      Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
      minzoom: 3,
      maxzoom: 16,
    },
    Subdomains: [],
  },
  OSM: {
    Normal: {
      Map: "//{s}.tile.osm.org/{z}/{x}/{y}.png",
      minzoom: 0,
      maxzoom: 18,
    },
    Subdomains: ["a", "b", "c"],
  },
  Custom: {
    WMTS: {
      URL: "custom/{z}/{x}/{y}.png",
      minzoom: 0,
      maxzoom: 20,
    },
    TMS: {
      URL: "custom/{z}/{x}/{y}.png",
      minzoom: 0,
      maxzoom: 20,
    },
    Subdomains: ["0", "1", "2", "3"],
  },
};

export default RasterTileLayer