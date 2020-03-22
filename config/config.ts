import convict from 'convict';

// Define a schema
export const config = convict({
  env: {
    doc: 'Application Environment',
    format: ['development', 'test','production'],
    default: 'development',
    env: 'NODE_ENV'
  },
  apiConfigs: {
    proPublicaCongressApi: {
      hostname: '',
      apiKey: 'API_KEY'
    }
  }
});
 
// Get environment dependent configuration
var env = config.get('env');

// Load environment dependent configuration
config.loadFile('./config/environment/' + env + '.json');

// Perform validation
config.validate({allowed: 'strict'});