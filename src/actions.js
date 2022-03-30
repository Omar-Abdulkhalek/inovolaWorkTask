

import axios from 'axios'
export default {
    getAllUsers(context) {
        return new Promise((resolve) => {
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
              context.state.users = resolve(response.data);
            });
        });
      },
  
      getUserAlbums(context, payload) {
        return new Promise((resolve) => {
          axios
            .get(
              `https://jsonplaceholder.typicode.com/users/${payload.id}/albums`
            )
            .then((response) => {
              context.state.albums = resolve(response.data);
            });
        });
      },
  
      getAllPhotosOfAlbum(context, payload) {
       
  
        return new Promise((resolve) => {
          axios
            .get(
              `https://jsonplaceholder.typicode.com/albums/${payload.id}/photos`
            )
            .then((response) => {
              
              context.state.photosUrls =  resolve(response.data)
            });
        });
      },
}