<template>
  <div class="photo-content">
    <div class="card-container" v-on:click="showPhotoModal">
      <div v-if="status.error" class="image-content">
        <div id="image-error-msg">Image could not be loaded.</div>
      </div>
      <div v-else>
        <img v-bind:src="photo.url_s_cdn" v-on:error="imageLoadError" />
      </div>
      <div class="photo-title">{{ photo.title }}</div>
    </div>
    <PhotoModal v-if="modalVisible" v-bind:photo="photo" v-on:hide-modal="hidePhotoModal"></PhotoModal>
  </div>
</template>

<script>
import PhotoModal from './PhotoModal.vue';
export default {
  name: 'Photo',
  data() {
    return {
      status: {
        error: false
      },
      modalVisible: false
    }
  },
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  components: {
    PhotoModal
  },
  computed: {
  },
  methods: {
    imageLoadError() {
      this.status.error = true;
    },
    showPhotoModal()  {
      this.modalVisible = true;
    },
    hidePhotoModal() {
      this.modalVisible = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .photo-content {
    display: inline-block;
  }
  
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
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  
  .card-container div.image-content,
  .card-container img {
    height: 225px;
    width: 225px;
    display: block;
  }
  
  div#image-error-msg {
    position: relative;
    top: 50%; 
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }
  
  div.photo-title {
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 225px;
  }
  
  .card-container:hover {
    background-color: #BCBDC0;
  }
  
  .card-container:hover > div.photo-title {
    text-decoration: underline;
    font-weight: bold;
  }
  
</style>
