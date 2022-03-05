import { Router } from 'express'
import { getInfoBySlug, prepareImageUrls } from '../helper'

const router = Router()

router.get('/project', (req, res) => {
  const { project } = req.query
  const data = getInfoBySlug(project)

  return res.json({ ...prepareImageUrls(project, data) })
})
export default router
