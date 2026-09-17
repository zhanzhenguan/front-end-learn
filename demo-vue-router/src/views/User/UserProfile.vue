<script setup>
import { useRoute, useRouter } from 'vue-router';




const route = useRoute()
const router = useRouter()

let getInfo = ()=>{

    console.log(route.params);//参数
    console.log(route.name);//组件名
    console.log(route.path);//路径

}

let goHome = ()=>{
    router.push('/')
}


let back = ()=>{
    router.go(-1)
}


</script>

<template>
  <h1>UserProfile</h1>
  <h2>个人详情</h2>
  <button @click="getInfo">获取路由数据</button>
  <button @click="goHome">回到首页</button>
  <button @click="back">回退</button>

  

</template>
