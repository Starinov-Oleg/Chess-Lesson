import React from 'react'
import { useParams } from 'react-router-dom'

import useGetUser from '../../hooks/get-user-hook'

function Settings() {
  const { id } = useParams()
  const user = useGetUser()
  return user
    ?.filter((user: any) => user.id === String(id))
    .map(
      (
        user: {
          group: string
          name: string
          followed: boolean
          avatar: string | number
          image_profile: string | number
          body: string
          length: number
          spancount: number
          id: number
        },
        index: number
      ) => (
        <section key={index}>
          <div>{user.name}</div>
        </section>
      )
    )
}

export default Settings
