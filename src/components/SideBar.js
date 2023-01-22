import { useState } from "react"
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';


export function SideBar() {

    const [conversations, setConversations] = useState([]);

    return (
        <div className="SideBar">
             <List sx={{ width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper', boxSizing: 'border-box'}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://i.pravatar.cc/300?u=replaceWithUserName" />
                    </ListItemAvatar>
                    <ListItemText primary="UserName" secondary={<Typography component='p' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>This is a logn mesageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Typography>} />
                </ListItem>
             </List>
        </div>
    )
}