<template>
    <div class="min-h-screen bg-gray-900 text-white">
      <header class="bg-blue-800 text-white py-4 shadow-lg flex items-center justify-center relative">
        <router-link to="/" class="absolute left-4 text-white text-2xl ">
          <                             <!-- space for back -->
        </router-link>
        <h1 class="text-3xl font-semibold">User List</h1>
      </header>
  
      
      <div class="container mx-auto px-4 py-8">
        <ul class="space-y-6">
     
          <li v-for="user in users" :key="user.id" class="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h3 class="text-2xl font-semibold text-blue-300">{{ user.name }}</h3>
            <p class="text-gray-400">{{ user.email }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        users: []
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
    }
  };
  </script>
  