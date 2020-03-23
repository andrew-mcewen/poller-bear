import './env';
import convict from 'convict';

// Define a schema
export const config = convict({
  env: {
    doc: 'Application Environment',
    format: ['development', 'test', 'production'],
    default: 'development',
    env: 'NODE_ENV'
  },
  proPublicaCongressApiPollerConfig: {
    name: 'ProPublicaCongressApi',
    httpsRequestOptions: {
      hostname: 'api.propublica.org',
      port: 443,
      path: '/congress/v1/116/house/members.json',
      method: 'GET',
      headers: {
        "X-Api-Key": process.env.PROPUBLICA_API_KEY
      }
    },
    frequencyInSeconds: 1
  }
});

// Get environment dependent configuration
var env = config.get('env');

// Load environment dependent configuration
config.loadFile('./config/environments/' + env + '.json');

// Perform validation
config.validate({ allowed: 'strict' });