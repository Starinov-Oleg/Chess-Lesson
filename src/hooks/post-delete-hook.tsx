import { useMutation, useQueryClient } from 'react-query'

import { PostService } from '../api/post-service'

const useDeletePost = (id: string | undefined) => {
  const queryClient = useQueryClient()

  return useMutation((userId: number) => PostService.removePostId(userId, id), {
    onSettled: () => {
      queryClient.invalidateQueries('articles')
    },
  })
}

export default useDeletePost
