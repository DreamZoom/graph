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
    EdgeShape.prototype.getBestPoint = function (points_1, points_2) {
        var map = {};
        for (var i = 0; i < points_1.length; i++) {
            for (var j = 0; j < points_2.length; j++) {
                var distance = this.distance(points_1[i], points_2[j]);
                map[(i + "-" + j)] = { i: i, j: j, distance: distance };
            }
        }
        var min = "";
        for (var k in map) {
            if (min == "") {
                min = k;
            }
            else {
                if (map[min].distance > map[k].distance) {
                    min = k;
                }
            }
        }
        if (min != "") {
            return [points_1[map[min].i], points_2[map[min].j]];
        }
        return [];
    };
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
    EdgeShape.prototype.render = function (context) {
        var points_1 = this.from.getAnchorPoints();
        var points_2 = this.to.getAnchorPoints();
        var points = this.getBestPoint(points_1, points_2);
        if (points.length == 2) {
            context.drawLine(points[0].x, points[0].y, points[1].x, points[1].y, null);
        }
    };
    return EdgeShape;
}(Shape));
