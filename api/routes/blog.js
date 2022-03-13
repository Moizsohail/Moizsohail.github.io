import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/blog', async (req, res) => {
  try {
    const rss = await axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@moizsohail'
    )

    return res.send(rss.data)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return res.status(500).json({ items: [] })
  }
})
export default router
