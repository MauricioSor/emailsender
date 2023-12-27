const express = require('express');
const { Resend } = require('resend');

const app = express();
const resend = new Resend('re_XohbZVTH_BSg8bWzSDsAkQdQTCL1zrQEX');

app.use(express.json()); 

app.post("/enviar", async (req, res) => {
    try {
        const { nombre, correo, mensaje } = req.body;

        if (!nombre || !correo || !mensaje) {
            return res.status(400).json({ error: "Nombre, correo y mensaje son campos obligatorios." });
        }
        const { data, error } = await resend.emails.send({
            from: `Maubot <mau@sor.dev>`,
            to: [correo],
            subject: `Hola ${nombre}, ¡esto funciona!`,
            text: mensaje,
        });

        if (error) {
            return res.status(400).json({ error });
        }

        res.status(200).json({ data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});