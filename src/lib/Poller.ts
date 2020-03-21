import * as Https from 'https';
import { PollerConfig } from '../interface/PollerConfig';
import ApiService from '../service/ApiRequest.service';

export default class Poller {    
    pollerConfig: PollerConfig;
    apiService: ApiService;

    constructor(pollerConfig: PollerConfig) {
        this.pollerConfig = pollerConfig;
        this.apiService =  new ApiService(pollerConfig.endpoint);
    }

    poll() {
        console.log(`Now polling ${this.pollerConfig.name}...`);
        this.apiService.request().then((responseBody: string) => {
            console.log(responseBody);
            setTimeout(() => {
                this.poll();
            }, this.pollerConfig.frequencyInSeconds * 1000 );
        });        
    }
}
