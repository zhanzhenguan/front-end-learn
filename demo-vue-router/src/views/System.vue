<script setup>
import { useRoute } from 'vue-router';




let route = useRoute()


</script>

<template>
  <h1>System 系统管理</h1>
  <h2></h2>
  <h2>参数获取 {{$route.query.id}}-{{$route.query.name}}</h2>
  <p>路由数据获取route {{route.query.id}}-{{route.query.name}}</p>

  

</template>
