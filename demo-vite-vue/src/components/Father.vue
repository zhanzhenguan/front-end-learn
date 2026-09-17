<script setup>
import { reactive, ref } from 'vue';
import Son from './Son.vue';

//父传子 单向
// const money = ref(100)
// const books = ref(['西游记','红楼梦','水浒传','三国演义'])

//批量 对象
const data = reactive({
    money: 20,
    books:['西游记','红楼梦','水浒传','三国演义']
})



let buy = (money)=>{
    if(data.money > 0){
        data.money -= money
    }else{
        console.log(data.money)
        alert("账号余额不足" )
    }
    

}



</script>


<template>
   <div style="background-color: bisque;">
    <h2>Father</h2>
    <button @click="data.money += 10">充值</button>

    <!-- <Son :money="money" :books="books" /> -->

    <!-- <Son :money="data.money" :books="data.books" /> -->

    <Son v-bind="data" @buy="buy">
        <!-- 插槽 -->
        <!-- <button>Son</button> -->
         <template #title>
            插槽Son
         </template>
          <template #btn>
            购买
         </template>
    </Son>

   </div>
</template>



<style scoped>

</style>