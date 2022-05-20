import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { PostService } from '../api/post-service'
import { useLocation } from 'react-router-dom'

const usePost = (id: any) => {
  const location = useLocation()

  const { refetch, data } = useQuery('articles', () => PostService.getPostId(id))

  useEffect(() => {
    if (location) {
      refetch()
    }
  }, [location, refetch])

  return data
}

export default usePost

/**Custom hook for get post - use for refractoring */
