export const state = () => ({
  showUser: {
    data: [],
  },
  singleUser :{}
})
export const mutations = {
  setLoading(state, data) {
    state.loading = data
  },
  setUser(state, data) {
    state.showUser = data
  },
  setSingleUser(state, data) {
     state.singleUser = data
  }
}

export const actions = {
  async login() {
    await this.$axios
      .post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      })
      .then((data) => {
        this.$cookies.set('token', data.data.token)
      })
  },

  async getUser({ commit }, params) {
    await this.$axios
      .get('https://reqres.in/api/users', { params })
      .then((user) => {
        commit('setUser', user.data)
      })
  },

  async oneUser({commit},id) {
    await this.$axios.get(`https://reqres.in/api/users/`,id)
    .then((user) => {
      commit('setSingleUser', user.data.data)
    })
  }
}
