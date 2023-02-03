import { Router } from 'express'
const router  = Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.post('/guardar', (req, res) => {
    res.send('guardado!')
})

export default router