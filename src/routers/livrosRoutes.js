import express from "express";
import LivroController from "../controllers/livrosController.js";

const livroRouter = express.Router()

livroRouter
.get("/livros", LivroController.listarLivros)
.get("/livros-autor",LivroController.listarLivroPorAutor)
.get("/livros/:id",LivroController.listarLivroPorId)
.post("/livros",LivroController.criarLivro)
.put("/livros/:id",LivroController.atualizarLivro)
.delete("/livros/:id",LivroController.deletarLivro)

export default livroRouter;


