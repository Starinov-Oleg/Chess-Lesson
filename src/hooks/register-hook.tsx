import { useMutation, useQueryClient } from 'react-query'

import { UserService } from '../api/user-service'

const useAddUser = () => {
  const queryClient = useQueryClient()

  return useMutation((text: string | undefined) => UserService.adduser(text), {
    onSettled: () => {
      queryClient.invalidateQueries('users')
    },
  })
}

export default useAddUser
