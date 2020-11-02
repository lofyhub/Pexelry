<template>
<div>
    <div class="pexelry-wrapper">
                <div class="pexelry-head">
                  <div>
                    <h1>Pexelry</h1>
                    <p>pic it</p>
                  </div>
                </div>
                  <div class="search-wrapper">
                          <form @submit.prevent="getSearch">
                                  <div class="input-group">
                                      <input 
                                      type="text" 
                                      class="form-control" 
                                      placeholder="Search photos here ..."
                                      v-model="search"
                                      />
                                      <span ><button type="submit" class="input-group-addon bg-success " >Search</button></span>
                                  </div>
                          </form>
          
              </div>

  </div>
      <div class="photos-wrapper">
        <Photos
            v-for="photo in photos" 
            v-bind:key="photo.id" 
            :name="photo.photographer" 
            :attrib="photo.photographer_url"
            :img="photo.src.medium"
            :id="photo.id"
          />


      </div>
</div>
  
</template>

<script>

export default {
  components:{ 
  Photos:()=> import('@/components/photos')
  },
  data(){
    return{
      api_key:'563492ad6f9170000100000111d2967d21b84fa6aedf06aba0226fd8',
      photos:[],
      search:'car'
    }
  },
 async created(){
  //  runs every time the page renders
   const headers = { "Authorization": this.api_key};
   try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${this.search}&per_page=80`, { headers});
    const data = await response.json();
    this.photos= data.photos;
    this.search='';
     
   } catch (error) {
     console.log(error);
     
   }


  },
  methods:{
    // runs only on field search
    async getSearch(){
  const headers = { "Authorization": this.api_key};
  // fetch photos from the api
   
   const response = await fetch(`https://api.pexels.com/v1/search?query=${this.search}&per_page=80`, { headers});
   const data = await response.json();
   this.photos= data.photos;
   this.search='';
   

    }
  }
}
</script>

<style scoped>
.pexelry-wrapper{
  width: 100%;
  height: 500px;
  background-image: url('../assets/pexels-marley-clovelly-3673525.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 
}
.pexelry-head{
   display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
h1{
  font-size: 6rem;
}
p{
  font-size: 2.5rem;
}
h1,p{
  text-align: center;
}
.search-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 0 0 0 ;
}
button{
    text-align: center;
    padding: 7px 10px;
    margin-left: 0.5px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
    border: none;
    font-weight: 500;

  }
  button:focus{
    outline: none;
  }
.photos-wrapper{
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;

}
</style>
