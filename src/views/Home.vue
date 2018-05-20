<template>
  <div class="home" >
    <navBar/>
    <contents/>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from '@/components/navBar.vue'
import contents from '@/components/contents.vue'

export default {
  name: 'home',
  components: {
    navBar,
    contents
  }
}
</script>

<style >
  body {
    background-color: azure
  }
</style>
