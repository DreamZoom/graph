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
var ImageShape = /** @class */ (function (_super) {
    __extends(ImageShape, _super);
    function ImageShape(src) {
        var _this = _super.call(this) || this;
        _this.src = src || "";
        return _this;
    }
    ImageShape.prototype.render = function (context) {
        context.drawImage(this.src, this.x, this.y);
    };
    return ImageShape;
}(NodeShape));