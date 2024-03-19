import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(db, collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function postData(firestore, id, data) {
  let result = null;
  let error = null;
  try {
    result = await setDoc(doc(firestore, "users", id), data, {
      merge: true,
    });
  } catch (err) {
    error = err;
  }
  return { result, error };
}
