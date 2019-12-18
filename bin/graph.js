"use strict";
var Graph = /** @class */ (function () {
    function Graph(context) {
        var _this = this;
        this.shaps = [];
        this.context = context;
        var render = function () {
            _this.render();
            window.requestAnimationFrame(render);
        };
        render();
    }
    Graph.prototype.addShape = function (shape) {
        this.shaps.push(shape);
    };
    Graph.prototype.removeShape = function (shape) {
    };
    Graph.prototype.render = function () {
        var _this = this;
        this.shaps.map(function (shape) {
            shape.render(_this.context);
        });
    };
    return Graph;
}());
