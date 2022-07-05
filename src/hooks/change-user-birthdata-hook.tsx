import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import { UserSettingsService } from '../api/user-settings-service'

const useChangeBirthData = () => {
  const { id } = useParams()

  const queryClient = useQueryClient()

  return useMutation((data: Date | null) => UserSettingsService.changeUserBirthData(id, data), {
    onSettled: () => {
      queryClient.invalidateQueries('birthdata')
    },
  })
}

export default useChangeBirthData
