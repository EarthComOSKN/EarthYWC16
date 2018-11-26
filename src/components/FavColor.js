import {  Pie, Doughnut, PolarArea } from 'vue-chartjs'
import bnkData from '@/data/bnk48.js';

export default {
  extends: Pie,
  mounted () {
    // Overwriting base render method with actual data.
    let color = {}
    bnkData.forEach(element => {
      if(element.like[0].indexOf("color") !== -1){

        const temp = element.like[0].split(" color");
        let cl = temp.join('')
        cl = cl.split(" ")
        cl = cl.join('')
        cl = cl.toLowerCase()
        // console.log(cl);
        if(color[cl] !== undefined)color[cl]+=1;
        else color[cl] =1;
        // color[cl] = 1;
      }
    });
    // console.log(color);
    this.renderChart({
      labels: Object.keys(color),
      datasets: [
        {
          backgroundColor: Object.keys(color),
          data: Object.values(color),
        }
      ]
    },{ responsive:true ,title: {display: true,text:'Fav Color'}})
  }
}
