import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { PostService } from '../api/post-service'
import { useLocation } from 'react-router-dom'

const usePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<any[]>([])
  const location = useLocation()
  const { refetch } = useQuery('articles', () => PostService.getPostId(id), {
    onSuccess: (data: any) => {
      setPost(data)
    },
  })
  useEffect(() => {
    if (location) {
      refetch()
    }
  }, [location, refetch])
  return post
}

export default usePost

/**Custom hook for get post - use for refractoring */
