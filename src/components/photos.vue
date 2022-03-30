<template>
  <div>
    <h1>Hello From Photos Component</h1>
    <span v-for="photosUrl in photosUrls" :key="photosUrl">
      <img :src="photosUrl" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      photosUrls: [],
    };
  },
  name: "photoComponent",

  methods: {},
  created() {
    this.id = this.$route.params.albumid;

    this.$store
      .dispatch("getAllPhotosOfAlbum", { id: `${this.id}` })
      .then((response) => {
        for (let i = 0; i < response.length; i++) {
          this.photosUrls.push(response[i].thumbnailUrl);
        }
      });
  },
};
</script>

<style lang="scss" scoped></style>
