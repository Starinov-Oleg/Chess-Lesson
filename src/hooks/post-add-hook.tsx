import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { PostService } from '../api/post-service'

const useAddPost = () => {
  const [text, setText] = useState<any | undefined>(undefined)

  const queryClient = useQueryClient()

  return useMutation((id: any) => PostService.addPostId(id, text), {
    onMutate: () => {
      setText('')
    },
    onSettled: () => {
      queryClient.invalidateQueries('articles')
    },
  })
}

export default useAddPost

/**Custom hook for get post - use for refractoring */
