import {oem} from './Vehicle'
import {ObgRunningStatus} from './Vehicle'

(function(){

    // console.log(oem);
    // console.log(oem.RNBS);
    // console.log(oem[0]);

    var vehicle = new ObgRunningStatus();
    console.log(vehicle);

    console.log(vehicle.get());


})();