<script setup>




</script>

<template>
  <h1>User</h1>
  <h2>我是用户 {{$route.params.id}}</h2>
  <router-link to="/user/001/profile">个人详情</router-link>
  <router-link to="/user/001/posts">邮箱</router-link>
  <div style="border: 5px solid red">
    <router-view></router-view>
  </div>
    

</template>
