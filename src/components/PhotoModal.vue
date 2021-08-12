<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button class="modal-default-button" v-on:click="cancelChanges"><span>&times;</span></button>
            <h3>{{ photo.title }}</h3>
          </div>
          <hr class="solid" />
          <div class="modal-body">
            <div class="form-group">
              <label for="photo-sq">Photo</label>
              <img id="photo-sq" v-bind:src="photo.url_sq_cdn" />
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" id="title" name="title" v-model="selectedPhoto.title">
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea id="description" name="description" v-model="selectedPhoto.description"></textarea>
            </div>
            <div class="form-group">
              <label for="public-domain">Public Domain</label>
              <input type="checkbox" id="public-domain" name="public-domain" v-model="selectedPhoto.ispublic">
            </div>
            <div class="form-group">
              <label for="photo-id">ID</label>
              <span id="photo-id">{{ photo.id}}</span>
            </div>
            <div class="form-group">
              <label for="owner-name">Owner Name</label>
              <span id="owner-name">{{ photo.ownername }}</span>
            </div>
            <div class="form-group">
              <label for="image-dim">Image Dimensions</label>
              <span id="image-dimensions">{{ photo.width_s }} &#215; {{ photo.height_s }}</span>
            </div>
          </div>
          <hr class="solid" />
          <div class="modal-footer">
            <button class="modal-default-button" v-on:click="editPhoto">
              Save
            </button>
            <button class="modal-default-button" v-on:click="cancelChanges">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  
export default {
  name: 'PhotoModal',
  data() {
    return {
      selectedPhoto: {}
    }
  },
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  created() {
    this.selectedPhoto = Object.assign({}, this.selectedPhoto, this.photo);
  },
  methods: {
    editPhoto() {
      let allPhotosMap = Object.assign({}, this.$store.state.allPhotosMap);
      allPhotosMap[this.selectedPhoto.id] = this.selectedPhoto;
      this.$store.commit('setAllPhotosMap', allPhotosMap);
      // A put API call to also update the database
      this.$emit('hide-modal');
    },
    cancelChanges() {
      this.$emit('hide-modal');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 27px #aeb4be rgba(0,0,0,0.5);
    box-shadow: 0 6px 27px #aeb4be rgba(0,0,0,0.5);
    -webkit-box-shadow: 0 6px 27px #aeb4be;
    -moz-box-shadow: 0 6px 27px #aeb4be;
    box-shadow: 0 6px 27px #aeb4be;
    background-color: #FFFFFF;
  }

  .modal-header h3 {
    margin-top: 0;
  }

  .modal-body {
    margin: 20px 0;
    text-align: left;
  }

  .modal-default-button {
    float: right;
    cursor: pointer;
    webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border-color: #FFFFFF;
    background-color: #FFFFFF;
    margin-left: 2px;
    margin-right: 2px;
  }
  
  .modal-default-button:hover {
    border-color: #BCBDC0;
    background-color: #BCBDC0;
  }
  
  .modal-footer {
    margin-bottom: 20px;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  
  hr.solid {
    border-top: 1px solid #BCBDC0;
  }
  
  div.form-group > label {
    display: inline-block;
    width: 200px;
    text-align: left;
    vertical-align: middle;
  }
  
  div.form-group > input,
  div.form-group > textarea {
    border: 1px solid #BCBDC0;
    webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding: 4px 6px;
    vertical-align: middle;
  }
  
  img#photo-sq, div.form-group > span {
    vertical-align: middle;
  }
  
  div.form-group {
    margin-bottom: 15px;
  }
  
</style>
