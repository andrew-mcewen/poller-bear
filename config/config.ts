import * as convict from 'convict';

// Define a schema
export const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  }
});
 
// Load environment dependent configuration
var env = config.get('env');

config.loadFile('/config/' + env + '.json');
 
// Perform validation
config.validate({allowed: 'strict'});