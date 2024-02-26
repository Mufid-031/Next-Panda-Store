import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export default async function retrieveData(collectionName) {
    const snapshot = await getDocs(collection(firestore, collectionName.id));
}