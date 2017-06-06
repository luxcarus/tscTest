import {Animal} from './Animal';
export class Dog implements Animal{
    public species = 'dog';
    public canFly = false;
    public name = null
    private age : number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    move():void{
        console.log('running');
    }
    speak():void{
        console.log('bow');
    }
}