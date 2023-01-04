import { useCmsClient } from '~~/composables/useCmsClient'
import { INITIAL_QUERY } from '~~/constants/blog'
import { Article } from '~~/types/Article'

export default defineEventHandler(async (event) => {
  const client = useCmsClient()
  const query = getQuery(event)

  const currentPage: number = Number(query.page) || INITIAL_QUERY.INITIAL_PAGE
  const perPage = Number(query.perPage) || INITIAL_QUERY.INITIAL_PER_PAGE

  const { contents, totalCount } = await client.get({
    endpoint: 'blogs',
    queries: { offset: (currentPage - 1) * perPage, limit: perPage }
  })
  return {
    articles: contents as Article[],
    totalCount: totalCount as number
  }
})
