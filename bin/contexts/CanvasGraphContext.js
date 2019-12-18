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
        this.ctx.fillRect(this.tx(x), this.ty(y), width, height);
    };
    CanvasGraphContext.prototype.drawImage = function (image, x, y, width, height) {
        var _this = this;
        var img = new Image();
        img.onload = function () {
            _this.ctx.drawImage(img, _this.tx(x) - width / 2, _this.ty(y) - height / 2, width, height);
        };
        img.src = image;
    };
    CanvasGraphContext.prototype.drawLine = function (x1, y1, x2, y2, style) {
        this.ctx.moveTo(this.tx(x1), this.ty(y1));
        this.ctx.lineTo(this.tx(x2), this.ty(y2));
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "#AA394C";
        this.ctx.stroke();
    };
    return CanvasGraphContext;
}());
