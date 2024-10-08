import axios from '@/plugins/axios'
import { setCookie } from '@/stores/userCookie'

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
      setCookie('User Data', response.data, 1)

      window.location.href = '/'
    }
  } catch (err) {
    console.log('Lỗi fetch dữ liệu')
  }
}

export default signIn
