import { Router } from 'express'
const router = Router()

router.get('/project', (req, res) => {
  return res.json({ bro: 'bro' })
})
export default router
