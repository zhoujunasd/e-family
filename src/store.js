import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    token: '',
    readOnly: true,
    img: "",
    row:{}
  },
  mutations: {
    GTE_INFO(state,userinfo){
      state.userData = userinfo
    },
    GTE_TOKEN(state,token){
      state.token = token
    },
    CHANGE_READ(state){
      state.readOnly = !state.readOnly
    },
    CHANGE_READONLY(state,val){
      state.readOnly = val
    },
    CHANGE_IMG(state,imgstr){
      state.img = imgstr
    },
    CHANGE_ROW(state,row){
      state.row = row
    },
  },
  actions: {},
  plugins: [createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem (key),
      setItem: (key, value) =>
      sessionStorage.setItem(key, value,),
      removeItem: key => sessionStorage.removeItem(key),
    },
  })],
});
