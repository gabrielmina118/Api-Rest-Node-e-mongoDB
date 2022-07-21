import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gabrielMina:a258mina@cluster0.hc26l.mongodb.net/alura-node");

export let db = mongoose.connection;

