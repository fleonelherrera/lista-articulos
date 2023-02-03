import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const url_db = process.env.URL_DB

async function conectarDB() {
    try {
        await connect(url_db, {useNewUrlParser: true})
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(`Error al conectar la basede datos, ${error}`)
    }
}

export default conectarDB