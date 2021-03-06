<template>
  <div id="images-list">
    <h1>Image Gallery</h1>
    <div class="search-box">
      <label for="search">Search</label>
      <input type="text" id="search" placeholder="Search by Title/Description" v-model="search">
      <span v-if="pageCount > 0" class="filter-text">Displaying {{ imagesShown.start }} to {{ imagesShown.end }} of {{ filteredPhotos.length }} images</span>
    </div>
    <hr class="solid" />
    <Photo v-for="photo in paginatedPhotos" v-bind:key="photo.id" v-bind:photo="photo"></Photo>
    <div v-if="pageCount > 0" class="photos-pagination">
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
    <div v-else class="photos-pagination">
      No search results found.
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
      default: 10
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
      },
      search: ''
    }
  },
  created() {
    let photoMap = {};
    for (let photo of this.imagesData.photos.photo) {
      let key = photo.id;
      let value = photo;
      value.description = photo.description._content;
      photoMap[key] = value;
    }
    this.$store.commit('setAllPhotosMap', photoMap);
  },
  computed: {
    pageCount() {
      let l = this.filteredPhotos.length;
      let s = this.size;
      return Math.ceil(l/s);
    },
    paginatedPhotos() {
      const start = this.pageNumber * this.size;
      const end = start + this.size;
      return this.filteredPhotos.slice(start, end);
    },
    firstDisabled() {
      return this.pageNumber === 0;
    },
    lastDisabled() {
      return this.pageNumber >= this.pageCount-1;
    },
    filteredPhotos() {
      return Object.values(this.$store.state.allPhotosMap).filter(photo => {
        return photo.title.toLowerCase().includes(this.search.toLowerCase()) || 
               photo.description.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    imagesShown() {
      const start = this.pageNumber * this.size;
      const end = Math.min(start + this.size, this.filteredPhotos.length);
      return {start: start + 1, end: end};
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
  watch: {
    search: function() {
      this.pageNumber = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  #images-list {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
  
  .photos-pagination {
    padding-top: 20px;
  }
  
  .photos-pagination > button {
    cursor: pointer;
    webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border-color: #FFFFFF;
    background-color: #FFFFFF;
    margin-left: 2px;
    margin-right: 2px;
  }
  
  .photos-pagination > button:hover {
    border-color: #BCBDC0;
    background-color: #BCBDC0;
  }
  
  div.search-box {
    margin-bottom: 20px;
    text-align: left;
    margin-left: 5%;
  }
  
  div.search-box > label {
    margin-right: 5px;
  }
  
  div.search-box > input#search {
    width: 200px;
    border: 1px solid #BCBDC0;
    webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding: 4px 6px;
  }
  
  hr.solid {
    border-top: 1px solid #BCBDC0;
    margin-left: 3%;
    margin-right: 3%;
  }
  
  span.filter-text {
    margin-left: 20px;
  }
  
</style>
