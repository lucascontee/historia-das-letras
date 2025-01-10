/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next';
import { searchSongs } from '../services/firestore';  // Função que busca músicas no Firestore

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;

  // Se 'q' não for fornecido ou for inválido, retorna um erro
  if (!q || typeof q !== 'string') {
    return res.status(400).json({ error: "Query 'q' não fornecida ou inválida." });
  }

  try {
    // Chama a função 'searchSongs' que busca as músicas no Firestore
    const songs = await searchSongs(q);
    res.status(200).json(songs);  // Retorna as músicas encontradas
  } catch (error) {
    // Caso haja erro na busca
    res.status(500).json({ error: "Erro ao buscar músicas" });
  }
}
