import Articulo from '../models/Articulo'
import { Router } from 'express'
const router  = Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.post('/guardar', async (req, res) => {

    let articulo = Articulo(req.body)
        try {
            await articulo.save()
            console.log('Articulo guardado')
        } catch (error) {
            console.log(`Error al guardar el artículo. ${error}`)
        }

    res.redirect('/')
})

export default router