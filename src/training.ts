import {Dog} from './Dog'
import {Cat} from './Cat'

(function(){

    let target : string = 'dog';

    let dd = null;
    // if(target && target === 'dog'){
        dd = new Dog('ddong',22);
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