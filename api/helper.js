import { readFileSync } from 'fs'

export const cwd = (path = '') => `./static${path}`
export const work = (path = '') => `./static/work${path}`

export const getInfoBySlug = (slug) => {
  const infoPath = work(`/${slug}/info.json`)
  const rawData = readFileSync(infoPath)
  return JSON.parse(rawData)
}
