import { db } from "../firebase-config";
import { collection, query, where, updateDoc, doc, getDocs , addDoc, increment, deleteDoc } from "firebase/firestore";

export const getFavoriteMovie = async (email: string): Promise<any>=> {
    const querySnapshot = await getDocs(collection(db, "favorites"));
    const data = querySnapshot.docs.map(doc => doc.data())
    return data.filter(el => el.email === email)
}

export const addFavorites = async (movie: any) =>{
    const docRef = await addDoc(collection(db, "favorites"), movie)
}

export const deleteFavoriteMovie = async (id: number) =>{
    console.log(id)
    const ordersRef = collection(db, "favorites")
    const q = query(ordersRef, where("id", "==", id))
    const data = (await getDocs(q)).docs
    await deleteDoc(doc(db, "favorites", data[0].id))
}


