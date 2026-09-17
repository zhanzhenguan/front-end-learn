<script setup>


// 子组件 接收 父组件 数据  通信
// let props = defineProps(['money','books']);

//定义
let props = defineProps({
    money:{
        type: Number,
        required: true,
        default: 200
    },
    books: {
        type: Array,
        required: false,
        default: []
    }
})

// let buy = ()=>{
//     // Set operation on key "money" failed: target is readonly
//     props.money -=5
// }



// 子传父 发送事件

const emit = defineEmits(['buy'])
function buy() {
    // props.money -=5
  emit('buy',5)
}

</script>


<template>
   <div style="background-color: chocolate;">
    <h3>
        <!-- 插槽 -->
        <!-- <slot/> -->
        <!-- 插槽默认 -->
        <slot name="title">这里有个Son插槽</slot>
    </h3>

    <button @click="buy"> <slot name = "btn">消费</slot></button>

    <div>账户余额: {{props.money}}</div>
    <div>
        <h4>图书</h4>
        <li v-for="b in props.books">{{b}}</li>
    </div>
   </div>
</template>



<style scoped>

</style>