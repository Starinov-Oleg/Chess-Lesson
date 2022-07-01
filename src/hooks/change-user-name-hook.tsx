import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import { UserSettingsService } from '../api/user-settings-service'

const useChangeName = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  return useMutation((text: string | undefined) => UserSettingsService.changeUserName(id, text), {
    onSettled: () => {
      queryClient.invalidateQueries('users')
    },
  })
}

export default useChangeName
