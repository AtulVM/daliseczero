<template>
  <div id="app">
    
    <header class="bg-blue-600 text-white py-4 shadow-md">
      <h1 class="text-4xl font-semibold text-center">Dalisec</h1>
    </header>

    
    <div class="container mx-auto px-4 py-6">
      <h2 class="text-3xl font-bold text-center mb-6">Users and Their respective Posts </h2>
      
      <ul>
        <li v-for="user in users" :key="user.id" class="mb-8 p-4 border rounded shadow">
          
          <h3 class="text-2xl font-semibold mb-2">{{ user.name }}</h3>
          <p class="text-gray-600 mb-4">{{ user.email }}</p>

          
          <div v-if="user.posts.length">
            <h4 class="text-xl font-semibold mb-2">Posts:</h4>
            <ul class="list-disc list-inside">
              <li v-for="post in user.posts" :key="post.id" class="mb-2">
                <strong>{{ post.title }}</strong>
                <p class="text-gray-700">{{ post.body }}</p>
              </li>
            </ul>
          </div>
          <div v-else class="text-gray-500">No posts available</div>
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
      users: [],
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Store users and posts in the data property
        this.users = usersResponse.data;
        this.posts = postsResponse.data;

        // Associate posts with each user
        this.users.forEach(user => {
          user.posts = this.posts.filter(post => post.userId === user.id);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>


