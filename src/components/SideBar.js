import { gql, useQuery  } from "@apollo/client";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';

const SIDE_BAR_STYLE = { width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper', boxSizing: 'border-box'};
const SIDE_BAR_ITEM_STYLE = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' };

export function SideBar(props) {

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
                    <ListItemText 
                        primary={conversation.chat_user.name} 
                        secondary={
                            <Typography
                                component='p' 
                                sx={SIDE_BAR_ITEM_STYLE}>
                            </Typography>} 
                    />
                </ListItem>
            )
        }))
    };

    return (
        <div className="SideBar">
             <List sx={SIDE_BAR_STYLE}>
                {mapConversationsToList()}
             </List>
        </div>
    );
}