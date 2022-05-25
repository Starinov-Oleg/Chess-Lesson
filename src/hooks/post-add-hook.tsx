import { useMutation, useQueryClient } from 'react-query'
import { PostService } from '../api/post-service'
import { useParams } from 'react-router-dom'

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
