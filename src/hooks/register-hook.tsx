import { useMutation, useQueryClient } from 'react-query'

import { UserService } from '../api/user-service'

const useAddUser = () => {
  const queryClient = useQueryClient()

  return useMutation((data: any) => UserService.adduser(data), {
    onSettled: () => {
      queryClient.invalidateQueries('users')
    },
  })
}

export default useAddUser
