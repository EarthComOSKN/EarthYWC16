<template>
  <div class="">
    <div class="container">
      <div class="row" style="margin:5% 0px 5% 0px;"> 
        <div class="col-12">
          <h1>Statistic</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <blood></blood>
        </div>
        <div class="col-12 col-lg-6">
          <color></color>
        </div>
      </div>
      <div class="row">
        <div class="col-12 rotate">
          <age></age>
        </div>
      </div>
      
      </div>
    </div>
</template>


<script>
// @ is an alias to /src
import VueGallery from 'vue-gallery';
import setimmediate from 'setimmediate';
import blood from '@/components/BloodType.js'
import color from '@/components/FavColor.js';
import age from '@/components/Age.js';

export default {
  name: 'statistic',
  components: {
    blood,
    color,
    age,
  },
  data () {
    return {
    
    }
  },
  mounted() {
    this.testGet()
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    async testGet(){
      // const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      // this.isDownloading = true;
      // this.images = res.map( img => img.url);
      // this.images[0] = 'https://scontent.fbkk5-2.fna.fbcdn.net/v/t1.0-9/40510042_2127018607616637_6418495841215971328_n.jpg?_nc_cat=1&_nc_ht=scontent.fbkk5-2.fna&oh=c3a184d13f84abbd4f8d434cf5d86dd6&oe=5C833484';
      // console.log(this.images);
      // if (this.isDownloading !== null) this.isDownloading = false;
      // this.isDownloading = false;
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
.center {
  text-align: center;
}
@media (max-width: 767.98px) {
  .rotate {
    -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Safari */
    transform: rotate(90deg);
}
}
</style>
