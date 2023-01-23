import { useState } from 'react';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

import './App.css';
import { SideBar } from './components/SideBar';
import { Chat } from './components/Chat'

const uri = 'http://localhost:8080/v1/graphql/';

function App() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const loggedInUser = Number(window.location.pathname.replace('/', ''));

  
  return (
      <div className="App">
        <div className='ChatApp'>
          <SideBar selectConversation={setSelectedConversation} />
          <Chat selectedConversation={selectedConversation} loggedInUser={loggedInUser} />
          {/* <Testing /> */}
        </div>
      </div>
  );
}

export default App;
