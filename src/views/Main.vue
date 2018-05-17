<template>
  <a-row class="main">
    <x-header></x-header>
    <router-view style="margin-top: 50px" />
    <x-footer></x-footer>
  </a-row>
</template>

<script>
import xHeader from './components/main/header.vue'
import xFooter from './components/main/footer.vue'
export default {
  components: {
    xHeader,
    xFooter
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.main {
  background: #f5f5f5;
}
</style>