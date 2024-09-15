import axios from 'axios'
import { useUserData } from '@/composables/useUserData'

const { userData } = useUserData()

axios.defaults.baseURL = 'https://api.cyberonegate.com/id'

export default axios