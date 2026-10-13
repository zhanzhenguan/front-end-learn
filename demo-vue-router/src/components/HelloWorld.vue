<script setup>

import {useRouter} from 'vue-router'

const router = useRouter();



// params ===>  /common/:id
// query ===>  /common?id=123


const t = ()=>{

  // 跳转文章详情页 隐式传递id
  router.push(`/common/${id}`)
  // 跳转文章详情页 通过路由路径参数传递id
  router.push({ path: `/common/${id}` })
  // 跳转文章详情页 通过路由名称，参数传递id
  router.push({ name: 'common', params: { id:123 } })

}
let paramsTest = ()=> {
  // router.push('/common/222/zhangsan/188')

  router.push({
    name:'common',
    params:{
      id:222,
      name:'zhangsan',
      age:188
    }
  })
}


let  queryTest = ()=> {
  // router.push('/system?id=123&name=张三')

  router.push({
    name:'system',
    query:{
      id:456,
      name:'王五',
    }
  })
}


</script>

<template>
  <h1>Vite-Vue-Router</h1>

  <router-link to="/">首页</router-link>
  <router-link to="/permission">权限管理</router-link>
  <router-link to="/menu">菜单管理</router-link>
  <router-link to="/system?id=123&name=张三">系统管理1</router-link>

  <router-link :to="{
    path:'/system',
    query:{
      id:456,
      name:'王五'
    }
  }">系统管理2</router-link>

  <button @click="queryTest">系统管理3</button>

  <router-link to="/common/123/tom/16">公共区域/tom</router-link>
  <router-link to="/common/abc/jerry/17">公共区域/jerry</router-link>
  <router-link :to="{
    name:'common',
    params:{
      id:444,
      name:'spake',
      age:15
    }
  }">公共区域/spake</router-link>
  <button @click="paramsTest">对象传参</button>

  <router-link to="/user/001">个人中心</router-link>

  <hr/>
  <router-view></router-view>
<!-- 
  1、整合vue-router
  2、配置vue-router
      配置路由表
      创建路由器
  3、Vue实例使用router
  4、配置 router-link 和 router-view -->

</template>
