<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="bg-blue-800 text-white py-4 shadow-lg flex items-center justify-center relative">
      <router-link to="/" class="absolute left-4 text-white text-2xl hover:underline">←</router-link>
      <h1 class="text-3xl font-semibold">Post List</h1>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div v-if="loading" class="flex items-center justify-center min-h-screen">
  <div class="text-center">
    <div class="loader mx-auto mb-4"></div>
    <p>Loading...</p>
  </div>
</div>

      <ul v-else class="space-y-6">
        <li v-for="post in posts" :key="post.id" class="p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
          <h3 class="text-2xl font-semibold text-blue-300">{{ post.title }}</h3>
          <p class="text-gray-400 mt-2">{{ post.body }}</p>
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
      posts: [],
      loading: true,
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
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
