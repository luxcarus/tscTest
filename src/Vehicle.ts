export abstract class Obigo {
    constructor(){
    }
}
export abstract class WebApi extends Obigo {
    constructor(){
        super();
    }
}
export interface Me {
    domain:string;
    category:string;
    types:any;
}
export abstract class Auto extends WebApi {
    me:Me = {domain:'',category:'',types:{}};
    constructor(){
        super();
    }
    get = () => 'get'
    set = () => 'set'
    subscribe = () => 'subscribe'
    unsubscribe = () => 'unsubscribe'
    getType = () => 'getType'
}
export abstract class Vehicle extends Auto{
    domain:string = 'vehicle'
    constructor(){
        super();
        this.me.domain = 'vehicle';
        // `this.me.version = '1.0.0'
    }
    
}
export class ObgRunningStatus extends Vehicle {
    private VEHICLE_SPEED:string = "vehicleSpeed";
    private DOOR:string = "door";
    private category:string = 'runningStatus'
    constructor(){
        super();
        this.me.category = "runningStatus2";
        this.me.types.VEICLE_SPEED = 'vehicleSpeed2';
        this.me.types.DOOR = 'door2';
    }
}

export enum oem {
    'RNBS','JLR'
}