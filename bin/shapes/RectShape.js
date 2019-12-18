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
var RectShape = /** @class */ (function (_super) {
    __extends(RectShape, _super);
    function RectShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectShape.prototype.render = function (context) {
        context.drawRect(this.x, this.y, this.width, this.height, null);
    };
    return RectShape;
}(NodeShape));
