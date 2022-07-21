import mongoose from "mongoose";

// representa livros (banco)
const livroSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number }
});

// cria a tabela de livros
export const livros = mongoose.model("livros", livroSchema)
