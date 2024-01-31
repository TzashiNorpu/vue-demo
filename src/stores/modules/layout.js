import defaultSettings from '@/layoutSettings'
import {useDynamicTitle} from '@/utils/dynamicTitle'
import {STORE_KEYS} from './types'
import {LOCALSTORAGE_KEYS} from '@/constants'

const {sideTheme, showSettings, topNav, tagsView, fixedHeader, sidebarLogo, dynamicTitle} = defaultSettings

const storageSetting = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEYS.LAYOUT_SETTING)) || ''

const useSettingsStore = defineStore(
  STORE_KEYS.LAYOUT_SETTING,
  {
    state: () => ({
      title: '',
      theme: storageSetting.theme || '#409EFF',
      sideTheme: storageSetting.sideTheme || sideTheme,
      showSettings: showSettings,
      topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
      tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
      fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
      sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo,
      dynamicTitle: storageSetting.dynamicTitle === undefined ? dynamicTitle : storageSetting.dynamicTitle
    }),
    actions: {
      // 修改布局设置
      changeSetting(data) {
        const {key, value} = data
        if (this.hasOwnProperty(key)) {
          this[key] = value
        }
      },
      // 设置网页标题
      setTitle(title) {
        this.title = title
        useDynamicTitle();
      }
    }
  })

export default useSettingsStore