import axios from '@/plugins/axios'
import { setCookie, getCookie } from '@/stores/userCookie'
import { useUserData } from '@/composables/useUserData'

const { userData } = useUserData()

const twoFactor = async (token:string, twoFactorCode: string) => {
  const email = userData?.data.email;
  const token = userData?.data.token;
  const slug = '/Authorize/TwoFactor'
  try {
    const response = await axios.post(slug, {
      email,
      token,
      twoFactorCode,
      rememberMe: "true"
    })

    if (response.status === 200) {
      setCookie('User Data', response.data, 1)

      window.location.href = '/'
    }
  } catch (err) {
    console.log('Lỗi fetch dữ liệu')
  }
}

export default twoFactor
