import clientG  from 'graphql-client';
import config from '../config/defaults.json';

var client = clientG({
  url: config.api+'/graphql',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('_uewyqtkgfjhdLogin')
  }
});

export default client;
