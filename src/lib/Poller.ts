import ApiService from '../service/ApiRequest.service';
import { PollerOptions } from '../interface/PollerOptions.interface';

export default class Poller {    
    apiService: ApiService;
    pollerOptions: PollerOptions;

    constructor(pollerConfig: PollerOptions) {
        this.apiService =  new ApiService();
        this.pollerOptions = pollerConfig;
    }

    poll() {
        console.log(`Now polling ${this.pollerOptions.name}...`);
        this.apiService.request(this.pollerOptions.httpsRequestOptions).then((responseBody: string) => {
            console.log(responseBody);
            setTimeout(() => {
                this.poll();
            }, this.pollerOptions.frequencyInSeconds * 1000 );
        });        
    }
}
