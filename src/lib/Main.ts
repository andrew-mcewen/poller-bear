import './Environment';
import { config } from '../../config/config';

import Poller from './Poller';
import { PollerOptions } from './../interface/PollerOptions.interface';

export default class Main {
    
    constructor() { 

    }

    startup() {
        // Define poller options
        const pollerOptions: PollerOptions = {
            name: 'ProPublicaCongressApi',
            httpsRequestOptions: {
                hostname: 'api.propublica.org',
                port: 443,
                path: '/congress/v1/116/house/members.json',
                method: 'GET',
                headers: {
                    "X-Api-Key": config.get('apiConfigs.proPublicaCongressApi.apiKey')
                }
            },
            frequencyInSeconds: 2
        };

        // Create poller object
        const poller = new Poller(pollerOptions);         
        
        // Launch poller
        poller.poll();        
    }
}
