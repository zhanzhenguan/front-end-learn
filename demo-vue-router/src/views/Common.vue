<script setup>
import { useRoute } from 'vue-router';


const route = useRoute()


</script>

<template>
  <h1>Common 公共区域</h1>
  <h2>路径参数获取 {{$route.params.id}}-{{$route.params.name}}-{{$route.params.age}}</h2>
  <p>路由数据获取route {{route.params.id}}-{{route.params.name}}-{{route.params.age}}</p>
  

</template>
