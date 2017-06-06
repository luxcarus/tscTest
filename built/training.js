"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
(function () {
    var target = 'dog';
    var dd = null;
    // if(target && target === 'dog'){
    dd = new Dog_1.Dog('ddong', 22);
    // }else{
    //     dd = new Cat();
    // }
    dd.speak();
    dd.move();
    console.log(dd.name);
    console.log(dd.species);
    console.log(dd.canFly);
    console.log(dd.age);
})();
