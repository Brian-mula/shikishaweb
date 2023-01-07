
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "firebase/auth";

export const signIn = async (email, password) => {
  const auth = getAuth();
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred;
};

export const signUp = async (email, password) => {
  const auth = getAuth();
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  return cred;
};

export const intiUser=async()=>{
    const auth=getAuth()
     onAuthStateChanged(auth,(user)=>{
        if(user){
            const uid=user.uid
            console.log(uid)
        }else{
            console.log('user is signed out')
        }
    })
}

export const logOut=async()=>{
    const auth=getAuth()
    await signOut(auth)
}

