import { Schema, model } from 'mongoose'

const articuloSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number
})

export default model('Articulo', articuloSchema)