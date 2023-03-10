import { List, ListItem, ListItemText } from '@mui/material';
import { gql, useQuery, useSubscription} from '@apollo/client';

const CHAT_STYLE = { flexGrow: 1, overflow: 'auto', bgcolor: 'background.paper'};

const query = gql`
subscription getMessages($conversationId: Int!) {
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

export function Chat({selectedConversation, loggedInUser}) {
    const { data, loading, error } = useSubscription(query, {
        variables: { 'conversationId': selectedConversation?.id }
      });

    const mapMessages = () => {
        if(!data) {
            return;
        }

        return data.message.map(message => {
            const isLoggedInUser = loggedInUser === message.user_id;

            return (
                <ListItem>
                    <ListItemText 
                        className={`MessageText ${isLoggedInUser ? 'MessageText--Right': 'MessageText--Left'}`}
                        primary={message?.content}
                    />
                </ListItem>
            )
        })
    }

    return (
        <div className="ChatModule">
            <div className="ChatHeader">
                <h2>
                    {selectedConversation ?  `Chat with ${selectedConversation?.chat_user.name}` : ''}
                </h2>
            </div>
            <div className="MessagesList">
                <List sx={CHAT_STYLE}>
                    {mapMessages()}
                </List>
            </div>
        </div>
    )
}