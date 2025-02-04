import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

const auth = firebase.auth();
const SignOut=()=> {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )}
export default SignOut;