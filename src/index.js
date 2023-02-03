import app from './app'
import conectarDB from './db'


const PORT = process.env.PORT || 3000

const iniciar = async () => {
    conectarDB()
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto: ${PORT}`)
    })
}

iniciar()