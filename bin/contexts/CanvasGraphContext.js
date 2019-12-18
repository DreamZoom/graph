"use strict";
var CanvasGraphContext = /** @class */ (function () {
    function CanvasGraphContext(canvas) {
        this.canvas = canvas;
    }
    CanvasGraphContext.prototype.drawRect = function (x, y, width, height, style) {
        this.canvas.fillStyle = "#FF0000";
        this.canvas.fillRect(x, y, width, height);
    };
    CanvasGraphContext.prototype.drawImage = function (image, x, y) {
        var _this = this;
        var img = new Image();
        img.onload = function () {
            _this.canvas.drawImage(img, x, y);
        };
        img.src = image;
    };
    CanvasGraphContext.prototype.drawLine = function (x1, y1, x2, y2, style) {
        this.canvas.moveTo(x1, y1);
        this.canvas.lineTo(x2, y2);
        this.canvas.lineWidth = 2;
        this.canvas.strokeStyle = "#AA394C";
        this.canvas.stroke();
    };
    return CanvasGraphContext;
}());
