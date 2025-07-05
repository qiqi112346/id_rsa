/**
 * 支持小数的滑块slider
 * 对layui.slider进行封装，实现支持小数
 */

layui.define([], function (exports) {
  ('use strict');
  const $ = layui.$;

  class decimalSlider {
    constructor(options) {
      // 默认options
      const defaultOptions = {
        // 值
        value: 0,
        // 小数位数
        decimalPlaces: 0,
        // 最小值
        min: 0,
        // 最大值
        max: 100,
        // 步长
        step: 1,
        // 是否展示input框
        input: true,
        //自定义提示文本

      };
      this.options = options;
      this.config = $.extend({}, defaultOptions, options);
      // 转换成非负整数
      this.config.decimalPlaces = Math.abs(parseInt(this.config.decimalPlaces));
      // 所有值放大10的decimalPlaces倍成整数
      this.changeValue();
      // 创建新input
      this.createInput();
      // 处理setTips回调
      this.initSetTips();
      // 处理change回调
      this.initChange();
      // 创建滑块
      this.slider = createSlider(this.config);

      return this.slider;
    }

    // 所有值放大10的decimalPlaces倍成整数
    changeValue() {
      this.config.value *= Math.pow(10, this.config.decimalPlaces);
      this.config.min *= Math.pow(10, this.config.decimalPlaces);
      this.config.max *= Math.pow(10, this.config.decimalPlaces);
      this.config.step *= Math.pow(10, this.config.decimalPlaces);
    }

    // 使用一个input框覆盖原本的input
    createInput() {
      if (this.config.elem && $(this.config.elem).length > 0) {
        const html = `<input class="layui-input decimal-slider-layui-input" value="${this.options.value}" style="width: 49px;height: 32px;">`;
        $(this.config.elem).after(html);
        const _this = this;
        // 失去焦点的时候，修改slider的值
        $(this.config.elem).siblings('.decimal-slider-layui-input').on('blur', function (res) {
          let value = $(res.target).val();
          value = isNaN(Number(value)) ? 0 : Number(value).toFixed(_this.config.decimalPlaces);
          value *= Math.pow(10, _this.config.decimalPlaces);
          _this.slider.setValue(value);
        });
      }
    }

    // 处理setTips回调
    initSetTips() {
      if (this.config.decimalPlaces > 0) {
        const _this = this;
        this.config.setTips = function (value) {
          value /= Math.pow(10, _this.config.decimalPlaces);
          if (_this.options.hasOwnProperty('setTips')) {
            return _this.options.setTips(value);
          } else {
            return value;
          }
        };
      }
    }

    // 处理change回调
    initChange() {
      if (this.config.decimalPlaces > 0) {
        const _this = this;
        this.config.change = function (value) {
          value /= Math.pow(10, _this.config.decimalPlaces);
          // 同时修改新input框值
          $(_this.config.elem).siblings('.decimal-slider-layui-input').val(value);
          if (_this.options.hasOwnProperty('change')) {
            return _this.options.change(value);
          }
        };
      }
    }
  }

  // 调用layui.slider，创建滑块
  function createSlider(options) {
    return layui.slider.render(options);
  }

  layui.link(layui.cache.base + 'decimalSlider/index.css');
  exports('decimalSlider', { render: options => new decimalSlider(options) });
});