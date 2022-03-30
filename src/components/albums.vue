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
              <h6>Email: {{ userEmail }}</h6>
              <p>{{ userAlbum.title }}</p>

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
// import axios from "axios";
export default {
  name: "albumComponent",

  data() {
    return {
      id: "",
      userAlbums: [],
      users: "",
      userName: "",
      userEmail: "",
    };
  },
  created() {
    this.id = this.$route.params.userid;

    this.$store.dispatch("getAllUsers").then((response) => {
      this.users = response;
    });
    // this.userName = this.users[this.id].name
    // this.userEmail = this.users[this.id - 1].email;

    this.$store
      .dispatch("getUserAlbums", { id: `${this.id}` })
      .then((response) => {
        this.userAlbums = response;
      });
  },
  methods: {},
};
</script>

<style scoped></style>
