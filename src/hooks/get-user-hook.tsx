import { useQuery } from 'react-query'

import { UserService } from '../api/user-service'
const useGetUser = () => {
  const { data: user } = useQuery('users', () => UserService.getuser())
  return user
}

export default useGetUser
