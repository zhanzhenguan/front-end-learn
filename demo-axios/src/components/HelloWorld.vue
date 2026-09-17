<script setup>
import http from '../utils/http'






let get1= ()=>{
  http.get('/get?id=123&name=tom').then(resp=>{
      console.log(resp)
  })

}
let get2= ()=>{
  http.get('/get',{
    params:{
    id:123,
    name:'tom',
    age:16
    }
  }).then(resp=>{
      console.log(resp)
  })

}


let post= ()=>{
  http.post('/post',{
    id:123,
    name:'tom',
    age:16
  }).then(resp=>{
      console.log(resp)
  })
}


let delay= ()=>{
  http.post('/delay/2').then(resp=>{
      console.log(resp)
  }).catch(error =>{
      // console.log(error)
      
  })

}

</script>

<template>
  <h1>Vite-Vue-Axios</h1>

  <button @click="get1">Get1</button>
  <button @click="get2">Get2</button>
  <button @click="post">Post</button>
  <button @click="delay">delay</button>




</template>
