<template>
<div v-if="isReady">

<div class="container" v-if="!isEnd">
    <h1>BNK 48 Quiz</h1>
    <h2>Your Score: {{point}}/50</h2>
 
    <!-- <h1 v-if="allQuestion.length !== 0">{{allQuestion[now]}}</h1> -->
    <div class="row center">
      <div class="container">
      <!-- <img :src="img" alt="" width="30%" height="40%">  -->
      {{who}}
      <img v-bind:src="'data:image/jpeg;base64,'+img" />
      </div>
    </div> 
    <div id="top" class="row">
      <span class="col-12 col-lg-6" id="top">
      <button class="btn-5" @click="answer(0)">{{bnk48Data[allQuestion[now][0][0]][questionType] || 'z'}}</button>
      </span>
      <span class="col-12 col-lg-6" id="top" >
      <button class="btn-5" @click="answer(1)">{{bnk48Data[allQuestion[now][0][1]][questionType] || 'z'}}</button>
      </span>
      <span class="col-12 col-lg-6" id="top">
      <button class="btn-5" @click="answer(2)">{{bnk48Data[allQuestion[now][0][2]][questionType] || 'z'}}</button>
      </span>
      <span  class="col-12 col-lg-6" id="top">
      <button class="btn-5" @click="answer(3)">{{bnk48Data[allQuestion[now][0][3]][questionType] || 'z'}}</button>
      </span>
    </div>
  </div>
  <div class="container" v-else>
    <h1>Wrong</h1>
    <img v-bind:src="'data:image/jpeg;base64,'+img" />
    <h2 style="margin-top:3%;">Answer is {{ans}}</h2>
    <h1 style="margin-top:3%;">You got {{point}} / 50</h1>
    <button class="btn-5" @click="startGame()">Restart Game</button>
  </div>
</div>
<div class="container" v-else>
  <div class="rotateLogo">
          <img class="rotating" src="../assets/loading.png" width="80%" height="80%" alt="">
  </div>
</div>
  
</template>

<script>
import bnk48Data from '../data/bnk48.js';
import setimmediate from 'setimmediate';

const QT = ['nickname','nickname','thai_first_name'];
// const GoogleImages = require('google-images');
const axios = require('axios');
console.log(bnk48Data);
export default {
  name: 'Quiz',

  components: {

  },
  data () {
    return {
      questionType: null,
      point : 0,
      now : 0 ,
      ans : null,
      who: null,
      ansNow: null,
      allQuestion: [],
      img: null,
      bnk48Data: null,
      isEnd: false,
      isReady : false,
      allImg: [],
      numOfMember: null,
    }
  },
  
  methods: {
    async getAllImg(){
      this.isReady = false
      bnk48Data.forEach(n => {
        var res = this.getBase64(`https://graph.facebook.com/${n.FBID}/picture?type=large`);
        res.then(x => {
        this.allImg.push([n.nickname,x]);
        this.isReady = true;
      });
      });
    },
    answer(ans) {
      if(ans === this.allQuestion[this.now][1]){
        // console.log('correct');
        this.point++;
        this.now++;
        this.changeQuestion(this.now)
      }
      else{
        // console.log('false');
        this.isEnd = true;
      }

      // this.getNextQuestion();
    },
    getBase64(url) {
    return axios
    .get(url, {
      responseType: 'arraybuffer'
    })
    .then(response => Buffer.from(response.data, 'binary').toString('base64'))
    },
    async changeQuestion(n) {
      console.log('chabge to',n);
      this.isReady = false;
      const x = Math.floor(Math.random() * 99) % 3;
      this.questionType = QT[x];
      // const client = await new GoogleImages('014907624831812421253:g32cbe_-7zy', 'AIzaSyC5UF00sIvjVZRRuDfBKPXWmgv5XRn9HaY');
      const ans = this.allQuestion[n][1];
      const who = this.allQuestion[n][0][ans];
      this.ansNow = bnk48Data[who]['FBID'];
      const nm = bnk48Data[who][this.questionType];
      const fb = bnk48Data[who].facebook;
      console.log(fb);
      const res = this.getBase64(`https://graph.facebook.com/${fb}/picture?type=large`);
      res.then(x => {
        this.img = x
        this.ans = nm;
        this.isReady = true;
      });
      // this.getFiles(res)
      // const res = await client.search(`${fb}`);
      // this.img = res;

      // console.log(this.img);
    },
    getQuestions() {
      let numOfMember = bnk48Data.length;
      this.numOfMember = numOfMember;
      let question = [];
      while(question.length != 4){
        let temp = Math.floor((Math.random() * 100) % numOfMember);
        var found = question.find( x => {
          return x === temp;
        }) 
        if (!found) question.push(temp)
      }

      let ans = Math.floor(Math.random()*100)%4;
      let qu = [...question];
      return [qu,ans];
    },
    getAllQuestion(number) {
      let i =0;
      this.allQuestion = [];
      for( i = 0; i < number; i++){
        let temp = this.getQuestions();
        this.allQuestion.push(temp)
      }
    },
    startGame() {
      this.isEnd = false
      this.point = 0;
      this.getAllQuestion(50)
      this.changeQuestion(this.now)
      this.bnk48Data = bnk48Data;
    }
  },
  mounted:function () {
    this.startGame();
    this.getAllImg();
    
  },

}
</script>

<style >
.center {
  position: center;
  align-items: center;
}
#top {
  margin: 3% 0px 0px 0px;
}
#down {
  margin: 3% 0px 0px 0px;
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
