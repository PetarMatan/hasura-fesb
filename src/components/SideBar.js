import { useState } from "react"
import { gql, useQuery  } from "@apollo/client";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';

const query = gql`
query getConversations {
    conversation {
        to_user_id
        id
        from_user_id
        chat_user {
          id
          name
        }
      }
}
`

export function SideBar(props) {
    const { data, loading, error } = useQuery(query);

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    const mapConversationsToList = () => {
        return data?.conversation.map((conversation => {
            return (
                <ListItem onClick={() => props.selectConversation(conversation)}>
                    <ListItemAvatar>
                        <Avatar src={`https://i.pravatar.cc/300?u=${conversation?.chat_user.name}`} />
                    </ListItemAvatar>
                    <ListItemText primary={conversation.chat_user.name} secondary={<Typography component='p' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>This is a logn mesageeeeeeeeeeeee</Typography>} />
                </ListItem>
            )
        }))
    }

    return (
        <div className="SideBar">
             <List sx={{ width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper', boxSizing: 'border-box'}}>
                {mapConversationsToList()}
             </List>
        </div>
    )
}