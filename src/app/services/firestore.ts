/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase"; 

export async function searchSongs(keyword: string) {
  
  if (!keyword) {
    console.log('Buscando todas as músicas...');
    const songsCollection = collection(db, "songs");
    const querySnapshot = await getDocs(songsCollection);
    const allSongs: { id: string; }[] = [];
    
    querySnapshot.forEach(doc => {
      allSongs.push({ id: doc.id, ...doc.data() });
    });
    
  }

  const songsCollection = collection(db, "songs");
  
  const q = query(
    songsCollection,
    where("songName", ">=", keyword.toLowerCase()),
    where("songName", "<=", keyword.toLowerCase() + "\uf8ff")
  );

  try {
    const querySnapshot = await getDocs(q);
    const results: any[] = [];

    querySnapshot.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() });
    });

    if (results.length === 0) {
      console.log('Nenhuma música encontrada para: ', keyword);
      return [];  
    }

    return results;

  } catch (error) {
    console.error("Erro ao buscar músicas: ", error);
    throw new Error("Falha ao buscar músicas no Firestore");
  }
}