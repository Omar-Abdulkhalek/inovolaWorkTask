<template>
  <div>
    <h1>Hello From Albums Component</h1>
    
    <div class="container">
      <router-view :key="$route.fullPath"></router-view> 
      <div class="row">
        <div
          class="col-md-6 mt-3"
          v-for="userAlbum in userAlbums"
          :key="userAlbum"
        >
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">Name: {{ userName }}</h5>
              <h6>Email: {{userEmail}}</h6>
              <p>{{ userAlbum.title }}</p>

              <!-- <button class="btn btn-success" @click="goToAlbumPhotos(userAlbum.id)">
                Go To Photos
               
                "`sasdasd/{sdasdas}`"

              </button> -->

              <router-link
                class="btn btn-success"
                :to="`/albums/${id}/${userAlbum.id}/photos`"
                >Go To Photos</router-link
              >

              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "albumComp",

  data() {
    return {
      id: "",
      userAlbums: [], //all albums of user
      users: '', //all users
      userName: "", //the selcted user name
      userEmail:''
    };
  },
  created() {
    this.id = this.$route.params.userid; //that perporty will catch the id of the path

    this.getUserAlbums(this.id);
    this.users = this.$store.state.users.data;
    this.userName = this.users[this.id-1].name;
    this.userEmail = this.users[this.id-1].email
    console.log(this.users);



    
   
  },
  methods: {
    getUserAlbums(id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then((res) => {
          this.userAlbums = res.data;
        });
    },
    // goToAlbumPhotos(id) {
    //   this.$router.push(`/albums/${id}/photos`);
    // },
  },
};
</script>

<style scoped></style>
