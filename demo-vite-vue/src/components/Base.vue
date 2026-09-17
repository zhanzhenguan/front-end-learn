<script setup>
import { computed, reactive, ref, watch, watchEffect } from 'vue'

let name = "张三"

// let car = {
//     brand :"小米",
//     price :199
// }

let car= reactive({
    brand :"小米",
    price :200
})

//指令 v-xxx
//基础指令 v-html  v-text

//事件指令 v-on

//判断指令 v-if

//循环指令 v-for


let msg = "<p style='color: red' >你好</p>"

let fruits = ['苹果','香蕉','橘子','西瓜']

//函数
let buy = ()=>{
    alert("购买成功!!!")
}

//属性绑定 v-bind  单向绑定   数据   ->  页面

//表单绑定 v-model 双向绑定   数据 <- > 页面

const url = ref("https://www.baidu.com")


let changeUrl = ()=>{
    url.value = "https://www.taobao.com"
    // url = ref("https://www.taobao.com")

    alert(url.value)
}

//响应式: ref()  reactive()
//          	      ref()	                                   reactive()
// 能包装什么​	任意类型（基本类型、对象、数组都行）	  只能包装对象类型（Object、Array、Map、Set）
// 底层实现​	RefImpl 类，内部用 .value 持有值	     Proxy 代理整个对象
// 访问方式​	JS 里必须 .value，模板里自动解包	     直接访问属性，无需 .value
// 重新赋值​	✅ 支持（count.value = 10）	          ❌ 直接替换整个对象会丢失响应性​
// 官方推荐​	✅ 首选（Vue 官方现在推荐优先用 ref） 	适合表单对象、复杂状态聚合


let addPrice = ()=>{
    car.price += 300;
}


const num = ref(1)

//计算属性
const totalPrice = computed(()=> car.price * num.value )


//监听器
// watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。

// watch(num,(value,oldValue,onCleanup)=>{

//     console.log("value",value)
//     console.log("oldValue",oldValue)
//     if(num.value > 3) {
//         alert("超出限购数据了")
//         num.value = 3
//     }

// })
//watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到
//的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

watchEffect (()=>{
    if(num.value > 3) {
        alert("超出限购数据了")
        num.value = 3
    }

    if(car.price > 11000){
        alert("超出限购数据了")
        car.price = 11000

    }

})


</script>

<template>
    <h1> 我的第一个组件 </h1>

    <a :href="url"  :aaa="url" >Go!!! {{url}}</a>

    <button @click="changeUrl">改变地址</button>


    <h1>姓名: {{name}}</h1>
    <h1>品牌: {{car.brand}}</h1>
    <h1>价格: {{car.price}}</h1>
    <h1>数量: {{num}}</h1>
    <h1>总价: {{totalPrice}}</h1>

    <!-- <button v-on:click="buy">购买</button> -->

    <div>
        <button @click="addPrice">加价</button>
        <button @click="num++">加量</button>
        <button @click.once="buy">购买</button>
    </div>

    <div v-html="msg"></div>
    <div>{{ msg }}</div>
    <div v-text="msg"></div>
    

    <span class="py" v-if="car.price<1000">很便宜</span>
    <span class="tg" v-else>太贵了</span>


    <li v-for="(f,i) in fruits"> {{ f }}  =>{{i}}</li>

</template>

<style scoped>

.py {
    color: green;
}

.tg {
    color: red;
}


</style>