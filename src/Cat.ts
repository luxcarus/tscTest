import {Animal} from './Animal';
export class Cat implements Animal{
    public species:string = 'bird';
    public canFly:boolean = false;
    public name:string = null;

    constructor(){
        
    }

    move():void{
        console.log('flying');
    }
    speak():void{
        console.log('quack');
    }

}