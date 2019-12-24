"use strict";
var CanvasGraphContext = /** @class */ (function () {
    function CanvasGraphContext(canvas, width, height) {
        this.ctx = canvas;
        this.width = width;
        this.height = height;
    }
    CanvasGraphContext.prototype.tx = function (x) {
        return x + this.width / 2;
    };
    CanvasGraphContext.prototype.ty = function (y) {
        return y + this.height / 2;
    };
    CanvasGraphContext.prototype.drawRect = function (x, y, width, height, style) {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(this.tx(x) - width / 2, this.ty(y) - height / 2, width, height);
    };
    CanvasGraphContext.prototype.drawImage = function (image, x, y, width, height) {
        this.ctx.drawImage(image, this.tx(x) - width / 2, this.ty(y) - height / 2, width, height);
    };
    CanvasGraphContext.prototype.drawLine = function (x1, y1, x2, y2, style) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.tx(x1), this.ty(y1));
        this.ctx.lineTo(this.tx(x2), this.ty(y2));
        this.ctx.lineWidth = 1;
        this.ctx.lineCap = "round";
        this.ctx.strokeStyle = "#AA394C";
        this.ctx.stroke();
    };
    CanvasGraphContext.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    CanvasGraphContext.prototype.setShadow = function () {
        this.ctx.shadowColor = "blue";
        this.ctx.shadowOffsetX = 5;
        this.ctx.shadowOffsetY = 5;
        this.ctx.shadowBlur = 10;
    };
    CanvasGraphContext.prototype.clearShadow = function () {
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
        this.ctx.shadowBlur = 0;
    };
    CanvasGraphContext.prototype.draw = function (shape) {
    };
    return CanvasGraphContext;
}());
