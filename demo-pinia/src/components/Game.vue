<script setup>



import { useMoneyStore } from '../stores/money'


const moneyStore = useMoneyStore()


let ggl =(a)=>{
    moneyStore.win(a)
}

let bbt =(a)=>{
    moneyStore.pay(a)
}


</script>

<template>
    <button @click="ggl(100)">刮刮乐</button>
    <button @click="bbt(5)">棒棒糖</button>

  
</template>
