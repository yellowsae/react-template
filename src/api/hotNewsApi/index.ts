import { httpClient } from '@/utils/request'

export const useFetchHotNews = () => {
  const { data } = httpClient.get('/news').then((res) => res.data)
  return {
    hotNews: data,
    // isValidating,
  }
}
