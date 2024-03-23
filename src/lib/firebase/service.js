import { 
  addDoc, 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  getFirestore, 
  query, 
  where 
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

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

export async function signUp(userData, callback) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback(false);
  } else {
    userData.password1 = await bcrypt.hash(userData.password1, 10);
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback(true);
      })
      .catch((error) => {
        callback(false);
        console.log(error);
      });
  }
}

export async function signIn(userData, callback) {
  const q = query(collection(firestore, "users"), where("email", "==", userData.email));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    if (await bcrypt.compare(userData.password1, data[0].password1)) {
      callback(true);
    } else {
      callback(false);
    }
  } else {
    callback(false);
  }
}

export { firestore };
