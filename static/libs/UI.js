/**
 * 添加一个IGSMapImageSubLayer到列表中去，如果该图层有子图层，则继续添加子图层
 * @param {Object} listDom DOM列表对象
 * @param {IGSMapImageSubLayer} layer 子图层对象
 * @param {Boolean} isSublayer 是否包含子图层
 * */
function addImageSublayerDom(listDom, layer, isSublayer) {
  // 创建一行div容器
  const divDom = document.createElement('div')
  divDom.className = 'mapgis-layer-div'
  // 创建一个显隐子图层的checkbox
  const checkDoom = document.createElement('input')
  checkDoom.type = 'checkbox'
  checkDoom.className = 'mapgis-check-box'
  checkDoom.id = layer.id
  checkDoom.checked = layer.visible
  // 如果子图层的类型为Group，则禁用该checkbox
  if (layer.type === 'Group') {
    checkDoom.disabled = true
  }
  // 添加点击事件
  checkDoom.addEventListener("change", function (event) {
    const selectLayer = igsMapImageLayer.findSublayerById(event.target.id)
    selectLayer.visible = !selectLayer.visible
  });
  divDom.appendChild(checkDoom)
  // 创建一个图层名称的span元素
  const sublayerNameDom = document.createElement('span')
  sublayerNameDom.innerHTML = layer.name
  if (isSublayer) {
    sublayerNameDom.className = 'mapgis-sublayer-title-2'
  } else {
    sublayerNameDom.className = 'mapgis-sublayer-title-1'
  }
  divDom.appendChild(sublayerNameDom)
  listDom.appendChild(divDom)
  // 如果有子图层，则循环添加子图层列表
  if (layer.sublayers.items.length > 0) {
    for (let i = 0; i < layer.sublayers.items.length; i++) {
      addImageSublayerDom(listDom, layer.sublayers.items[i], true)
    }
  }
}

/**
 * 根据一个地图图片图层对象，创建一个子图层列表
 * @param {DOM} listDom 列表div
 * @param {IGSMapImageLayer} layer 地图图片图层对象
 * */
function addIGSMapImageSublayerList(listDom, layer) {
  const sublayers = layer.sublayers
  sublayers.forEach(function (sublayer) {
    addImageSublayerDom(listDom, sublayer, false)
  })
}

/**
 * 根据图层数，创建一个子图层列表
 * @param {String} listDomID 列表div的id
 * @param {Array<Layer>} layers 图层对象数组
 * */
function addLayerList(listDomID, layers) {
  const listDom = document.getElementById(listDomID)
  for (let i = 0; i < layers.length; i++) {
    // 创建一行div容器
    const divDom = document.createElement('div')
    divDom.className = 'mapgis-layer-div'
    // 创建一个显图层的checkbox
    const checkDoom = document.createElement('input')
    checkDoom.type = 'checkbox'
    checkDoom.className = 'mapgis-check-box'
    checkDoom.id = layers[i].id
    checkDoom.checked = layers[i].visible
    // 添加图层显隐点击事件
    checkDoom.addEventListener("change", function (event) {
      let layer
      for (let j = 0; j < layers.length; j++) {
        if (layers[i].id === event.target.id) {
          layer = layers[i]
          layer.visible = !layer.visible
          // 如果是地图图片图层，则在显隐图层的同事显隐子图层列表
          if (layers[i].type === 'igs-map-image') {
            const subLayerList = document.getElementById(layers[i] + '-layer-list')
            const subLayerListButton = document.getElementById(layers[i] + '-button')
            if (!layer.visible) {
              subLayerList.style.display = 'none'
              subLayerListButton.style.display = 'none'
            } else {
              subLayerList.style.display = 'block'
              subLayerListButton.style.display = 'block'
            }
          }
          break
        }
      }
    });
    divDom.appendChild(checkDoom)
    // 创建一个图层名称的span元素
    const sublayerNameDom = document.createElement('span')
    sublayerNameDom.innerHTML = layers[i].title
    sublayerNameDom.style.color = 'wheat'
    divDom.appendChild(sublayerNameDom)
    // 如果是地图图片图层，则要加一个子图层列表的div
    if (layers[i].type === 'igs-map-image') {
      const newLayerDiv = document.createElement('div')
      // 创建一个展开子图层的按钮
      const subLayerButton = document.createElement('div')
      subLayerButton.innerHTML = '收起子图层'
      subLayerButton.className = 'toggle-sublayer'
      subLayerButton.id = layers[i] + '-button'
      const subLayerListId = layers[i] + '-layer-list'
      // 添加展开子图层列表的点击事件
      subLayerButton.addEventListener('click', function () {
        const subLayerList = document.getElementById(subLayerListId)
        if (subLayerButton.innerHTML === '展开子图层') {
          subLayerButton.innerHTML = '收起子图层'
          subLayerList.style.display = 'block'
        } else {
          subLayerButton.innerHTML = '展开子图层'
          subLayerList.style.display = 'none'
        }
      })
      divDom.appendChild(subLayerButton)
      newLayerDiv.appendChild(divDom)
      // 创建一个子图层列表div
      const subLayerList = document.createElement('div')
      subLayerList.id = subLayerListId
      addIGSMapImageSublayerList(subLayerList, layers[i])
      newLayerDiv.appendChild(subLayerList)
      listDom.appendChild(newLayerDiv)
    }
    // 其他类型的图层，直接添加一个标题div
    else {
      listDom.appendChild(divDom)
    }
  }
}
