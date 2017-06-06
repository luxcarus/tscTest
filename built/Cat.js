"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat = (function () {
    function Cat() {
        this.species = 'bird';
        this.canFly = false;
        this.name = null;
    }
    Cat.prototype.move = function () {
        console.log('flying');
    };
    Cat.prototype.speak = function () {
        console.log('quack');
    };
    return Cat;
}());
exports.Cat = Cat;
