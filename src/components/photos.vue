<template>
  <div>
    <h1>Hello From Photos Component 
     
    </h1>
    <span v-for="photosUrl in photosUrls " :key='photosUrl'>
        <img :src="photosUrl"  >
    </span>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:'',
            photosUrls:[]
        }
    },
  name: "photoComp",

  methods:{
      getAllPhotosOfAlbum(id){
          axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).
          then(res=>{
            //   console.log(res.data);
            for(let i=0 ; i<res.data.length ; i++){
                this.photosUrls.push(res.data[i].thumbnailUrl)
            }
          })
      }
  }
  ,
  created() {
    this.id = this.$route.params.albumid; //that perporty will catch the id of the path
    this.getAllPhotosOfAlbum(this.id)
    console.log(this.photosUrls);
    
  },
  
};
</script>

<style lang="scss" scoped></style>
