webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.species = 'dog';
        this.canFly = false;
        this.name = null;
        this.name = name;
        this.age = age;
    }
    Dog.prototype.move = function () {
        console.log('running');
    };
    Dog.prototype.speak = function () {
        console.log('bow');
    };
    return Dog;
}());
exports.Dog = Dog;


/***/ })
],[1]);