import ApiService from '../service/ApiRequest.service';
import { PollerOptions } from './../interface/PollerOptions.interface';

export default class Poller {    
    apiService: ApiService;
    pollerOptions: PollerOptions;

    constructor(pollerOptions: PollerOptions) {        
        this.apiService =  new ApiService();
        this.pollerOptions = pollerOptions;
    }

    public poll(): void {
        const requestOptions = {
            hostname: this.pollerOptions.httpsRequestOptions.hostname,
            port: this.pollerOptions.httpsRequestOptions.port,
            path: this.pollerOptions.httpsRequestOptions.path,
            method: this.pollerOptions.httpsRequestOptions.method,
            headers: this.pollerOptions.httpsRequestOptions.headers 
        };

        console.log(`\nNow polling ${this.pollerOptions.name}\n`);

        this.apiService.request(requestOptions).then((responseBody: string) => {
            console.log(responseBody);
            setTimeout(() => {
                this.poll();
            }, this.pollerOptions.frequencyInSeconds * 1000 );
        });        
    }
}
