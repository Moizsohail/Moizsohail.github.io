import express from 'express'
import image from './routes/image'
import project from './routes/project'

// Create express instance
const app = express()
if (process.env.NODE_ENV === 'development') app.use(image)
app.use(project)

// Export the server middleware
export default {
  path: '/api',
  handler: app,
}
