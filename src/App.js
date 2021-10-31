import './App.css';
import {useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState(['Hello', 'What is happening?']);
    const [username, setUsername] = useState('');

    useEffect(() => {
	setUsername(prompt('Enter a username'));
    }, [])
    
    const sendMessages = (e) => {
	e.preventDefault();
	setMessages([...messages, input])
	setInput('');
    }

    return (
    <div className="App">
	  <form>
	  <FormControl>
	  <InputLabel>Enter a message...</InputLabel>
	  <Input value={input} onChange={event => setInput(event.target.value)}/>
	  <Button type="submit" variant="contained" color="primary" disabled={!input} onClick={sendMessages}>Send message</Button>
	  </FormControl>
	  </form>
	  
	  {
	      messages.map(message => (
		      <Message message={message} user={username}/>
	      ))
	  }
    </div>
  );
}

export default App;
