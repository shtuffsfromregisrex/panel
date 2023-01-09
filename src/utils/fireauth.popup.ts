import { type UserCredential, getAuth, getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider, type OAuthCredential } from "firebase/auth";
import { app } from './firebase'
import { provider } from './fireauth.provider'

const auth = getAuth(app);

const handlGoogleSignIn = async () => {
    try {
        await signInWithRedirect(auth, provider)
        const result = await getRedirectResult(auth) as UserCredential
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result) as OAuthCredential
        const token = credential.accessToken as string
        const user = result.user.uid;

        return user
    } catch (error) {
        console.log("handle google sign in error" + error)
        throw error
    }
}
export default handlGoogleSignIn