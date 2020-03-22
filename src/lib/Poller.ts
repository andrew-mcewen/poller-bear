import ApiService from '../service/ApiRequest.service';
import { PollerOptions } from '../interface/PollerOptions.interface';

export default class Poller {    
    apiService: ApiService;
    pollerOptions: PollerOptions;

    constructor(pollerConfig) {        
        this.apiService =  new ApiService();
        this.pollerOptions = pollerConfig;
    }

    poll() {
        this.apiService.request(this.pollerOptions.httpsRequestOptions).then((responseBody: string) => {
            console.log(responseBody);
            setTimeout(() => {
                this.poll();
            }, this.pollerOptions.frequencyInSeconds * 1000 );
        });        
    }
}
