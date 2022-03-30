<template>
  <div>
    

    <div class="container">
      <div class="row">
        <div class="col-md-3 mt-3"  v-for="user in users" :key="user">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">{{ user.name }}</h5>

              <button @click="goToAlbums(user.id)" class="btn btn-primary">Go To Albums</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  name: "userComp",

  async created() {
    await this.$store.dispatch("getAllUsers");
    this.users = this.$store.state.users.data;
    
  },
  methods:{
    goToAlbums(id){
      this.$router.push(`/albums/${id}`)
      
      
    }
  }
};
</script>

<style scoped></style>
