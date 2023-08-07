import { useContext } from 'react'
import { UserContext } from '../User/Context'

export const useUser = () => useContext(UserContext)
