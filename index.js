import express from "express"
import cors from "cors"
import morgan from "morgan"
import  path  from "path"
const { Resend } = require('resend');

const app = express();
const resend = new Resend('re_XohbZVTH_BSg8bWzSDsAkQdQTCL1zrQEX');

app.use(express.json()); 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"/public")))
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});
app.post("/enviar", async (req, res) => {
    try {
        const { nombre, mensaje } = req.body;

        if (!nombre || !mensaje) {
            return res.status(400).json({ error: "Nombre, correo y mensaje son campos obligatorios." });
        }
        const { data, error } = await resend.emails.send({
            from: `Maubot <onboarding@resend.dev>`,
            to: "mauricioutn2017@gmail.com",
            subject: `Hola tienes un correo de ${nombre}!`,
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
