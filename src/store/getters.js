//根级别的getter
//一般使用getters 来获取state的状态 而不是直接使用state
export const name = (state) => {
    return state.name;
  }

  export const ss = (state) => {
    return state.login.ss;
  }

// const getters = {
//   username: state => state.login.username,
//   role: state => state.login.role,
//   newrouter: state => state.login.newrouter,
//   route: state => state.login.route,
//   name: state => state.name
// };
// export default getters;
