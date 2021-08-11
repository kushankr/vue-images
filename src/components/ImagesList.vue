<template>
  <div class="container">
    <Photo v-for="photo in paginatedPhotos" v-bind:key="photo.id" v-bind:photo="photo"></Photo>
    <div class="pagination">
      <button v-bind:disabled="firstDisabled" v-on:click="firstPage">
        {{ paginationSymbols.first }}
      </button>
      <button v-bind:disabled="firstDisabled" v-on:click="prevPage">
        {{ paginationSymbols.previous }}
      </button>
      {{ pageNumber + 1 }} of {{ pageCount }}
      <button v-bind:disabled="lastDisabled" v-on:click="nextPage">
        {{ paginationSymbols.next }}
      </button>
      <button v-bind:disabled="lastDisabled" v-on:click="lastPage">
        {{ paginationSymbols.last }}
      </button>
    </div>
  </div>
</template>

<script>
import Photo from './Photo.vue';

export default {
  name: 'ImagesList',
  props: {
    imagesData: {
      type: Object,
      required: true
    },
    size:{
      type: Number,
      required: false,
      default: 8
    }
  },
  components: {
    Photo
  },
  data() {
    return {
      pageNumber: 0,
      paginationSymbols: {
        first: '<<',
        last: '>>',
        previous: '<',
        next: '>'
      }
    }
  },
  computed: {
    pageCount() {
      let l = this.imagesData.photos.photo.length;
      let s = this.size;
      return Math.ceil(l/s);
    },
    paginatedPhotos() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.imagesData.photos.photo.slice(start, end);
    },
    firstDisabled() {
      return this.pageNumber === 0;
    },
    lastDisabled() {
      return this.pageNumber >= this.pageCount-1;
    }
  },
  methods:{
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    firstPage() {
      this.pageNumber = 0;
    },
    lastPage() {
      this.pageNumber = this.pageCount - 1;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pagination {
    margin-top: 20px;
  }
  
  .pagination > button {
    cursor: pointer;
  }
</style>
