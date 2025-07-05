var GeometryEngine = zondy.geometry.GeometryEngine
var { SketchEditMode, ViewEventType } = zondy.enum
var LineString = zondy.geometry.LineString
var SketchPolygonDrawTool = zondy.tool.sketch.SketchPolygonDrawTool

class SketchEllipseDrawTool extends SketchPolygonDrawTool {
  constructor(options) {
    super(options)
  }

  /**
   * @description 鼠标绘制图形：鼠标单击绘制区的一个顶点；鼠标移动，区图形随鼠标位置变动；鼠标双击，完成区图形绘制。
   */
  drawFeature() {
    this._editMode = SketchEditMode.DRAWING
    // 屏蔽地图默认拖拽事件
    this.view._mapActionControl('drag-pan', false)
    // 控制鼠标移动事件频率
    const timer = null
    // 当前正在绘制的图形对象
    let feature = null
    // 图形初始半径
    let semiMajorAxis = 0
    let semiMinorAxis = 0
    // 图形初始中心坐标
    let centerCoord = null
    // 修改交互鼠标样式为十字
    this.cursorStyle = this.view.cursor
    if (
      this.cursorStyle === undefined ||
      this.cursorStyle === null ||
      this.cursorStyle === ''
    ) {
      this.view.cursor = 'crosshair'
    }
    let interactDoms = this._getInteractiveDom()
    // 初始捕获
    this._setInitSnap()

    // 处理鼠标点击事件。点击后渲染端点图形，渲染区图形
    const handlerDrag = (options) => {
      clearTimeout(timer)
      // 清除初始捕获事件
      this._stopInitSnap()
      // 清除捕获效果（上一次）
      if (this.sketchStage.snapGraphics.length > 0) {
        this.sketchStage.snapGraphics.forEach((feature) => {
          this._removeFeatureFromMap(feature)
        })
        this.sketchStage.snapGraphics = []
      }
      if (options.button === 0) {
        if (options.action === 'start') {
          if (!this._snapPoint) {
            // 如果没有捕获结果，则此时坐标点为屏幕地理坐标
            centerCoord = centerCoord || this.view.toMap(options.origin)
          } else {
            // 如果有捕获结果，则纠正此时鼠标坐标为捕获坐标点
            centerCoord = this._snapPoint
          }
          // 发送绘制一个顶点事件
          this._fireDrawVertexEvent()
        } else if (options.action === 'update') {
          let curCoord = this.view.toMap({ x: options.x, y: options.y })
          this._snapPoint = this.getSnapGraphics(curCoord)
          if (this._snapPoint) {
            // 如果有捕获结果，则纠正此时鼠标坐标为捕获坐标点
            curCoord = this._snapPoint
          }
          semiMajorAxis = GeometryEngine.planarLength(
            new LineString({
              coordinates: [
                centerCoord.coordinates,
                [curCoord.coordinates[0], centerCoord.coordinates[1]]
              ],
              spatialReference: this._spatialReference
            })
          )
          semiMinorAxis = GeometryEngine.planarLength(
            new LineString({
              coordinates: [
                centerCoord.coordinates,
                [centerCoord.coordinates[0], curCoord.coordinates[1]]
              ],
              spatialReference: this._spatialReference
            })
          )
          const coordinates = GeometryEngine.getEllipseCoordinates(
            centerCoord,
            semiMajorAxis,
            semiMinorAxis
          )
          if (!feature) {
            feature = this._getFeature(coordinates)
            this._addFeaturesToMap(feature)
            this.sketchStage.entityGraphic = feature
          } else {
            feature.geometry.coordinates = JSON.parse(
              JSON.stringify([coordinates])
            )
          }
          // 修改交互鼠标样式，屏蔽交互元素默认样式
          const doms = this._getInteractiveDom()
          interactDoms = interactDoms.concat(doms)
          this._removeInteractiveStyle(doms)

          // 发送绘制时鼠标位置改变事件
          this._fireChangeCursorEvent(feature)
        } else if (options.action === 'end') {
          // 停止绘制
          this.stop()
          // 清除捕获效果
          if (this.sketchStage.snapGraphics.length > 0) {
            this.sketchStage.snapGraphics.forEach((feature) => {
              this._removeFeatureFromMap(feature)
            })
            this.sketchStage.snapGraphics = []
          }
          centerCoord = null
          this._editMode = SketchEditMode.NONE
          // 恢复鼠标样式
          this.view.cursor = this.cursorStyle
          this._addInteractiveStyle(interactDoms)

          // 发送绘制完成事件（废弃）
          this.fire('drawn', { geometry: feature.geometry, feature }, self)
          // 发送绘制一个顶点事件
          this._fireDrawVertexEvent(feature)
          // 发送绘制完成事件
          this._fireStopDrawEvent(feature)
          // 恢复地图默认拖拽事件
          this.view._mapActionControl('drag-pan', true)
        }
      }
    }
    // 注册绘制事件
    this._drawEventHandlers.push(handlerDrag)
    this.view.on(ViewEventType.drag, handlerDrag)
  }
}

window.SketchEllipseDrawTool = SketchEllipseDrawTool
