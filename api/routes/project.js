import { Router } from 'express'
import { getInfoBySlug } from '../helper'

const router = Router()

router.get('/project', (req, res) => {
  const { project } = req.query
  const data = getInfoBySlug(project)

  return res.json({ ...data })
})
export default router
