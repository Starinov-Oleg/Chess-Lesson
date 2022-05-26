import { useMutation, useQueryClient } from 'react-query'
import { PostService } from '../api/post-service'

const useDeletePost = (id: any) => {
  const queryClient = useQueryClient()

  return useMutation((userId: any) => PostService.removePostId(userId, id), {
    onSettled: () => {
      queryClient.invalidateQueries('articles')
    },
  })
}

export default useDeletePost
