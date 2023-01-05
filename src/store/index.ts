import { defineStore } from "pinia";
export interface photo {
  id: number;
  avg_color: string;
  height: number;
  liked: false;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  src: {
    landscape: string;
    url: string;
    width: number;
    medium: string;
    large: string;
    large2x: string;
    portrait: string;
    small: string;
    tiny: string;
  };
}
export interface RootState {
  photos: photo[];
}

export const useRootStore = defineStore(`rootStore`, {
  state: (): RootState => {
    return {
      photos: [],
    };
  },
  persist: true,
  actions: {
    async fetchPhotos(search: string) {
      const headers = {
        Authorization: `563492ad6f91700001000001d4bfd73691c24786accf5bfa2d13b084`,
      };
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${search}&per_page=60`,
          { headers }
        );
        const data = await response.json();
        this.photos = data.photos;
        console.log(data.photos);
      } catch (error: unknown) {
        console.log(error);
      }
    },
  },
  getters: {},
});
