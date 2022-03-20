import { Router } from 'express'
import { getInfoBySlug, getAllInfo } from '../helper'
const router = Router()

router.get('/project', (req, res) => {
  const { project } = req.query
  try {
    if (project) {
      const data = getInfoBySlug(project)
      return res.json(data)
    } else {
      return res.json(getAllInfo())
    }
  } catch (e) {
    return res.status(400).json({ error: e })
  }
})
export default router
