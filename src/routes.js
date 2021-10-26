import { Router } from 'express'
import UserController from './controllers/UserController'

const route = Router()

route.get('/', UserController.getAll)
route.get('/one/:id', UserController.getOne)

route.post('/register', UserController.register)
route.put('/update/:id', UserController.update)
route.delete('/delete/:id', UserController.deletoOne)

export default route
