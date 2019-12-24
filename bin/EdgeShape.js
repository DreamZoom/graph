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
var EdgeShape = /** @class */ (function (_super) {
    __extends(EdgeShape, _super);
    function EdgeShape(from, to) {
        var _this = _super.call(this) || this;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    EdgeShape.prototype.distance = function (p1, p2) {
        return Math.sqrt(Math.pow(p2.y - p1.y, 2) + Math.pow(p2.x - p1.x, 2));
    };
    EdgeShape.prototype.getIntersectionPoint = function (p1, p2, p3, p4) {
        var b1 = (p2.y - p1.y) * p1.x + (p1.x - p2.x) * p1.y;
        var b2 = (p4.y - p3.y) * p3.x + (p3.x - p4.x) * p3.y;
        var D = (p2.x - p1.x) * (p4.y - p3.y) - (p4.x - p3.x) * (p2.y - p1.y);
        var D1 = b2 * (p2.x - p1.x) - b1 * (p4.x - p3.x);
        var D2 = b2 * (p2.y - p1.y) - b1 * (p4.y - p3.y);
        return { x: D1 / D, y: D2 / D };
    };
    EdgeShape.prototype.getPoints = function (rect1, p1, p2) {
        var p3 = { x: rect1.x, y: rect1.y };
        var p4 = { x: rect1.x + rect1.width, y: rect1.y };
        var p = this.getIntersectionPoint(p1, p2, p3, p4);
    };
    EdgeShape.prototype.getArc = function (p1, p2) {
        var tan = (p2.y - p1.y) / (p2.x - p1.x);
        return Math.atan(tan);
    };
    EdgeShape.prototype.getLineFunction = function (p1, p2) {
        var a = (p2.y - p1.y) / (p2.x - p1.x);
        var b = p1.y - a * p1.x;
        return {
            xfunc: function (x) {
                return a * x + b;
            },
            yfunc: function (y) {
                return (y - b) / a;
            },
            a: a,
            b: b
        };
    };
    EdgeShape.prototype.K = function (v) {
        if (v > 0)
            return 1;
        if (v == 0)
            return 0;
        return -1;
    };
    EdgeShape.prototype.getBestPoints = function (from, to) {
        var kx = this.K(to.x - from.x);
        var ky = this.K(to.y - from.y);
        var temp1 = {};
        var temp2 = {};
        if (kx == 0) {
            temp1 = { x: from.x, y: from.y + ky * from.height / 2 };
            temp2 = { x: to.x, y: to.y - ky * to.height / 2 };
        }
        else {
            var line = this.getLineFunction(this.from, this.to);
            var line_from = this.getLineFunction(this.from, { x: this.from.x + this.from.width / 2, y: this.from.y + this.from.height / 2 });
            var line_to = this.getLineFunction(this.to, { x: this.to.x + this.to.width / 2, y: this.to.y + this.to.height / 2 });
            if (Math.abs(line_from.a) >= Math.abs(line.a)) {
                temp1.x = from.x + kx * from.width / 2;
                temp1.y = line.xfunc(temp1.x);
            }
            else {
                temp1.y = from.y + ky * from.height / 2;
                temp1.x = line.yfunc(temp1.y);
            }
            if (Math.abs(line_to.a) >= Math.abs(line.a)) {
                temp2.x = this.to.x - kx * this.to.width / 2;
                temp2.y = line.xfunc(temp2.x);
            }
            else {
                temp2.y = this.to.y - ky * this.to.height / 2;
                temp2.x = line.yfunc(temp2.y);
            }
        }
        if (temp1.x > Math.max(from.x, to.x) || temp1.x < Math.min(from.x, to.x) || temp1.y > Math.max(from.y, to.y) || temp1.y < Math.min(from.y, to.y)) {
            temp1 = from;
        }
        if (temp2.x > Math.max(from.x, to.x) || temp2.x < Math.min(from.x, to.x) || temp2.y > Math.max(from.y, to.y) || temp2.y < Math.min(from.y, to.y)) {
            temp2 = to;
        }
        return [temp1, temp2];
    };
    EdgeShape.prototype.render = function (context) {
        var points = this.getBestPoints(this.from, this.to);
        context.drawLine(points[0].x, points[0].y, points[1].x, points[1].y, null);
    };
    return EdgeShape;
}(Shape));
