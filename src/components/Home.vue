<template>
  <h1> home</h1>
  <p>Имя в хранилище: {{ name }}</p>
  <input class="input" v-model="newName"  @keyup.enter="saveName" type="text" />
  <button class="btn" @click="saveName">Проверить</button>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
import { useRouter } from 'vue-router'
const router = useRouter()

const name = computed((() => {
  return store.state.user.name
}))

const  newName = ref('')
function saveName() {
    store.dispatch('saveName', newName.value)
    newName.value = ''
    router.push('/about')
}
</script>

<style scoped>
.btn {
  margin: 1rem 0 0 0;
}
.input {
  width: 50%;
}

@media (min-width: 320px) and (max-width: 576px){
  .input {
    width: 80%;
  }
}
@media (min-width: 1200px){
  .input {
    width: 33.333%;
  }
}
</style>