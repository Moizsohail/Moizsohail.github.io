import express from 'express'
import image from './routes/image'
import project from './routes/project'
import blog from './routes/blog'
import stats from './routes/stats'
// Create express instance
const app = express()
if (process.env.NODE_ENV === 'development') app.use(image)
app.use(project)
app.use(blog)
app.use(stats)

// Export the server middleware
export default {
  path: '/api',
  handler: app,
}
