import './App.css';
import {useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app'
import 'firebase/firestore';
import {collection, orderBy, getDocs, onSnapshot, query} from 'firebase/firestore';

function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
	setUsername(prompt('Enter a username'));
    }, [])
    
    useEffect(() => {
	const q = query(collection(db, "messages"))
	const unsub = onSnapshot(q, (querySnapshot) => {
	    console.log(querySnapshot.docs.map(d => d.data()));

	})
    }, [])

    
    const sendMessages = (e) => {
	e.preventDefault();
	db.collection("messages").add({
	    message: input,
	    user: username,
	    timestamp: firebase.firestore.FieldValue.serverTimestamp() 
	})
	setInput('');
    }

    return (
    <div className="App">
	    <h2>Welcome {username}</h2>
	    <form>
	  <FormControl>
	  <InputLabel>Enter a message...</InputLabel>
	  <Input value={input} onChange={event => setInput(event.target.value)}/>
	  <Button type="submit" variant="contained" color="primary" disabled={!input} onClick={sendMessages}>Send message</Button>
	  </FormControl>
	  </form>
	  
	  {
	      messages.map(message => (
		      <Message user={username} message={message}/>
	      ))
	  }
    </div>
  );
}

export default App;
