import { Resend } from "resend";
const resend = new Resend('re_XohbZVTH_BSg8bWzSDsAkQdQTCL1zrQEX');

export const email = async (req, res) => {
    try {
        const { nombre, mensaje,contacto } = req.body;

        if (!nombre || !mensaje || !contacto) {
            return res.status(400).json({ error: "Nombre, correo y mensaje son campos obligatorios." });
        }
        const { data, error } = await resend.emails.send({
            from: `Maubot <onboarding@resend.dev>`,
            to: "mauricioutn2017@gmail.com",
            subject: `Hola tienes un correo de ${nombre}! <br> Su contacto es ${correo}`,
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
}