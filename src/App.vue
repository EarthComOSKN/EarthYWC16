<template>
  <div id="app" >
    <!-- <div id="bg">

    </div> -->
    <img src="./assets/pastelbg.jpg" alt="" class="bg">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="pastel">
      <a class="navbar-brand" href="#">BNK 48</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"><router-link class="underline" to="/">Home</router-link></a>
          
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link class="underline" to="/quiz">Quiz</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link class="underline" to="/Statistic">Statistic</router-link></a>
          </li>


        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
/* html { 
  background: url('./assets/pastelbg.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} */
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family:"Sukhumvit Set",sans-serif; 
  /* background-image: url('./assets/pastelbg.jpg');
  background-repeat: no-repeat;  
  background-position: 0% 0%;
  background-size: 100% 100%; */
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  color: white;
  text-decoration: none;
}
.link:hover {
  text-decoration: none;
  color: white;
}
#pastel {
  /* background-image: url('./assets/nav_bg.jpg'); */
  background-color: rgba(221, 160, 221, 0.8) !important ;
  font-size: 20px;

  /* background-color: pink; */
}
.underline  {
  color: #fff !important;
  font-size: 1em;
  text-decoration: none !important;
  display: inline-block;
  position: relative;

  text-decoration: none;
}

/*effect-underline*/
.underline:after {
	content: '';
  position: absolute;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 1px solid;
  margin-top: 10px;
  opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
}

.underline:hover:after {
  opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}
img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}
</style>
