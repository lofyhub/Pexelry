

import axios from "axios"
export const state = () => ({
  photos: [],

})
export const mutations = {
  // mutate the photos array here
  addPhotos(state, payload) {
    state.photos[0].push(payload)
  }
}
export const actions = {
  // update the photos array with new search
  addPhotos(state, payload) {
    state.commit('addPhotos', payload)
  }

}
export const getters = {
  // get photos array
  getPhotos(state) {
    return state.photos;
  }

}

