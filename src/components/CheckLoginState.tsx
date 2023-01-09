import { type FC } from 'react'
import { useRouter } from 'next/router'

const CheckLoginState: FC = () => {
  const router = useRouter();
  const getTokenFromCookie = (): string => document.cookie.split(";").map(cooky => cooky.trim()).find(cooky => cooky.startsWith("_token=")) as string
  const eraseCookie = (name: string) => document.cookie = name + '=; Max-Age=-99999999;';

    (async function () {
      const token: string = getTokenFromCookie();
      if (!token) { eraseCookie("_token"); router.push('/') }
      else {
        const response = await fetch('/api/validatetoken', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
        const { isvalid } = await response.json()
        if (!isvalid) {
          eraseCookie("_token");
          router.push('/')
        }
      }
    }())
  return <></>
}



export default CheckLoginState