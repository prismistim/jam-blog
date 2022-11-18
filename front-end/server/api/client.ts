import { createClient } from 'microcms-js-sdk' //ES6

const config = useRuntimeConfig()

export const client = createClient({
  serviceDomain: config.serviceDomain,
  apiKey: config.apiKey
})
