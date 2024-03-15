import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import dotenv from 'dotenv';
import emailRouter from "./src/routes/email.routes";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"/public")))


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});

// Aquí estás usando "/api" como prefijo para tus rutas
app.use("/enviar", emailRouter);