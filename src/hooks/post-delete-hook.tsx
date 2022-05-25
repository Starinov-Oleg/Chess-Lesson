import { useMutation, useQueryClient } from 'react-query'
import { PostService } from '../api/post-service'
import React, { useState } from 'react'

const useDeletePost = (id: any) => {
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState({ show: false, id: null })

  return useMutation((userId: any) => PostService.removePostId(userId, id), {
    onMutate: () => {
      setIsOpen({ show: false, id: null })
    },
    onSettled: () => {
      queryClient.invalidateQueries('articles')
    },
  })
}

export default useDeletePost
