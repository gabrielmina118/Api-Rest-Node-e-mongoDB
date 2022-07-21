import { livros } from "../model/Livro.js";

class LivroController {

    static listarLivros(req, res) {
        // metodo do mongo que retornar todos os livros. O populate serve para referenciar uma tabela
        livros.find()
            .populate("autor")
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
    }

    static listarLivroPorId(req, res) {
        const id = req.params.id
        livros
            .findById(id)
            .populate("autor", "nome")
            .exec((err, livros) => {
                if (err) {
                    res.status(500).json({ message: err.message })
                } else {
                    res.status(200).json(livros)
                }
            })
    }

    static criarLivro(req, res) {
        let livro = new livros(req.body)
        livro.save((err) => {
            if (err) {
                res.status(500).json({ message: `${err.message} -  falha ao cadastrar o livro` })
            } else {
                res.status(201).send({ message: "livro cadastrado com sucesso", livro: livro.toJSON() })
            }
        })
    }

    static atualizarLivro(req, res) {
        const id = req.params.id;

        // Achar o id e atualizar , setar tudo que estiver no body e verificar o caso de não erro
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso!" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
    static deletarLivro(req, res) {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send(`livro ${id} removido com sucesso!`)
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static listarLivroPorAutor(req, res) {
        const { autor } = req.query

        livros.find({ autor }, {}, (err, livros) => {
            res.status(200).send(livros)
        })
    }
}

export default LivroController