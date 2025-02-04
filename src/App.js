import React from "react";

import "./App.css";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { useAuthState } from "react-firebase-hooks/auth";

import ChatRoom from "./chat/chatRoom";
import SignIn from "./chat/signIn";
import SignOut from "./chat/signOut";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Initialize Firebase

// 
function App() {

  const [user] = useAuthState(auth);

  
  
  
  return (
    <div className="App">
      <header>
       
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );

}






export default App;