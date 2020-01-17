"use strict";
var Graph = /** @class */ (function () {
    function Graph(context) {
        var _this = this;
        this.shapes = [];
        this.context = context;
        var render = function () {
            _this.render();
            window.requestAnimationFrame(render);
        };
        render();
    }
    Graph.prototype.addShape = function (shape) {
        this.shapes.push(shape);
    };
    Graph.prototype.removeShape = function (shape) {
    };
    Graph.prototype.render = function () {
        var _this = this;
        this.context.clear();
        this.shapes.map(function (shape) {
            shape.render(_this.context);
        });
    };
    Graph.prototype.hit = function (x, y) {
        for (var i = 0; i < this.shapes.length; i++) {
            if (this.shapes[i].hit(x, y)) {
                return this.shapes[i];
            }
        }
        return null;
    };
    return Graph;
}());
