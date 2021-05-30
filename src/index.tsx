import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({

  models: {
    note: Model,
  },

  routes() {

    this.namespace = '/api';

    this.get('/notes', (schema) => {
      return this.schema.all('note');
    });

    this.post('/notes', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      
      return schema.create('note', data);
    })

  },

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);