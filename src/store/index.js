import Vue from 'vue';
import Vuex from 'vuex';
import users from '../assets/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: users,
    newUserForm: {
      tel: '',
      name: '',
      id: null,
      children: [],
    },
  },
  mutations: {
    addUser: (state, parent) => {
      function check(list, parents) {
        for (let i = 0; i < list.length; i += 1) {
          if (list[i].name === parents) {
            console.log(list[i].name);
            list[i].children.push(state.newUserForm);
          } else {
            check(list[i].children, parents);
          }
        }
      }
      if (parent) {
        check(state.userList, parent);
      } else {
        state.userList.push(state.newUserForm);
      }
      state.newUserForm = {
        tel: '',
        name: '',
        id: null,
        children: [],
      };
    },
  },
  actions: {
    POST_ADD_USER({ commit }, parent) {
      commit('addUser', parent);
    },
  },
  modules: {
  },
  getters: {
    Users(state) {
      return state.userList;
    },
    NewUserForm(state) {
      return state.newUserForm;
    },
  },
});
