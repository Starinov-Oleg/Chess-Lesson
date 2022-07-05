import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import { UserSettingsService } from '../api/user-settings-service'

const useChangeEmail = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  return useMutation((text: string | undefined) => UserSettingsService.changeUserEmail(id, text), {
    onSettled: () => {
      queryClient.invalidateQueries('email')
    },
  })
}

export default useChangeEmail
