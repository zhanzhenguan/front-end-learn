<script setup>
import { useRoute, useRouter } from 'vue-router';



//获取当前路由信息（只读，页面数据）  
const route = useRoute()
//路由实例，做跳转 / 编程导航（操作路由）
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


route.path          // 当前路径 /backend/dashboard
route.fullPath      // 完整路径（带query）/backend/user?id=1
route.params        // 动态路由参数 { id: 1 }
route.query         // url查询参数 ?name=xxx
route.meta          // 路由meta（权限、标题）
route.name          // 路由name


router.push('/home')          // 新增历史记录跳转（可回退）
router.replace('/login')       // 替换当前历史，不能回退
router.go(-1)                  // 返回上一页，等同于 history.back()
router.back()                  // 回退
router.forward()               // 前进


</script>

<template>
  <h1>UserProfile</h1>
  <h2>个人详情</h2>
  <button @click="getInfo">获取路由数据</button>
  <button @click="goHome">回到首页</button>
  <button @click="back">回退</button>

  

</template>
