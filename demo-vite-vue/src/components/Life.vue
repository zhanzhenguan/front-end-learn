<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';



//生命周期
const count = ref(0);
let countAdd = ()=>{

    count.value ++;
}



onBeforeMount(()=>{

    console.log("挂载前 count",count.value)
    console.log("挂载前",document.getElementById('btn'))

})


onMounted(()=>{

    console.log("挂载完成 count",count.value)
    console.log("挂载完成",document.getElementById('btn'))
})


onBeforeUpdate(()=>{
    console.log("更新前 count",count.value)
    console.log("更新前 btn内容 ",document.getElementById('btn').innerHTML)
})


onUpdated(()=>{
    console.log("更新完成 count",count.value)
    console.log("更新完成 btn内容 ",document.getElementById('btn').innerHTML)
})


onBeforeUnmount(()=>{
    
})

onUnmounted(()=>{
    
})

</script>


<template>
    <div>
        <button id="btn" @click = "countAdd" >点击 {{ count }}</button>
    </div>
</template>



<style scoped>

</style>