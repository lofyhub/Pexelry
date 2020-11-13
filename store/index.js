
export const state = ()=>({
    photos:[],

})
export const  mutations = {
    // mutate the photos array here
    addPhotos(state,photos){
        state.photos.push(photos)
    }
}
export const  getters={
  // get photos array
  getPhotos(state){
    return state.photos;
  }

}

   