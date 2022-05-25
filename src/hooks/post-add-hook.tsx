import { useMutation, useQueryClient } from 'react-query'
import { PostService } from '../api/post-service'

const useAddPost = (text: any) => {
  const queryClient = useQueryClient()

  return useMutation((id: any) => PostService.addPostId(id, text), {
    onSettled: () => {
      queryClient.invalidateQueries('articles')
    },
  })
}

export default useAddPost

/**Custom hook for get post - use for refractoring */
