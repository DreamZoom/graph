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
        canvas.addEventListener("mousedown", function (e) {
            console.log(e);
        });
        return _this;
    }
    return CanvasGraph;
}(Graph));
