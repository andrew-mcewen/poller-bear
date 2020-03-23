import { config } from '../../../config/config';

import Poller from '../poller/poller';

export default class Main {
    
    constructor() { }

    startup() {
        //Startup message
        console.log('Welcome to Poller!');
        console.log('Running in Environment: ', process.env.NODE_ENV);

        // Define poller options
        const pollerOptions: any = config.get('proPublicaCongressApiPollerConfig');

        // Create poller object
        const poller = new Poller(pollerOptions);         
        
        // Launch poller
        poller.poll();        
    }
}
