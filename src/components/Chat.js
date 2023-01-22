import { useState } from "react"
import { List, ListItem, ListItemText } from '@mui/material';
import { gql, useQuery, useSubscription} from '@apollo/client';

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
    console.log(selectedConversation?.id);
    const { data, loading, error } = useSubscription(query, {
        variables: { 'conversationId': selectedConversation?.id }
      });

      console.log(data)

    const mapMessages = () => {
        console.log(data)
        if(!data) {
            return;
        }

        return data.message.map(message => {
            const isLoggedInUser = loggedInUser === message.user_id;
            console.log(isLoggedInUser);
            // justifyContent: isLoggedInUser ? 'flex-end' : ''
            return (
                <ListItem>
                    <ListItemText 
                        className={`MessageText ${isLoggedInUser ? 'MessageText--Right': 'MessageText--Left'}`}
                        primary={message?.content}/>
                 </ListItem>
            )
        })
    }

    return (
        <div className="ChatModule">
            <div className="ChatHeader">
                <h2>Chat with {selectedConversation?.chat_user.name}</h2>
            </div>
            <div className="MessagesList">
                <List sx={{ flexGrow: 1, overflow: 'auto', bgcolor: 'background.paper'}}>
                    {mapMessages()}
                    {/* <ListItem sx={{ width: 'fit-content'}}>
                        <ListItemText className="MessageText MessageText--Left" primary="Hello"/>
                    </ListItem>
                    <ListItem sx={{ width: 'fit-content', float: 'right'}}>
                        <ListItemText className="MessageText MessageText--Right" primary="Hello it's meeee"/>
                    </ListItem> */}
                </List>
            </div>
        </div>
    )
}