<template>
    <div class="min-h-screen bg-gray-900 text-white flex flex-col">
      <header class="bg-blue-800 text-white py-4 shadow-lg w-full">
        <h1 class="text-4xl font-semibold text-center">User & Posts Viewer</h1>
      </header>
  
      <div class="container mx-auto px-4 py-10 flex flex-col items-center">
        <h2 class="text-2xl font-semibold mb-8 text-gray-200">Continue to selection</h2>
        
        <router-link to="/users" class="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md transition mt-4">
          User List
        </router-link>
        <router-link to="/posts" class="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md transition mt-4">
          Post List
        </router-link>
        <router-link to="/user-posts" class="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md transition mt-4">
          User Posts
        </router-link>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  