// import {login, logout, getInfo} from '@/api/login'
import {UserServiceIns} from '@/services'
import {getToken, setToken, removeToken} from '@/utils/auth'
import defAva from '@/assets/images/profile.jpg'
import {STORE_KEYS} from "./types"

const useUserStore = defineStore(
  STORE_KEYS.USER,
  {
    state: () => ({
      token: getToken(),
      userCode: '',
      name: '',
      avatar: '',
      roles: [],
      permissions: []
    }),
    actions: {
      // 登录
      login({username, password}) {
        UserServiceIns.login({username, password}).then(res => {
          const user = res.data
          var {userCode, userName, roles, avatar, permissions, token} = user;
          avatar = (avatar == "" || avatar == null) ? defAva : import.meta.env.VITE_APP_BASE_API + avatar;
          if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
            this.roles = roles
            this.permissions = permissions
          } else {
            this.roles = ['ROLE_DEFAULT']
          }
          this.userCode = userCode
          this.name = userName
          this.avatar = avatar
          this.token = token;
          setToken(token);
        });
      },

      // 退出系统
      logOut() {
        UserServiceIns.logout(this.token).then(() => {
          this.token = '';
          this.roles = [];
          this.permissions = [];
          removeToken();
        });
      }
    }
  })

export default useUserStore
