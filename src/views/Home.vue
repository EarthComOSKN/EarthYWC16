<template>
  <div class="">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="3000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

      <!-- Text slides with image -->
      <!-- <b-carousel-slide img-src="https://i.imgur.com/bvBI6ha.jpg"></b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="http://www.showwallpaper.com/wallpaper/1804/096432.jpg"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://i.imgur.com/bvBI6ha.jpg" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="http://www.showwallpaper.com/wallpaper/1804/096432.jpg" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="http://www.showwallpaper.com/wallpaper/1804/096433.jpg" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://pbs.twimg.com/media/DZn-_FZV4AEyo20.jpg:large" alt="image slot">
      </b-carousel-slide>
    </b-carousel>
    <div class="">
    <div class="row single">
      <div class="col">
      <h1>1st Single</h1>
      </div>
    </div>
      <div class="row" > 
        <div class="col-12 col-lg-8">
            <div class="hovereffect">
                <img class="img-responsive " src="../assets/aitakatta.jpg" alt="">
                    <div class="overlay">
                        <h2>Aitakatta</h2>
                <p>
                  <a href="https://www.youtube.com/watch?v=zdgemowocu8">LINK HERE</a>
                </p>
                    </div>
            </div>
        </div>
        <div class="col-12 d-block d-sm-none " style="margin-top:5%;margin-bottom:5%">
          <button class="btn-5" type="button" data-toggle="collapse" data-target="#aiLyric" aria-expanded="false" aria-controls="collapseExample">
            Get Lyric
          </button>
        </div>
        <div class="col-12 collapse lyric " id="aiLyric" >
          <div v-for="line in lyric['Aitakatta']" :key="line.id">
            {{ line }}
          </div>
        </div>
        <div class="col-lg-4 col-12  d-none d-sm-block lyric" style="height:88vh;">
          <div v-for="line in lyric['Aitakatta']" :key="line.id">
            {{ line }}
          </div>
        </div>
      </div>
    <div class="row single">
      <div class="col">
      <h1>2nd Single</h1>
      </div>
    </div>
      <div class="row" > 
        <div class="col-lg-4 col-12 d-none d-sm-block lyric" style="height:105vh;">
          <div v-for="line in lyric['KFC']" :key="line.id">
            {{ line }}
          </div>
        </div>
        <div class="col-12 col-lg-8">
            <div class="hovereffect">
                <img class="img-responsive " src="../assets/KFC.jpg" alt="">
                    <div class="overlay">
                        <h2>Koisuru Fortune Cookie </h2>
                <p>
                  <a href="https://www.youtube.com/watch?v=mfqJyKm20Z4">LINK HERE</a>
                </p>
                    </div>
            </div>
        </div>
        <div class="col-12 d-block d-sm-none " style="margin-top:5%;margin-bottom:5%">
          <button class="btn-5" type="button" data-toggle="collapse" data-target="#kfcLyric" aria-expanded="false" aria-controls="collapseExample">
            Get Lyric
          </button>
        </div>
        <div class="col-12 collapse lyric " id="kfcLyric" >
          <div v-for="line in lyric['KFC']" :key="line.id">
            {{ line }}
          </div>
        </div>

      </div>
    <div class="row single">
      <div class="col">
      <h1>3rd Single</h1>
      </div>
    </div>
      <div class="row" > 
        <div class="col-12 col-lg-8">
            <div class="hovereffect">
                <img class="img-responsive " src="../assets/Shonichi.jpg" alt="">
                    <div class="overlay">
                        <h2>Shounichi</h2>
                <p>
                  <a href="https://www.youtube.com/watch?v=IMx1ojx2fiE">LINK HERE</a>
                </p>
                    </div>
            </div>
        </div>
        <div class="col-12 d-block d-sm-none " style="margin-top:5%;margin-bottom:5%">
          <button class="btn-5" type="button" data-toggle="collapse" data-target="#shonLyric" aria-expanded="false" aria-controls="collapseExample">
            Get Lyric
          </button>
        </div>
        <div class="col-12 collapse lyric " id="shonLyric" >
          <div v-for="line in lyric['shonichi']" :key="line.id">
            {{ line }}
          </div>
        </div>

        <div class="col-lg-4 col-12 d-none d-sm-block lyric" style="height:105vh">
          <div v-for="line in lyric['shonichi']" :key="line.id">
            {{ line }}
          </div>
        </div>
      </div>
    <div class="row single">
      <div class="col">
      <h1>4th Single</h1>
      </div>
    </div>
      <div class="row" > 
        <div class="col-lg-4 col-12  d-none d-sm-block lyric" style="height:105vh;">
          <div v-for="line in lyric['melody']" :key="line.id">
            {{ line }}
          </div>
        </div>
        <div class="col-12 col-lg-8">
            <div class="hovereffect">
                <img class="img-responsive " src="../assets/melody2.jpg" alt="">
                    <div class="overlay">
                        <h2>Kimi Wa Melody</h2>
                <p>
                  <a href="https://www.youtube.com/watch?v=iByxlVvWrww">LINK HERE</a>
                </p>
                    </div>
            </div>
        </div>
        <div class="col-12 d-block d-sm-none " style="margin-top:5%;margin-bottom:5%">
          <button class="btn-5" type="button" data-toggle="collapse" data-target="#melodyLyric" aria-expanded="false" aria-controls="collapseExample">
            Get Lyric
          </button>
        </div>
        <div class="col-12 collapse lyric " id="melodyLyric" >
          <div v-for="line in lyric['melody']" :key="line.id">
            {{ line }}
          </div>
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
import lyric from '@/data/lyric.js';
const GoogleImages = require('google-images');

export default {
  name: 'home',
  components: {
    'gallery': VueGallery,
    blood,
    color,
  },
  data () {
    return {
      lyric: null,
      slide: 0,
      sliding: null,
      images: null,
      index: null,
    }
  },
  created() {
    this.lyric = lyric;
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
      this.isDownloading = true;
      const client = await new GoogleImages('014907624831812421253:g32cbe_-7zy', 'AIzaSyC5UF00sIvjVZRRuDfBKPXWmgv5XRn9HaY');
      const res = await client.search('bnk48  picture official', {size: 'large', page:1 });
      this.images = res.map( img => img.url);
      this.images[0] = 'https://scontent.fbkk5-2.fna.fbcdn.net/v/t1.0-9/40510042_2127018607616637_6418495841215971328_n.jpg?_nc_cat=1&_nc_ht=scontent.fbkk5-2.fna&oh=c3a184d13f84abbd4f8d434cf5d86dd6&oe=5C833484';
      console.log(this.images);
      if (this.isDownloading !== null) this.isDownloading = false;
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
.album {
  max-width: 100%;
  max-height: 100%;
}
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background: #42b078;
}
.lyric {
  background-color: whitesmoke;
  overflow: auto;

}

.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 50px 20px;
}

.hovereffect img {
  display: block;
  position: relative;
  max-width: none;
  width: calc(100% + 20px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-10px,0,0);
  transform: translate3d(-10px,0,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.hovereffect:hover img {
  opacity: 0.4;
  filter: alpha(opacity=40);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  overflow: hidden;
  padding: 0.5em 0;
  background-color: transparent;
}

.hovereffect h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: '';
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}

.hovereffect:hover h2:after {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.hovereffect a, .hovereffect p {
  color: #FFF;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}

.hovereffect:hover a, .hovereffect:hover p {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.single {
  margin-top: 5%;
}
.btn-5 {
  width: 200px;
  height: 50px;
  background-color: rgba(221, 160, 221, 0.8);
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
} 

.btn-5:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #4388; 
}
</style>
