//F5刷新会造成vux数据丢失，故而从缓存里拿
const state = {
  userInfo: {},
  count: 0,
  name: '周杰伦'
}

// getters
const getters = {
  isLogined() {
    return sessionStorage.getItem('userInfo')&&Object.keys(sessionStorage.getItem('userInfo')).length ? true : false
  }
}

// actions
const actions = {
  queryUserInfo({
    dispatch,
    commit
  }, payload) {
    commit('setUserInfo', payload);
    dispatch('addCount')
    // const data = await queryUserInfo();
    // commit('setUserInfo', data.data);
  },
  addCount({commit}) {
    commit('setCount')
  },
  quit({commit}){
      commit('quit')
  }
}

// mutations
const mutations = {
  setUserInfo(state, userInfo) {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
    state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  },
  setCount(state) {
    sessionStorage.setItem('count', ++state.count)
    state.count = sessionStorage.getItem('count')
  },
  quit(state){
    state.userInfo = {}
    state.count = 0
    sessionStorage.removeItem('userInfo')
    sessionStorage.removeItem('count')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
