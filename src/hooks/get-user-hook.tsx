import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const useGetUser = () => {
  const { id } = useParams()

  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get(`https://62622400d5bd12ff1e78dbfd.mockapi.io/api/users`).then(response => {
      setUser(response.data)
    })
  }, [id])

  return user
}

export default useGetUser
