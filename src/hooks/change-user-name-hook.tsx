import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import { PostService } from '../api/user-settings-service'

const useAddPost = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  return useMutation((text: string | undefined) => PostService.addPostId(id, text), {
    onSettled: () => {
      queryClient.invalidateQueries('users')
    },
  })
}

export default useAddPost
