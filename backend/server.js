const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const downloadRoutes = require("./src/routes/download");

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:5173']
}));

app.use(express.json());

app.use("/api/downloads", downloadRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conectado ao MongoDB!");
        app.listen(process.env.PORT || 3000, () => {
            console.log(`🚀 Servidor rodando na porta ${process.env.PORT || 3000}`);
        });
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    });