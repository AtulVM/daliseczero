<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="bg-blue-800 text-white py-4 shadow-lg flex items-center justify-center relative">
      <router-link to="/" class="absolute left-4 text-white text-2xl hover:underline">←</router-link>
      <h1 class="text-3xl font-semibold">User Posts</h1>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div v-if="loading" class="flex items-center justify-center min-h-screen">
  <div class="text-center">
    <div class="loader mx-auto mb-4"></div>
    <p>Loading User Posts...</p>
  </div>
</div>


      <ul v-else class="space-y-10">
        <li v-for="user in usersWithPosts" :key="user.id" class="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
          <h3 class="text-2xl font-semibold text-blue-300">{{ user.name }}</h3>
          <p class="text-gray-400">{{ user.email }}</p>
          <div class="mt-4 space-y-4">
            <div v-for="post in user.posts" :key="post.id" class="p-4 bg-gray-700 rounded-lg border border-gray-600">
              <h4 class="text-xl font-semibold text-blue-200">{{ post.title }}</h4>
              <p class="text-gray-300 mt-2">{{ post.body }}</p>
            </div>
          </div>
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
      usersWithPosts: [],
      loading: true,
    };
  },
  async created() {
    await this.fetchUsersWithPosts();
  },
  methods: {
    async fetchUsersWithPosts() {
      try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        const users = usersResponse.data;
        const posts = postsResponse.data;

        this.usersWithPosts = users.map(user => ({
          ...user,
          posts: posts.filter(post => post.userId === user.id),
        }));
      } catch (error) {
        console.error('Error fetching users or posts:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-left-color: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
</style>
