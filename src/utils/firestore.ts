import { getFirestore } from 'firebase/firestore'
import { app } from './firebase'

export const firebase  = getFirestore(app)