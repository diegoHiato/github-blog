import { useContext } from 'react'
import { UserContext } from '../User/context'

export const useUser = () => useContext(UserContext)
