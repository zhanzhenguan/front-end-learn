<script setup>
import { message } from 'ant-design-vue'
const cols = [{ title: '名称', dataIndex: 'name' }]
const rows = [{ id: 1, name: '张三' }]
const msg = () => message.success('ok')
</script>


<template>
  <a-button type="primary" @click="msg">提交</a-button>
  <a-table :columns="cols" :data-source="rows" row-key="id" />
</template>

