import Cookies from 'js-cookie'
import {COOKIE_KEYS} from '@/constants'
import {STORE_KEYS} from './types'

const useAppStore = defineStore(
  STORE_KEYS.APP,
  {
    state: () => ({
      sidebar: {
        opened: Cookies.get(COOKIE_KEYS.SIDEBAR_STATUS) ? !!+Cookies.get(COOKIE_KEYS.SIDEBAR_STATUS) : true,
        withoutAnimation: false,
        hide: false
      },
      device: 'desktop',
      size: Cookies.get(COOKIE_KEYS.SIZE) || 'default'
    }),
    actions: {
      toggleSideBar(withoutAnimation) {
        if (this.sidebar.hide) {
          return false;
        }
        this.sidebar.opened = !this.sidebar.opened
        this.sidebar.withoutAnimation = withoutAnimation
        if (this.sidebar.opened) {
          Cookies.set(COOKIE_KEYS.SIDEBAR_STATUS, 1)
        } else {
          Cookies.set(COOKIE_KEYS.SIDEBAR_STATUS, 0)
        }
      },
      closeSideBar({withoutAnimation}) {
        Cookies.set(COOKIE_KEYS.SIDEBAR_STATUS, 0)
        this.sidebar.opened = false
        this.sidebar.withoutAnimation = withoutAnimation
      },
      toggleDevice(device) {
        this.device = device
      },
      setSize(size) {
        this.size = size;
        Cookies.set(COOKIE_KEYS.SIZE, size)
      },
      toggleSideBarHide(status) {
        this.sidebar.hide = status
      }
    }
  })

export default useAppStore
