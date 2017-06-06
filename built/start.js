"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = require("./Vehicle");
(function () {
    // console.log(oem);
    // console.log(oem.RNBS);
    // console.log(oem[0]);
    var vehicle = new Vehicle_1.ObgRunningStatus();
    console.log(vehicle);
    console.log(vehicle.get());
})();
