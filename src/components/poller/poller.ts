import { HttpsRequestOptions } from '../../interfaces/httpsRequestOptions.interface';
import ApiService from '../../services/apiRequest.service';
import { PollerOptions } from './interfaces/PollerOptions.interface';

export default class Poller {    
    apiService: ApiService;
    pollerOptions: PollerOptions;
    requestOptions: HttpsRequestOptions;

    constructor(pollerOptions: PollerOptions) {        
        this.apiService =  new ApiService();
        this.pollerOptions = pollerOptions;
        this.requestOptions = {
            hostname: this.pollerOptions.httpsRequestOptions.hostname,
            port: this.pollerOptions.httpsRequestOptions.port,
            path: this.pollerOptions.httpsRequestOptions.path,
            method: this.pollerOptions.httpsRequestOptions.method,
            headers: this.pollerOptions.httpsRequestOptions.headers 
        }
    }

    public async poll(): Promise<any> {
        try {            
            console.log(`\nNow polling ${this.pollerOptions.name}\n`);
            const responseBody = await this.apiService.request(this.requestOptions);            
            console.dir(responseBody, { depth: null, colors: true });
            setTimeout(() => { 
                this.poll(); 
            }, this.pollerOptions.frequencyInSeconds * 1000);            
        } catch (err){
            console.log(err);
        }
    }
}
