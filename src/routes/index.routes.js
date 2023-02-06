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

router.get('/edit/:id', async (req, res) => {

    try {
        const articulo = await Articulo.findById(req.params.id).lean()

        res.render('edit', {articulo})
    } catch (error) {
        console.log(error)
    }
})

router.get('/delete/:id', async (req, res) => {
    const {id} = req.params

    await Articulo.findByIdAndDelete(id)

    res.redirect('/')
})



// RUTAS POST
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


router.post('/edit/:id', async (req, res) => {
    
    // De req.params, solo uso id
    const {id} = req.params

    await Articulo.findByIdAndUpdate(id, req.body)

    res.redirect('/')
})



export default router