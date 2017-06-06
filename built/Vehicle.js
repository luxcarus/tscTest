"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Obigo = (function () {
    function Obigo() {
    }
    return Obigo;
}());
exports.Obigo = Obigo;
var WebApi = (function (_super) {
    __extends(WebApi, _super);
    function WebApi() {
        return _super.call(this) || this;
    }
    return WebApi;
}(Obigo));
exports.WebApi = WebApi;
var Auto = (function (_super) {
    __extends(Auto, _super);
    function Auto() {
        var _this = _super.call(this) || this;
        _this.me = { domain: '', category: '', types: {} };
        _this.get = function () { return 'get'; };
        _this.set = function () { return 'set'; };
        _this.subscribe = function () { return 'subscribe'; };
        _this.unsubscribe = function () { return 'unsubscribe'; };
        _this.getType = function () { return 'getType'; };
        return _this;
    }
    return Auto;
}(WebApi));
exports.Auto = Auto;
var Vehicle = (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle() {
        var _this = _super.call(this) || this;
        _this.domain = 'vehicle';
        _this.me.domain = 'vehicle';
        return _this;
        // this.me.version = '1.0.0'
    }
    return Vehicle;
}(Auto));
exports.Vehicle = Vehicle;
var ObgRunningStatus = (function (_super) {
    __extends(ObgRunningStatus, _super);
    function ObgRunningStatus() {
        var _this = _super.call(this) || this;
        _this.VEHICLE_SPEED = "vehicleSpeed";
        _this.DOOR = "door";
        _this.category = 'runningStatus';
        _this.me.category = "runningStatus2";
        _this.me.types.VEICLE_SPEED = 'vehicleSpeed2';
        _this.me.types.DOOR = 'door2';
        return _this;
    }
    return ObgRunningStatus;
}(Vehicle));
exports.ObgRunningStatus = ObgRunningStatus;
var oem;
(function (oem) {
    oem[oem["RNBS"] = 0] = "RNBS";
    oem[oem["JLR"] = 1] = "JLR";
})(oem = exports.oem || (exports.oem = {}));
