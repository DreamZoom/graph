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
        return _this;
    }
    Shape.prototype.render = function (context) {
    };
    Shape.prototype.hit = function (x, y) {
        return false;
    };
    Shape.prototype.getAnchorPoints = function () {
        return [];
    };
    return Shape;
}(Emiter));
