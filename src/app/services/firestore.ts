/* eslint-disable @typescript-eslint/no-explicit-any */
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Importando o db configurado

export async function searchSongs(keyword: string) {
  // Se a palavra-chave de busca estiver vazia, retornamos todos os resultados
  if (!keyword) {
    console.log('Buscando todas as músicas...');
    const songsCollection = collection(db, "songs");
    const querySnapshot = await getDocs(songsCollection);
    const allSongs: { id: string; }[] = [];
    
    querySnapshot.forEach(doc => {
      allSongs.push({ id: doc.id, ...doc.data() });
    });
    
    return allSongs; // Retorna todos os documentos quando a busca está vazia
  }

  const songsCollection = collection(db, "songs");
  
  // Consulta para buscar músicas pelo nome com base na palavra-chave (busca por prefixo)
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