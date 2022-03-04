import express from 'express'
import editor from './routes/editor'

// Create express instance
const app = express()

app.use(editor)

// Export the server middleware
export default {
  path: '/api',
  handler: app,
}
