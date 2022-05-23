import { useMutation } from 'react-query'
import { PostService } from '../api/post-service'

const useDeletePost = (id: any) => {
  const { data } = useMutation((userId: any) => PostService.removePostId(userId, id))
  return data
}

export default useDeletePost
