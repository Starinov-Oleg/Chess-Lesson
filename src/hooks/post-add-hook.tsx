import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import { PostService } from '../api/post-service'

const useAddPost = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  return useMutation((text: any) => PostService.addPostId(id, text), {
    onSettled: () => {
      queryClient.invalidateQueries('articles')
    },
  })
}

export default useAddPost
