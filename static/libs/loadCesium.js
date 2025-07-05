function inputScript(url) {
  var script =
    '<script type="text/javascript" src="' + url + '"><' + '/script>'
  document.writeln(script)
}

function inputCSS(url) {
  var css = '<link rel="stylesheet" href="' + url + '">';
  document.writeln(css);
}

function load() {
  const basePath = 'http://webclient.smaryun.com'
  let currentCesiumVersion = localStorage.getItem('currentCesiumVersion')
  if (!currentCesiumVersion) {
    currentCesiumVersion = '10.7.2.10'
    localStorage.setItem('currentCesiumVersion', currentCesiumVersion)
  }
  if (currentCesiumVersion === '10.7.2.10') {
    inputScript(basePath + '/static/libs/cdn/cesium-10.7.2.10/Cesium.js')
    inputCSS(basePath + '/static/libs/cdn/cesium-10.7.2.10/Widgets/widgets.css')
    inputCSS(basePath + '/static/libs/cdn/cesium-10.7.2.10/MapGIS/css/mapgis.css')
  } else {
    inputScript(basePath + '/static/libs/cdn/cesium/Cesium.js')
    inputCSS(basePath + '/static/libs/cdn/cesium/Widgets/widgets.css')
  }
}

load()

function createChangeTab() {
  const contentDom = document.getElementById('mapgis-3d-viewer')
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
      span.innerText = '切换Cesium版本'
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

      const button1 = document.createElement('button')
      button1.innerText = '10.7.2.10'
      button1.onclick = () => {
        localStorage.setItem('currentCesiumVersion', '10.7.2.10')
        refresh()
      }
      buttonContainer.appendChild(button1)
      buttons.push(button1)

      const button2 = document.createElement('button')
      button2.innerText = '10.7.4.10'
      button2.onclick = () => {
        localStorage.setItem('currentCesiumVersion', '10.7.4.10')
        refresh()
      }
      buttonContainer.appendChild(button2)
      buttons.push(button2)

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
        const currentCesiumVersion = localStorage.getItem('currentCesiumVersion')
        if (b.innerText === currentCesiumVersion) {
          b.style.backgroundColor = 'rgb(58, 133, 198)'
        }
      })

      switchDom.appendChild(buttonContainer)
      _parentDom.appendChild(switchDom)
    }
  }
}
