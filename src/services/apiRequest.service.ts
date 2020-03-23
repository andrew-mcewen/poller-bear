import * as Https from 'https';
import { HttpsRequestOptions } from '../interfaces/httpsRequestOptions.interface';

export default class ApiRequestService {
        
    constructor() { }

    request(options: HttpsRequestOptions) {
        return new Promise((resolve, reject) => {
            let responseBody = '';
            
            const req = Https.request(options, (res) => {
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
