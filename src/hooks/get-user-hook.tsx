import { useState } from 'react'
import { useQuery } from 'react-query'
import { UserService } from '../api/user-service'
const useGetUser = () => {
  const [user, setUser] = useState([])

  const { refetch } = useQuery('users', () => UserService.getuser(), {
    onSuccess: (data: any) => {
      setUser(data)
    },
  })

  return user
}

export default useGetUser
