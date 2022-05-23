import { useQuery } from 'react-query'
import { PostService } from '../api/post-service'

const useDeletePost = (id: any) => {
  const { data } = useQuery(['articles', id], (userId: any) => PostService.removePostId(userId, id))
  return data
}

export default useDeletePost
