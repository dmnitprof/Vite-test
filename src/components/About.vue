<template>
<h1>About</h1>
  <p>Имя в хранилище: {{ name }}</p>
  <router-link to="/">
    <a href="">на главную</a>
  </router-link>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()


const name = computed (() => {
  return store.state.user.name
})
</script>
