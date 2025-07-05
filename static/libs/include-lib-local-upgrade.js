/* eslint-disable no-undef */
;(function () {
  var r = new RegExp('(^|(.*?\\/))(include-lib-local-upgrade.js)(\\?|$)'),
    s = document.getElementsByTagName('script'),
    targetScript,
    targetUrl
  for (var i = 0; i < s.length; i++) {
    var src = s[i].getAttribute('src')
    if (src) {
      var m = src.match(r)
      if (m) {
        targetUrl = src
        targetScript = s[i]
        break
      }
    }
  }

  function inputScript(url) {
    var script =
      '<script type="text/javascript" src="' + url + '"><' + '/script>'
    document.writeln(script)
  }

  function inputCSS(url) {
    var css = '<link rel="stylesheet" href="' + url + '">'
    document.writeln(css)
  }

  function inArray(arr, item) {
    for (i in arr) {
      if (arr[i] == item) {
        return true
      }
    }
    return false
  }

  function getInitPath() {
    //"../../libs/zondyclient/include-lib-local-local.js" ==> "../../libs/zondyclient"
    var loadPath = targetUrl.split('/include-lib-local-upgrade')
    return loadPath[0]
  }

  // 创建切换引擎元素
  function createChangeTab(domId, type, filterEngine) {
    const contentDom = document.getElementById(domId)
    const _parentDom = contentDom.parentNode
    if (_parentDom) {
      const switchDom = document.createElement('div')
      if (!document.getElementById('switch-engine')) {
        switchDom.id = 'switch-engine'
        switchDom.style.position = 'absolute'
        switchDom.style.bottom = '10px'
        switchDom.style.right = '10px'
        switchDom.style.padding = '5px'
        switchDom.style.backgroundColor = 'rgb(44, 44, 44)'
        switchDom.style.zIndex = 9999
        switchDom.style.display = 'flex'
        switchDom.style.alignItems = 'center'
        switchDom.style.justifyContent = 'center'

        const span = document.createElement('div')
        span.innerText = '切换引擎'
        span.style = `  font-size: 13px;
            font-weight: 400;
            line-height: 1.53846154;
            text-align: center;
            white-space: nowrap;
            cursor: pointer;
            color: #fff;
            padding-right:5px`
        switchDom.appendChild(span)

        const buttonContainer = document.createElement('div')

        const refresh = () => {
          const dom = window.parent.document.getElementById('frame-run-button')
          if (dom) {
            dom.click()
          }
        }

        const buttons = []

        if (inArray(filterEngine, 'leaflet')) {
          const button1 = document.createElement('button')
          button1.innerText = 'leaflet'
          button1.onclick = () => {
            localStorage.setItem('engine-type', 'leaflet')
            refresh()
          }
          buttonContainer.appendChild(button1)
          buttons.push(button1)
        }

        if (inArray(filterEngine, 'cesium')) {
          const button2 = document.createElement('button')
          button2.style.flex = 1
          button2.innerText = 'cesium'
          button2.onclick = () => {
            localStorage.setItem('engine-type', 'cesium')
            refresh()
          }
          buttonContainer.appendChild(button2)
          buttons.push(button2)
        }

        if (inArray(filterEngine, 'mapboxgl')) {
          const button3 = document.createElement('button')
          button3.style.flex = 1
          button3.innerText = 'mapboxgl'
          button3.onclick = () => {
            localStorage.setItem('engine-type', 'mapboxgl')
            refresh()
          }
          buttonContainer.appendChild(button3)
          buttons.push(button3)
        }

        buttons.forEach((b) => {
          b.style = `
                    margin: 2px;
                    background-color: #93afc8;
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 1.53846154;
                    text-align: center;
                    white-space: nowrap;
                    cursor: pointer;
                    color: #fff;
                    border-color: #1970fc;
                    user-select: none;
                    border: 1px solid transparent;
                    border-radius: 4px;
                    padding: 3px;
                }`
          if (b.innerText === type) {
            b.style.backgroundColor = 'rgb(58, 133, 198)'
          }
        })

        switchDom.appendChild(buttonContainer)
        _parentDom.appendChild(switchDom)
      }
    }
  }

  function load() {
    var httpUrl = getInitPath()
    var includes = (targetScript.getAttribute('include') || '').split(',')

    if (inArray(includes, 'jquery')) {
      inputScript(httpUrl + '/cdn/jquery/jquery-3.7.1.min.js')
    }

    if (inArray(includes, 'fancytree')) {
      inputCSS(httpUrl + '/cdn/fancytree/skin-lion/ui.fancytree.css')
      inputScript(
        httpUrl +
          '/cdn/fancytree/jquery-ui-dependencies/jquery.fancytree.ui-deps.js'
      )
      inputScript(httpUrl + '/cdn/fancytree/jquery.fancytree.js')
      inputScript(httpUrl + '/cdn/fancytree/jquery.fancytree.dnd5.js')
      inputScript(httpUrl + '/cdn/fancytree/jquery.fancytree.multi.js')
    }

    let filterEngine = ['leaflet', 'cesium', 'mapboxgl']
    if (
      Array.isArray(includes) &&
      includes.findIndex((v) => /^engine:/.test(v)) > -1
    ) {
      const index = includes.findIndex((v) => /^engine:/.test(v))
      const engineArr = includes[index].split(':')
      if (engineArr.length > 1) {
        filterEngine = engineArr[1].split(' ')
      }
    }

    // 引入common库
    inputScript(httpUrl + '/cdn/zondyclient/webclient-common.min.js')
    // 获取引擎类型
    let type = localStorage.getItem('engine-type')

    // 如果不在引擎内，则强制设置为允许的type
    if (!inArray(filterEngine, type) && filterEngine.length > 0) {
      type = filterEngine[0]
    }

    switch (type) {
      case 'leaflet':
      default:
        inputCSS(httpUrl + '/cdn/leaflet/leaflet.css')
        inputScript(httpUrl + '/cdn/leaflet/leaflet.js')
        // 矢量瓦片需要mapboxgl
        inputCSS(httpUrl + '/cdn/mapboxgl/mapbox-gl.css')
        inputScript(httpUrl + '/cdn/mapboxgl/mapbox-gl.js')
        inputScript(
          httpUrl + '/cdn/zondyclient/webclient-leaflet-plugin.min.js'
        )
        window.viewType = 'leaflet'
        window.createView = function (viewId, map) {
          createChangeTab(viewId, type, filterEngine)
          return new zondy.leaflet.MapView({
            viewId: viewId,
            map: map
          })
        }
        window.scenarioManage = function (config) {
          createChangeTab(config.viewId, window.viewType, filterEngine)
          return zondy.leaflet.MapView.fromJSON(config)
        }
        window.center = [114.192068, 30.463481]
        break
      case 'mapboxgl':
        inputCSS(httpUrl + '/cdn/mapboxgl/mapbox-gl.css')
        inputScript(httpUrl + '/cdn/mapboxgl/mapbox-gl.js')
        inputScript(
          httpUrl + '/cdn/zondyclient/webclient-mapboxgl-plugin.min.js'
        )
        window.viewType = 'mapboxgl'
        window.createView = function (viewId, map) {
          createChangeTab(viewId, type, filterEngine)
          return new zondy.mapboxgl.MapView({
            viewId: viewId,
            map: map,
            extendOptions: {
              style: {
                glyphs:
                  'http://webclient.smaryun.com:8089/igs/rest/services/VectorTile/湖北省4326矢量瓦片/VectorTileServer/fonts/{fontstack}?range={range}.pbf&f=pbf'
              }
            }
          })
        }
        window.scenarioManage = function (config) {
          createChangeTab(config.viewId, window.viewType, filterEngine)
          return zondy.mapboxgl.MapView.fromJSON(config)
        }
        window.center = [114.192068, 30.463481]
        break

      case 'cesium':
        inputCSS(httpUrl + '/cdn/cesium/Widgets/widgets.css')
        inputCSS(httpUrl + '/cdn/cesium/MapGIS/css/mapgis.css')
        inputScript(httpUrl + '/cdn/cesium/Cesium.js')
        inputScript(httpUrl + '/cdn/zondyclient/webclient-cesium-plugin.min.js')
        window.viewType = 'cesium'
        window.createView = function (viewId, map) {
          createChangeTab(viewId, type, filterEngine)
          return new zondy.cesium.SceneView({
            viewId: viewId,
            map: map
          })
        }
        window.scenarioManage = function (config) {
          createChangeTab(config.viewId, window.viewType, filterEngine)
          return zondy.cesium.SceneView.fromJSON(config)
        }
        window.center = [114.192068, 30.463481, 20000]
        break
    }
  }
  load()
  window.webclient = {
    ip: 'localhost',
    port: 8080,
    protocol: 'http'
  }
})()
