import { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, user}, ref) => {
const isUser = user === message.user

    return (
	<div ref={ref} className={`message_card ${isUser && "message_user"}`}>
	    <Card className={isUser ? "message_userCard" : "message_guestCard"}>
		<CardContent>
		    <Typography
			color="white"
			variant="h5"
			component="h2"
		    >
			{message.user}:
			{message.text}
		    </Typography>
		</CardContent>
	    </Card>
	    </div>
	    )
})
export default Message;
