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
var CanvasGraph = /** @class */ (function (_super) {
    __extends(CanvasGraph, _super);
    function CanvasGraph(canvas) {
        var _this = this;
        var ctx = canvas.getContext("2d");
        if (ctx == null) {
            throw new Error("canvas can not support 2d");
        }
        _this = _super.call(this, new CanvasGraphContext(ctx, canvas.width, canvas.height)) || this;
        _this.canvas = canvas;
        _this.init();
        return _this;
    }
    CanvasGraph.prototype.init = function () {
        var _this = this;
        this.canvas.addEventListener("click", function (e) {
            var x = e.offsetX - _this.canvas.width / 2;
            var y = e.offsetY - _this.canvas.height / 2;
            _this.shapes.map(function (s) { return s.selected = false; });
            var selected_shape = _this.hit(x, y);
            if (selected_shape != null) {
                selected_shape.selected = true;
            }
        });
        var mouse_down = null;
        var position = null;
        var selected_shape;
        this.canvas.addEventListener("mousedown", function (e) {
            var x = e.offsetX - _this.canvas.width / 2;
            var y = e.offsetY - _this.canvas.height / 2;
            _this.shapes.map(function (s) { return s.selected = false; });
            selected_shape = _this.hit(x, y);
            if (selected_shape != null) {
                selected_shape.selected = true;
                mouse_down = { x: e.offsetX, y: e.offsetY };
                position = { x: selected_shape.x, y: selected_shape.y };
            }
        });
        this.canvas.addEventListener("mousemove", function (e) {
            if (mouse_down && position && selected_shape != null) {
                var offset = {
                    x: e.offsetX - mouse_down.x,
                    y: e.offsetY - mouse_down.y
                };
                selected_shape.x = position.x + offset.x;
                selected_shape.y = position.y + offset.y;
            }
        });
        this.canvas.addEventListener("mouseup", function (e) {
            mouse_down = null;
            position = null;
            selected_shape = null;
        });
    };
    return CanvasGraph;
}(Graph));
