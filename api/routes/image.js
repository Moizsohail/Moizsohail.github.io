/* eslint-disable no-console */
import multer from 'multer'
import { Router } from 'express'
import { cwd, work } from '../helper'

const { readFileSync, unlinkSync, writeFileSync, existsSync } = require('fs')

const router = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, work())
  },
  filename: (req, file, cb) => {
    const newName = file.originalname.replaceAll(/[\s-]/g, '')
    cb(null, `${req.body.project}/${newName}`)
  },
})

const upload = multer({ storage })

router.post('/image', upload.single('image'), (req, res) => {
  const { jsonPath, project } = req.body

  const infoPath = work(`/${project}/info.json`)
  const rawdata = readFileSync(infoPath)
  const proj = JSON.parse(rawdata)

  const filePath = proj[jsonPath]
  const oldFilePath = cwd(filePath)
  if (existsSync(oldFilePath)) {
    unlinkSync(oldFilePath)
  }

  proj[jsonPath] = `/work/${req.file.filename}`
  writeFileSync(infoPath, JSON.stringify(proj))

  return res.json({ data: 'hi' })
})

export default router
