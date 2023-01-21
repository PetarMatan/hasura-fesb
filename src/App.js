import {useEffect, useState} from 'react';
import {gql} from '@apollo/client'
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  //Fetching users data
  const fetchData = async() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query: "query GetTestingTable {\n  testing_table {\n    id\n\t\tvalue\n  }\n}\n    ",
      variables: {}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };

    const res = await fetch("http://localhost:8080/v1/graphql", requestOptions)
    const usersData = await res.json();
    setUsers(usersData.data.testing_table[0]);
  }
  useEffect(() => {
    // Calling fetchData Method
    fetchData()

  }, [])
  return (
    <div className="App">
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
