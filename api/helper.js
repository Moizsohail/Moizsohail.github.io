import { readdirSync, readFileSync } from 'fs'

export const cwd = (path = '') => `./static${path}`
export const work = (path = '') => `./static/work${path}`

export const getInfoBySlug = (slug) => {
  try {
    const infoPath = work(`/${slug}/info.json`)
    const rawData = readFileSync(infoPath)
    return prepareImageUrls(slug, JSON.parse(rawData))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    throw e
  }
}
export const getAllInfo = () => {
  try {
    const files = readdirSync(work('/'))
    return files
      .filter((f) => !['.DS_Store'].includes(f))
      .map(getInfoBySlug)
      .filter(({ hidden }) => !hidden)
      .sort((a, b) => {
        return a?.priority > b?.priority || (a.priority && !b.priority) ? -1 : 1
      })
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    throw e
  }
}
const imageKeys = {
  parent: ['bg', 'img'],
  main: ['main', 'other'],
  multiple: ['images'],
  side: ['images'],
  one: ['images'],
  parallax: ['images'],
}
const expandObjUrlsByKey = (keys, obj, slug) => {
  keys.forEach((key) => {
    if (!obj[key]) return null
    if (typeof obj[key] === 'string') obj[key] = `/work/${slug}/${obj[key]}`
    else obj[key] = obj[key].map((img) => `/work/${slug}/${img}`)
  })
}
export const prepareImageUrls = (slug, obj) => {
  expandObjUrlsByKey(imageKeys.parent, obj, slug)

  obj?.section?.forEach((sec) => {
    const keys = imageKeys[sec.type]
    if (keys) expandObjUrlsByKey(keys, sec, slug)
  })
  return obj
}
