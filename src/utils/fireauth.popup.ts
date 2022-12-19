import { getAuth, signInWithPopup } from "firebase/auth";
// import { GoogleAuthProvider , type OAuthCredential } from "firebase/auth";
import { app } from '../config/firebase'
import { provider } from './fireauth.provider'

const auth = getAuth(app);

const handlGoogleSignIn = async () => {
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