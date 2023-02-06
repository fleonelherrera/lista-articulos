import Articulo from '../models/Articulo'
import { Router } from 'express'
const router  = Router()


router.get('/', async (req, res) => {

    let articulos = await Articulo.find().lean() // con lean() indicamos que debe devolver objetos de JS

    res.render('index', { articulos: articulos })
})

router.get('/about', (req, res) => {
    res.render('about')
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


router.get('/edit', (req, res) => {
    res.render('edit')
})

export default router