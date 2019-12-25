"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        var _this = _super.call(this) || this;
        _this.selected = false;
        _this.x = 0;
        _this.y = 0;
        _this.width = 100;
        _this.height = 100;
        _this.alpha = 1;
        _this.animations = [];
        return _this;
    }
    Shape.prototype.beforeRender = function (context) {
    };
    Shape.prototype.render = function (context) {
        this.beforeRender(context);
        this.doRender(context);
        this.afterRender(context);
    };
    Shape.prototype.doRender = function (context) {
    };
    Shape.prototype.afterRender = function (context) {
        var _this = this;
        this.animations.map(function (a) {
            a.call(_this, _this);
        });
    };
    Shape.prototype.hit = function (x, y) {
        return false;
    };
    Shape.prototype.getAnchorPoints = function () {
        return [];
    };
    Shape.prototype.animate = function (animateFunc) {
        this.animations.push(animateFunc);
    };
    return Shape;
}(Emiter));
