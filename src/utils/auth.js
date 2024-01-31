import Cookies from 'js-cookie'
import {COOKIE_KEYS} from '@/constants'



export function getToken() {
  return Cookies.get(COOKIE_KEYS.ADMIN_TOKEN)
}

export function setToken(token) {
  return Cookies.set(COOKIE_KEYS.ADMIN_TOKEN, token)
}

export function removeToken() {
  return Cookies.remove(COOKIE_KEYS.ADMIN_TOKEN)
}
