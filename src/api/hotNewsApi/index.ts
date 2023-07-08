import { httpClient } from '@/utils/request'
import useSWR from 'swr'

export const useFetchHotNews = () => {
  const { data, isValidating } = useSWR('/news', (url: string) => httpClient.get(url))

  return {
    hotNews: data,
    isValidating,
  }
}
