import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client'
import Testing from './Testing';
import './App.css';
import { SideBar } from './components/SideBar';
import { Chat } from './components/Chat';



function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8080/v1/graphql/",
    cache: new InMemoryCache()    //todo: istrazi ovo
  });
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className='ChatApp'>
          <SideBar />
          <Chat />
          {/* <Testing /> */}
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
