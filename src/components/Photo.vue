<template>
  <div class="card-container">
    <div v-if="status.error">
      <p>Image could not be loaded.</p>
    </div>
    <div v-else>
      <img v-bind:src="photo.url_sq_cdn" v-on:error="imageLoadError" alt="/assets/loading.gif" />
    </div>
    <div class="photo-title">{{ photo.title }}</div>
  </div>
</template>

<script>
  
export default {
  name: 'Photo',
  data() {
    return {
      status: {
        error: false
      }
    }
  },
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  computed: {
  },
  methods: {
    imageLoadError() {
      this.status.error = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .card-container {
    webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    padding: 1em 2em;
    padding-bottom: 2em;
    -webkit-box-shadow: 0 6px 27px #aeb4be rgba(0,0,0,0.5);
    box-shadow: 0 6px 27px #aeb4be rgba(0,0,0,0.5);
    -webkit-box-shadow: 0 6px 27px #aeb4be;
    -moz-box-shadow: 0 6px 27px #aeb4be;
    box-shadow: 0 6px 27px #aeb4be;
    background-color: #FFFFFF;
    display: inline-block;
    margin-right: 3%;
    margin-left: 3%;
    width: 12%;
    height: 100px;
    overflow: hidden;
    cursor: pointer;
  }
  
  div.photo-title {
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .card-container:hover {
    background-color: #BCBDC0;
  }
  
</style>
