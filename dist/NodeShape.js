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
var NodeShape = /** @class */ (function (_super) {
    __extends(NodeShape, _super);
    function NodeShape() {
        return _super.call(this) || this;
    }
    NodeShape.prototype.hit = function (x, y) {
        if (x >= this.x - this.width / 2 && x <= this.x + this.width / 2 && y >= this.y - this.height / 2 && y <= this.y + this.height / 2) {
            return true;
        }
        return false;
    };
    NodeShape.prototype.getAnchorPoints = function () {
        var points = [];
        points.push({ x: this.x - this.width / 2, y: this.y - this.height / 2 });
        points.push({ x: this.x, y: this.y - this.height / 2 });
        points.push({ x: this.x + this.width / 2, y: this.y - this.height / 2 });
        points.push({ x: this.x - this.width / 2, y: this.y });
        points.push({ x: this.x, y: this.y });
        points.push({ x: this.x + this.width / 2, y: this.y });
        points.push({ x: this.x - this.width / 2, y: this.y + this.height / 2 });
        points.push({ x: this.x, y: this.y + this.height / 2 });
        points.push({ x: this.x + this.width / 2, y: this.y + this.height / 2 });
        return points;
    };
    return NodeShape;
}(Shape));
