<template>
  <div class="container">
  
    <form v-if="!submitted">
  
      <div class="well">
        <h4> Add User</h4>
        <div class="form-group">
          <label class="pull-left"> First Name </label>
          <input type="text" class="form-control" placeholder="First Name" v-model="User.first_name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Last Name </label>
          <input type="text" class="form-control" placeholder="Last Namen" v-model="User.last_name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Email </label>
          <input type="text" class="form-control" placeholder="Email " v-model="User.email">
        </div>
      </div>
  
      <button type="button" class="btn btn-large btn-block btn-primary full-width" @click="addToAPI">Submit</button>
      <!-- <button class="btn btn-large btn-block btn-success full-width">Go User</button> -->
    </form>
        <div v-if="submitted">
            <h3>Thanks for adding your post</h3>
        </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      User: { first_name: '', last_name: '', email: '' },
      submitted: false
    }
  }, methods: {
    addToAPI() {
      let newUser = {
        first_name: this.User.first_name,
        last_name: this.User.last_name,
        email: this.User.email
      }
      console.log(newUser);
      axios.post('https://api.mlab.com/api/1/databases/neelcrud/collections/users?apiKey=vdavPSkljAC1tHh1KtIRpqWYUQ4lDdAu', newUser)
        .then((response) => {
          console.log(response);
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error);
          submitted: false
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>