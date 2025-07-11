

import {Shape} from './Shape';

/**
 * @private
 * @class  Zondy.LevelRenderer.SmicRectangle
 * @classdesc 矩形。
 * @extends Zondy.LevelRenderer.Shape
 * @example
 *   var shape = new Zondy.LevelRenderer.SmicRectangle({
 *         style: {
 *             x: 0,
 *             y: 0,
 *             width: 100,
 *             height: 100,
 *             radius: 20
 *         }
 *     });
 *   levelRenderer.addShape(shape);
 */
class SmicRectangle extends Shape {

    /**
     * @member {Object} Zondy.LevelRenderer.SmicRectangle.prototype.style
     * @description 绘制样式。
     *
     * @param {number} style.x - 左上角 x 坐标，必设参数。
     * @param {number} style.y - 左上角 y 坐标，必设参数。
     * @param {number} style.width - 宽度，必设参数。
     * @param {number} style.height - 高度，必设参数。
     * @param {Array} style.radius - 矩形圆角，可以用数组分别指定四个角的圆角，设：左上、右上、右下、左下角的半径依次为 r1、r2、r3、r4 则 radius为 [r1、r2、r3、r4 ]。
     * @param {string} style.brushType - 画笔类型。可设值："fill", "stroke", "both"。默认值："fill"。
     * @param {string} style.color - 填充颜色。默认值："#000000'"。
     * @param {string} style.strokeColor - 描边颜色。默认值："#000000'"。
     * @param {string} style.lineCape - 线帽样式。可设值："butt", "round", "square"。默认值："butt"。
     * @param {number} style.lineWidth - 描边宽度。默认值：1。
     * @param {number} style.opacity - 绘制透明度。默认值：1。
     * @param {number} style.shadowBlur - 阴影模糊度，大于0有效。默认值：0。
     * @param {number} style.shadowColor - 阴影颜色。默认值："#000000'"。
     * @param {number} style.shadowOffsetX - 阴影横向偏移。默认值：0。
     * @param {number} style.shadowOffsetY - 阴影纵向偏移。默认值：0。
     * @param {string} style.text - 图形中的附加文本。默认值：""。
     * @param {string} style.textColor - 文本颜色。默认值："#000000'"。
     * @param {string} style.textFont - 附加文本样式。示例:'bold 18px verdana'。
     * @param {string} style.textPosition - 附加文本位置。可设值："inside", "left", "right", top", "bottom", "end"。默认值："end"。
     * @param {string} style.textAlign - 附加文本水平对齐。可设值："start", "end", "left", "right", "center"。默认根据 textPosition 自动设置。
     * @param {string} style.textBaseline - 附加文本垂直对齐。可设值："top", "bottom", "middle", "alphabetic", "hanging", "ideographic"。默认根据 textPosition 自动设置。
     */
    /**
     * @function Zondy.LevelRenderer.SmicRectangle.constructor
     * @description 构造函数。
     *
     * @param {Array} options - shape 的配置（options）项，可以是 shape 的自有属性，也可以是自定义的属性。
     *
     */
    constructor(options) {
        super(options);
        /**
         * @member {string} Zondy.LevelRenderer.SmicRectangle.prototype.type
         * @description 图形类型.
         */
        this.type = 'smicrectangle';
        if (!this.refOriginalPosition || this.refOriginalPosition.length !== 2) {
            this.refOriginalPosition = [0, 0];
        }
        this.CLASS_NAME = "Zondy.LevelRenderer.Shape.SmicRectangle";
    }

    /**
     * @function Zondy.LevelRenderer.SmicRectangle.prototype.destroy
     * @description 销毁对象，释放资源。调用此函数后所有属性将被置为 null。
     */
    destroy() {
        this.type = null;
        super.destroy();
    }

    /**
     * APIMethod: _buildRadiusPath
     * 创建矩形的圆角路径。
     *
     * Parameters:
     * ctx - {CanvasRenderingContext2D} Context2D 上下文。
     * style - {Object} style。
     *
     */
    _buildRadiusPath(ctx, style) {
        if (!this.refOriginalPosition || this.refOriginalPosition.length !== 2) {
            this.refOriginalPosition = [0, 0];
        }
        var __OP = this.refOriginalPosition;

        // 左上、右上、右下、左下角的半径依次为r1、r2、r3、r4
        // r缩写为1         相当于 [1, 1, 1, 1]
        // r缩写为[1]       相当于 [1, 1, 1, 1]
        // r缩写为[1, 2]    相当于 [1, 2, 1, 2]
        // r缩写为[1, 2, 3] 相当于 [1, 2, 3, 2]
        var x = style.x + __OP[0];
        var y = style.y + __OP[1];
        var width = style.width;
        var height = style.height;
        var r = style.radius;
        var r1;
        var r2;
        var r3;
        var r4;

        if (typeof r === 'number') {
            r1 = r2 = r3 = r4 = r;
        } else if (r instanceof Array) {
            if (r.length === 1) {
                r1 = r2 = r3 = r4 = r[0];
            } else if (r.length === 2) {
                r1 = r3 = r[0];
                r2 = r4 = r[1];
            } else if (r.length === 3) {
                r1 = r[0];
                r2 = r4 = r[1];
                r3 = r[2];
            } else {
                r1 = r[0];
                r2 = r[1];
                r3 = r[2];
                r4 = r[3];
            }
        } else {
            r1 = r2 = r3 = r4 = 0;
        }

        var total;
        if (r1 + r2 > width) {
            total = r1 + r2;
            r1 *= width / total;
            r2 *= width / total;
        }
        if (r3 + r4 > width) {
            total = r3 + r4;
            r3 *= width / total;
            r4 *= width / total;
        }
        if (r2 + r3 > height) {
            total = r2 + r3;
            r2 *= height / total;
            r3 *= height / total;
        }
        if (r1 + r4 > height) {
            total = r1 + r4;
            r1 *= height / total;
            r4 *= height / total;
        }
        ctx.moveTo(x + r1, y);
        ctx.lineTo(x + width - r2, y);
        r2 !== 0 && ctx.quadraticCurveTo(
            x + width, y, x + width, y + r2
        );
        ctx.lineTo(x + width, y + height - r3);
        r3 !== 0 && ctx.quadraticCurveTo(
            x + width, y + height, x + width - r3, y + height
        );
        ctx.lineTo(x + r4, y + height);
        r4 !== 0 && ctx.quadraticCurveTo(
            x, y + height, x, y + height - r4
        );
        ctx.lineTo(x, y + r1);
        r1 !== 0 && ctx.quadraticCurveTo(x, y, x + r1, y);
    }

    /**
     * @function Zondy.LevelRenderer.SmicRectangle.prototype.buildPath
     * @description 创建矩形路径。
     *
     * @param {CanvasRenderingContext2D} ctx - Context2D 上下文。
     * @param {Object} style - style。
     *
     */
    buildPath(ctx, style) {
        if (!this.refOriginalPosition || this.refOriginalPosition.length !== 2) {
            this.refOriginalPosition = [0, 0];
        }
        var __OP = this.refOriginalPosition;

        if (!style.radius) {
            ctx.moveTo(style.x + __OP[0], style.y + __OP[1]);
            ctx.lineTo((style.x + __OP[0]) + style.width, (style.y + __OP[1]));
            ctx.lineTo((style.x + __OP[0]) + style.width, (style.y + __OP[1]) + style.height);
            ctx.lineTo((style.x + __OP[0]), (style.y + __OP[1]) + style.height);
            ctx.lineTo(style.x + __OP[0], style.y + __OP[1]);
            // ctx.rect(style.x, style.y, style.width, style.height);
        } else {
            this._buildRadiusPath(ctx, style);
        }
        ctx.closePath();
        return;
    }

    /**
     * @function Zondy.LevelRenderer.SmicRectangle.prototype.getRect
     * @description 计算返回矩形包围盒矩阵。该包围盒是直接从四个控制点计算，并非最小包围盒。
     *
     * @param {Object} style - style
     * @return {Object} 边框对象。包含属性：x，y，width，height。
     */
    getRect(style) {
        if (!this.refOriginalPosition || this.refOriginalPosition.length !== 2) {
            this.refOriginalPosition = [0, 0];
        }
        var __OP = this.refOriginalPosition;

        if (style.__rect) {
            return style.__rect;
        }

        var lineWidth;
        if (style.brushType === 'stroke' || style.brushType === 'fill') {
            lineWidth = style.lineWidth || 1;
        } else {
            lineWidth = 0;
        }
        style.__rect = {
            x: Math.round((style.x + __OP[0]) - lineWidth / 2),
            y: Math.round((style.y + __OP[1]) - lineWidth / 2),
            width: style.width + lineWidth,
            height: style.height + lineWidth
        };

        return style.__rect;
    }
}

export {SmicRectangle};
