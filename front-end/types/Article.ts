import { MicroCMSListContent } from 'microcms-js-sdk'

export type EyeCatch = {
  url: string
  height: number
  width: number
}
export type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch?: EyeCatch
  category?: string
} & MicroCMSListContent
