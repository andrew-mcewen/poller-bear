import "reflect-metadata";
import "./Env";
import { config } from '../../config/config';

import Poller from './Poller';
import { PollerOptions } from './../interface/PollerOptions.interface';

export default class Main {
    
    constructor() { 
        
    }

    public startup() {
        
        console.log('config: ', config);
        console.log(process.env.NODE_ENV);

        //const poller = new Poller();         
        
        // Initial start
        //poller.poll();
    }
}
