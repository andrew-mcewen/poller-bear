import * as dotenv from 'dotenv';

dotenv.config();

export const PollerConfig = {
    name: 'ProPublica Congress API',
    httpsRequestOptions: {
        hostname: 'api.propublica.org',
        port: 443,
        path: '/congress/v1/116/house/members.json',
        method: 'GET',
        headers: {            
          'X-API-Key': process.env.PROPUBLICA_API_KEY
        }
    },
    frequencyInSeconds: 5
}
