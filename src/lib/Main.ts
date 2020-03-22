import "reflect-metadata";
import { PollerConfig } from '../config/config';
import Poller from './Poller';


export default class Main {
    
    constructor() { }

    public startup() {
        
        const poller = new Poller(PollerConfig);         
        
        // Initial start
        poller.poll();
    }
}
