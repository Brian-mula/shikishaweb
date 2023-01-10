
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


export const signIn = async (email, password) => {
  const auth = getAuth();
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred;
};

export const signUp = async (email, password,firstName,lastName,phone) => {
    const db=getFirestore()
  const auth = getAuth();
  const cred = await createUserWithEmailAndPassword(auth, email, password);
    try{
        const docRef=await addDoc(collection,(db,"users"),{
            firstName:firstName,
            lastName:lastName,
            phone:phone,
            email:email
        })
        console.log("Document written with ID: ", docRef.id);

    }catch(e){
        console.log(e)
    }
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

