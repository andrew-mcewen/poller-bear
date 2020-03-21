import * as Https from 'https';
import { ApiRequestOptions } from '../interface/ApiRequestOptions.interface';

export default class ApiRequestService {
    
    options: ApiRequestOptions;

    constructor(options: ApiRequestOptions) {
        this.options = options;
    }

    request() {
        return new Promise((resolve, reject) => {
            let responseBody = '';
            
            const req = Https.request(this.options, (res) => {
                res.on('data', (chunk) => {                  
                    responseBody += chunk;
                });

                res.on('error', (err) => {
                    console.log(err);
                    reject(err.message);
                });

                res.on('end', () => {
                    resolve(JSON.parse(responseBody))
                });                            
            });
            
            req.end();
        });
    }
}
