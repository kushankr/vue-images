<template>
  <div id="app">
    <ImagesList v-bind:images-data="apiData"></ImagesList>
  </div>
</template>

<script>
import APIData from './assets/data.json';
import ImagesList from './components/ImagesList.vue';

export default {
  name: 'App',
  data() {
    return {
      apiData: APIData
    }
  },
  components: {
    ImagesList
  }
}
</script>

<style>
body {
  background-color: #F2F3F6;
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
