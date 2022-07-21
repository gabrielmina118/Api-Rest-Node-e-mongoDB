import express from "express";
import autorRouter from "./autoresRoutes.js";
import livroRouter from "./livrosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({ titulo: "Curso de node" })
    })

    app.use(
        express.json(),
        livroRouter,
        autorRouter
    )
}

export default routes
