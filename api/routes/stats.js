import { Router } from 'express'
import axios from 'axios'
const router = Router()

const config = {
  headers: {
    Authorization: `Basic ${Buffer.from(
      String('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')
    ).toString('base64')}`,
  },
}
router.get('/stats', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/user', config)
    return res.send(response.data)
  } catch (e) {
    return res.send([])
  }
})
export default router
