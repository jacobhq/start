export const state = () => ({
  dark: true
})

export const mutations = {
  toggleMode(state) {
    state.dark = !state.dark
  }
}
