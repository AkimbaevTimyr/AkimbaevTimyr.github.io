import { db } from "../firebase-config";
import { collection, query, where,  doc, getDocs , addDoc, deleteDoc } from "firebase/firestore";

export const addFavorites = async (email: string, type: string, movie: any) =>{
    let {id, name, poster_path, vote_average, title, release_date, overview, first_air_date } = movie
    const docRef = await addDoc(collection(db, "favorites"), {email: email, id, poster_path, vote_average, title: title || name, release_date: release_date || first_air_date, overview, favorite: true, type})
}

export const deleteFavoriteMovie = async (id: number) =>{
    const ordersRef = collection(db, "favorites")
    const d = query(ordersRef, where("id", "==", Number(id)));
    const data = (await getDocs(d)).docs
    await deleteDoc(doc(db, "favorites", data[0].id))
}


