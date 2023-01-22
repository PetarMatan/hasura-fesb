import { useState } from "react"
import { List, ListItem, ListItemText } from '@mui/material';

export function Chat() {

    const [conversation, setConversation] = useState([]);

    return (
        <div className="ChatModule">
            <div className="ChatHeader">
                <h2>Chat with UserName</h2>
            </div>
            <div className="MessagesList">
                <List sx={{ flexGrow: 1, overflow: 'auto', bgcolor: 'background.paper'}} >
                    <ListItem sx={{ width: 'fit-content'}}>
                        <ListItemText className="MessageText MessageText--Left" primary="Hello"/>
                    </ListItem>
                    <ListItem sx={{ width: 'fit-content', float: 'right'}}>
                        <ListItemText className="MessageText MessageText--Right" primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Hello it's meeee"/>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}