import { gql, useQuery} from '@apollo/client'
import './App.css';

const query = gql`
query getMessages($conversationId: Int!) {
  message(where: {conversation_id: {_eq: $conversationId}}) {
    content
    id
    created_at
    user_id
    chat_user {
      name
      id
      number
    }
  }
}
`

function Testing() {
    const { data, loading, error } = useQuery(query, {
      variables: { 'conversationId': 3 }
    });
  
  return (
      <div className="App">
        {data?.data}
        {data?.message.map(msg => <div key={msg.id}>{msg.content}</div>)}
      </div>
  );
}

export default Testing;
