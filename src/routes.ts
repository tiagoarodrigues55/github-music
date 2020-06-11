import express from 'express'

import UserController from './controllers/UserController'
import PostController from './controllers/PostController'

const routes = express.Router()
const userController = new UserController()
const postController = new PostController()
// const pointsController = new PointsController()
// const itensController = new ItensController()
routes.get('/', (req,res)=>{
  res.json({
    eai: "eai"
  })
})
routes.get('/users', userController.index)
routes.post('/users', userController.store)
routes.post('/posts', postController.store)
routes.get('/posts', postController.index)
routes.post('/eai', (req, res)=>{
  const {id, name, email} = req.body
  const usuario ={
    id,
    name,
    email
  }
  //cadastrar um usuario
  return res.json(usuario)
})

export default routes