import Post from '../models/Post'
import User from '../models/User'
import {Request, Response} from 'express'

class PostController{
  async index(req: Request, res: Response){
    const posts = await Post.findAll()
    return res.json(posts)
  }
  async indexId(req: Request, res: Response){
    const { post_id } = req.params

    const post = await User.findByPk(post_id)
    return res.json(post)
}
async store(req: Request, res: Response) {
  const { video, audio, image, text, userId } = req.body

  const post = await Post.create({ video, audio, image, text, userId })

  return res.json(post)
}
}
export default PostController
