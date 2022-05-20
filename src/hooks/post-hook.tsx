import { useQuery } from 'react-query'
import { PostService } from '../api/post-service'

const usePost = (id: any) => {
  const { data } = useQuery(['articles', id], () => PostService.getPostId(id))
  return data
}

export default usePost

/**Custom hook for get post - use for refractoring */
