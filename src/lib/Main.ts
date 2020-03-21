import Poller from './Poller';

export default class Main {

    constructor(){}

    public startup(){
        const pollerConfig = {
            name: 'ProPublica Congress API',
            endpoint: {
                hostname: 'api.propublica.org',
                port: 443,
                path: '/congress/v1/116/house/members.json',
                method: 'GET',
                headers: {
                  'X-API-Key': 'VZy4HZ7YVYbONqAd0c2PoSZgZlrbfPsqi91Spnmx'
                }
            },
            frequencyInSeconds: 5
        };
        
        const poller = new Poller(pollerConfig);         
        
        // Initial start
        poller.poll();
    }
}
