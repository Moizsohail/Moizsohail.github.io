import express from 'express'
import editor from './routes/image'
import project from './routes/project'

// Create express instance
const app = express()

app.use(editor)
app.use(project)

// Export the server middleware
export default {
  path: '/api',
  handler: app,
}
