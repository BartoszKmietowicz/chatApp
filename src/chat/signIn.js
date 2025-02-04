
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

const auth = firebase.auth();
const SignIn=()=> {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        
      </>
    )
  
  }
  export default SignIn;