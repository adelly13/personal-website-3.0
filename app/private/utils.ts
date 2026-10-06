import path from 'path'
import { getMDXData } from 'app/lib/posts'

export function getPrivatePosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'private', 'posts'))
}
