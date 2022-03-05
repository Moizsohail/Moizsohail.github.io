import { readFileSync } from 'fs'

export const cwd = (path = '') => `./static${path}`
export const work = (path = '') => `./static/work${path}`

export const getInfoBySlug = (slug) => {
  const infoPath = work(`/${slug}/info.json`)
  const rawData = readFileSync(infoPath)
  return JSON.parse(rawData)
}
const imageKeys = {
  parent: ['bg', 'img'],
  main: ['main', 'other'],
  multiple: ['images'],
  side: ['images'],
  one: ['images'],
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
  obj.section.forEach((sec) => {
    const keys = imageKeys[sec.type]
    if (keys) expandObjUrlsByKey(keys, sec, slug)
  })
  return obj
}
