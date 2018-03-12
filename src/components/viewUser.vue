<template>
  <div class="container">
      <div class="well">
         <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center">First Name</th>
          <th class="center">Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user_alias in User">
          <td class="text-left"> {{ user_alias.first_name}}</td>
          <td class="text-left"> {{ user_alias.last_name}}</td>
          <td class="text-left"> {{ user_alias.email}}</td>
        </tr>
      </tbody>
    </table>
        <router-link to="/add-user">
    <button class="brn btn-large btn-block btn-success full-width"> Add User </button>
</router-link>
      </div>

  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
    name:'user',
    data() {
        return {
            User: [],
        }
    },
        mounted() {
        axios.get('https://api.mlab.com/api/1/databases/neelcrud/collections/users?apiKey=vdavPSkljAC1tHh1KtIRpqWYUQ4lDdAu')
            .then((response) => {
                console.log(response.data);
                this.User = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
}
</script>

<style>
  
</style>