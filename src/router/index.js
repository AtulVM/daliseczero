import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import UserList from '../components/UserList.vue';
import PostList from '../components/PostList.vue';
import UserPostList from '../components/UserPostList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostList,
  },
  {
    path: '/user-posts',
    name: 'UserPostList',
    component: UserPostList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;