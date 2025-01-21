/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, suggestion } = req.body;

    const msg = {
      to: process.env.EMAIL_USER, 
      from: "historiadasletras@gmail.com", 
      subject: `Nova Sugestão de Composição de: ${name}`,
      text: suggestion,
      html: `<p>${suggestion}</p>`, 
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Sugestão enviada com sucesso!" });
    } catch (error: any) {
      console.error("Erro ao enviar e-mail:", error.response?.body || error);
      res.status(500).json({ error: "Erro ao enviar e-mail. Tente novamente mais tarde." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}