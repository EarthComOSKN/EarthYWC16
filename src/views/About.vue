<template>
<div class="container">
  <quiz ></quiz>

</div>
</template>

<script>
const GoogleImages = require('google-images');
import VueGallery from 'vue-gallery';
import quiz from '@/components/quiz.vue';
import config from '@/data/config.js';
// const axios = require('axios');



import setimmediate from 'setimmediate';
export default {
  name: 'About',
  components: {
    'gallery': VueGallery,
    quiz,
  },
  data () {
    return {
      images : null,
      isDownloading:true,
      index: null,
      number: 10,
    }
  },
  
  methods: {
    async testGet(){
      // const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      this.isDownloading = true;
      const client = await new GoogleImages(config.searchEngineID,config.KeyGoogleAPI);
      const res = await client.search('jane.bnk48official profile picture', {size: 'large', page:1 ,type:'face'});
      this.images = res.map( img => img.url);
      console.log(this.images);
      if (this.isDownloading !== null) this.isDownloading = false;
      // this.isDownloading = false;
    },
  },
  mounted:function () {
    this.testGet()
  },
  // mounted() {
  //   getImg();
  // },
}
</script>

<style>

/* .about {
  position:center;
  z-index: 1000;
}
.detail {
  z-index: 1;
} */

@keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
@-webkit-keyframes rotating
    {
    from
        {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        }
    to
        {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        }
    }
.rotating
    {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
    }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
