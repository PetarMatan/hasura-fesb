import { useState } from 'react';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

import './App.css';
import { SideBar } from './components/SideBar';
import { Chat } from './components/Chat'


const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql/',
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:8080/v1/graphql'
}))

// const link = split(({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return kind === 'OperationDefinition' && operation === 'subscription';
//   },
//   wsLink,
//   httpLink
// );

function App() {
  // const client = new ApolloClient({
  //   uri: "http://localhost:8080/v1/graphql/",
  //   cache: new InMemoryCache()    //todo: istrazi ovo
  // });

  const client = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
  });

  const [selectedConversation, setSelectedConversation] = useState(null);

  const loggedInUser = Number(window.location.pathname.replace('/', ''));

  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className='ChatApp'>
          <SideBar selectConversation={setSelectedConversation} />
          <Chat selectedConversation={selectedConversation} loggedInUser={loggedInUser} />
          {/* <Testing /> */}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
