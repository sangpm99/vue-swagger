import axios from '@/plugins/axios'
import { setToken } from '@/stores/userCookie'

const signIn = async (email: string, password: string, reCaptcha: string, rememberMe: boolean) => {
  const slug = '/Authorize/SignIn'
  try {
    const response = await axios.post(slug, {
      email,
      password,
      reCaptcha,
      rememberMe
    })

    if (response.status === 200) {
      setToken('Token', response.data, 0.0035) // 5 ph

      window.location.href = '/authorize/twofactor'
    }
  } catch (err) {
    console.log('Lỗi fetch dữ liệu')
  }
}

export default signIn
