import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import UserList from '../components/UserList.vue';
import PostList from '../components/PostList.vue';
import UserPostList from '../components/UserPostList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/users', component: UserList },
  { path: '/posts', component: PostList },
  { path: '/user-posts', component: UserPostList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
