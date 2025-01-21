/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next';
import { searchSongs } from '../../app/services/firestore';  // Função que busca músicas no Firestore

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;

  if (!q || typeof q !== 'string') {
    return res.status(400).json({ error: "Query 'q' não fornecida ou inválida." });
  }

  try {
    const songs = await searchSongs(q);
    res.status(200).json(songs); 
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar músicas" });
  }
}