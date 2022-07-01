import { useMutation, useQueryClient } from 'react-query'

import { UserSettingsService } from '../api/user-settings-service'

const useDeleteUser = (id: string | undefined) => {
  const queryClient = useQueryClient()

  return useMutation((id: number) => UserSettingsService.removeUserId(id), {
    onSettled: () => {
      queryClient.invalidateQueries('user')
    },
  })
}

export default useDeleteUser
