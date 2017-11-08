import clientG  from 'graphql-client';

var client = clientG({
  url: 'http://agronevada-back-juankn.c9users.io:8081/graphql',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('_uewyqtkgfjhdLogin')
  }
});

export default client;