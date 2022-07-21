import express from "express";
import AutoresController from "../controllers/autoresController.js"

const autorRouter = express.Router()

autorRouter
.get("/autores", AutoresController.listarAutores)
.get("/autor/:id",AutoresController.listarAutorPorId)
.post("/autor",AutoresController.criarAutor)
.put("/autor/:id",AutoresController.atualizarAutor)
.delete("/autor/:id",AutoresController.deletarAutor)



export default autorRouter