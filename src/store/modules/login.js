//  模块1
import {
  setStore,
  getStore,
  removeStore
} from '../../config/mUtils';

const login = {
  state: {
    username: sessionStorage.getItem('USERNAME'),
    role: sessionStorage.getItem('ROLE'),
    introduce: '',
    newrouter: [],
    userInfo: '',
    timer: null,
    router: null,
    ss:'你好'
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
    SET_INTRODUCE: (state, introduce) => {
      state.introduce = introduce;
    },
    SET_NEWROUER: (state, newrouter) => {
      state.newrouter = newrouter;
    },
    RECORD_USERINFO: (state, info) => {
      setStore('mining_username', info);
      state.timer = setTimeout(() => {
        removeStore('mining_username');
        state.userInfo = null;
        clearInterval(state.timer);
      }, 3600000000000000)
    },
    OUT_LOGIN: (state) => {
      state.userInfo = null;
      state.login = false;
      removeStore('mining_username');
      clearInterval(state.timer);
    },
    UPDATE_DIRECTION: (state, router) => {
      state.router = router;
    }
  },
  actions: {
    GetRouter({
      commit
    }, router) {
      return new Promise((resolve, reject) => {
        commit('UPDATE_DIRECTION', router); //存储最新路由
        resolve(router);
      }).catch(error => {
        reject(error);
      });
    },
    Logins({
      commit
    }, info) {
      return new Promise((resolve, reject) => {
        let data = {};
        // loginByUserInfo.map(function (item) { //获取所以用户信息
        // 	if(info.username === item.username || info.pew === item.pew){
        // 		commit('SET_USERNAME',item.username);  //将username和role进行存储
        // 				sessionStorage.setItem('USERNAME', item.username); //存入 session 
        // 				console.log(item.role);
        // 		commit('SET_ROLE',item.role);
        // 		sessionStorage.setItem('ROLE', item.role);
        // 		return data={username:item.username,introduce:item.introduce};
        // 	}else{
        // 		return data;
        // 	}
        // });  

        if (info.username || info.role) {
          commit('SET_USERNAME', info.username); //将username和role进行存储
          sessionStorage.setItem('USERNAME', info.username); //存入 session 
          commit('SET_ROLE', info.role);
          sessionStorage.setItem('ROLE', info.role);
          return data = {
            username: info.username,
            // introduce: info.introduce
          };
        } else {
          return data;
        }
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    },
    Roles({
      commit
    }, newrouter) {
      return new Promise((resolve, reject) => {
        commit('SET_NEWROUER', newrouter); //存储最新路由
        resolve(newrouter);
      }).catch(error => {
        reject(error);
      });
    },
    Logout({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {

        commit('SET_USERNAME', '');
        commit('SET_ROLE', '');
        commit('SET_NEWROUER', []);
        location.reload();
        sessionStorage.removeItem('USERNAME');
        sessionStorage.removeItem('ROLE');
        resolve();
      }).catch(error => {
        reject(error);
      });
    },

  }
}
export default login;