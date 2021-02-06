import {useContext} from 'react';
import { ChatEngine } from 'react-chat-engine';
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';

import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import '../stylesheets/chat.css';

const projectID = '9dfca176-0a4a-4398-9d0c-022be8ca62b1';

const Chat = () => {
  

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default Chat;