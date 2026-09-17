<script setup>

import { useMoneyStore } from '../stores/money'


const store = useMoneyStore()


</script>

<template>

    <div>
        <h1>$: {{store.rmb}}</h1>

        <h1>¥: {{store.usd}}</h1>

        <h1>£: {{store.gbp}}</h1>

    </div>


  
</template>
