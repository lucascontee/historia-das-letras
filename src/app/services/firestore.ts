/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Importando o db configurado

export async function searchSongs(keyword: string) {
  const songsCollection = collection(db, "songs");
  const q = query(songsCollection, where("title", ">=", keyword), where("title", "<=", keyword + "\uf8ff"));

  const querySnapshot = await getDocs(q);
  const results: any[] = [];
  querySnapshot.forEach((doc) => {
    results.push({ id: doc.id, ...doc.data() });
  });

  return results;
}