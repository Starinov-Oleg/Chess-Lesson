import { useState } from 'react'
import { useMutation } from 'react-query'
import { useParams } from 'react-router-dom'
import { PostService } from '../api/post-service'
import { QueryCache } from 'react-query'

const queryCache = new QueryCache({
  onError: error => {
    console.log(error)
  },
  onSuccess: data => {
    console.log(data)
  },
})
const useAddPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<any[]>([])
  const [text, setText] = useState<any | undefined>(undefined)

  const { data: addpost } = useMutation(() => PostService.addPostId(id, text), {
    onSuccess: data => {
      setPost([...post, data])
      queryCache.find('post')
      setText('')
    },
  })

  return addpost
}

export default useAddPost

/**Custom hook for get post - use for refractoring */
