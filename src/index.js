import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ActionCable from 'actioncable';
import ActionCableLink from 'graphql-ruby-client/dist/subscriptions/ActionCableLink';
import { ApolloLink } from 'apollo-link';
import * as serviceWorker from './serviceWorker';
import App from './App';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const cable = ActionCable.createConsumer('ws://localhost:3000/cable');

const hasSubscriptionOperation = ({ query: { definitions } }) => definitions.some(
  ({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription',
);

const link = ApolloLink.split(
  hasSubscriptionOperation,
  new ActionCableLink({ cable }),
  httpLink,
);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
