import useSettingsStore from './modules/layout'
import useAppStore from './modules/app'
import usePermissionStore from './modules/permission'
import useUserStore from './modules/user'
import useTagsViewStore from './modules/tagsView'
const store = createPinia()

export {useSettingsStore, useAppStore, useTagsViewStore, usePermissionStore, useUserStore, store}