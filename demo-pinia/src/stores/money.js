import { defineStore } from 'pinia'
import {ref ,computed } from 'vue'

//1、Option写法：定义一个money存储单元
// export const useMoneyStore = defineStore('money', {
//   state: () => ({ money: 100 }),
//   getters: {
//     rmb: (state) => state.money,
//     usd: (state) => state.money * 7.11,
//     gbp: (state) => state.money * 9.64,
//   },
//   actions: {
//     win(arg) {
//         this.money+=arg
//     },
//     pay(arg) {
//         this.money-=arg
//     }
//   },
// })

//Setup Store 写法 响应式
// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
export const useMoneyStore = defineStore('money', () => {
//state
    const money = ref(100)
//getters
    const rmb = computed(() => money.value)
    const usd = computed(() => money.value * 7.11)
    const gbp = computed(() => money.value * 9.64)
//actions
    const win =(arg)=>money.value += arg
    const pay =(arg) =>  money.value -= arg

  return { money, rmb , usd, gbp, win, pay }

})