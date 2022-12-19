import { getAuth, signInWithPopup } from "firebase/auth";
// import { GoogleAuthProvider , type OAuthCredential } from "firebase/auth";
import { app } from '../config/firebase'
import { provider } from './fireauth.provider'

const auth = getAuth(app);

const handlGoogleSignIn = async () => {
    // let user: any = null;
    // signInWithPopup(auth, provider)
    //     .then((result) => {
    //         const credential = GoogleAuthProvider.credentialFromResult(result) as OAuthCredential
    //         const token = credential.accessToken as string
    //         user = result.user.uid;
    //     }).catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         const email = error.customData.email;
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //     })
    // return user;
    try {

        const result = await signInWithPopup(auth, provider)
        // const credential = GoogleAuthProvider.credentialFromResult(result) as OAuthCredential
        // const token = credential.accessToken as string
        const user = result.user.uid;
        return user
    } catch (error) {
        console.log(error)
        throw error
    }

}
export default handlGoogleSignIn