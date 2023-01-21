import { gql, useQuery} from '@apollo/client'
import './App.css';

const query = gql`
query GetTestingTable {
  testing_table {
    id
    value
  }
}
`

function Testing() {
  
    const { data, loading, error } = useQuery(query);
  
  return (
      <div className="App">
        {JSON.stringify(data?.testing_table)}
      </div>
  );
}

export default Testing;
