"use strict";
var Emiter = /** @class */ (function () {
    function Emiter() {
        this.listeners = [];
    }
    Emiter.prototype.addEventListener = function (name, callback) {
        this.listeners.push(new EventListener(name, callback));
    };
    Emiter.prototype.removeEventListener = function (listener) {
        this.listeners = this.listeners.filter(function (item) { return item !== listener; });
    };
    Emiter.prototype.trigger = function (name) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.listeners.map(function (item) { return item.call.apply(_this, args); });
    };
    return Emiter;
}());
