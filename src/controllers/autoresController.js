import { autores } from "../model/Autor.js"


class AutoresController {

    static listarAutores(req, res) {
        // metodo do mongo que retornar todos os autores
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutorPorId(req, res) {
        const id = req.params.id
        autores.findById(id, (err, autor) => {
            if (err) {
                res.status(500).json({ message: err.message })
            } else {
                res.status(200).json(autor)
            }
        })
    }

    static criarAutor(req, res) {
        let autor = new autores(req.body)
        autor.save((err) => {
            if (err) {
                res.status(500).json({ message: `${err.message} -  falha ao cadastrar o livro` })
            } else {
                res.status(201).send({ message: "autor cadastrado com sucesso", autores: autor.toJSON() })
            }
        })
    }

    static atualizarAutor(req, res) {
        const id = req.params.id;

        // Achar o id e atualizar , setar tudo que estiver no body e verificar o caso de não erro
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "autor atualizado com sucesso!" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
    static deletarAutor(req, res) {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send(`autore ${id} removido com sucesso!`)
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default AutoresController