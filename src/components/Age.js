import {  Pie, Doughnut, PolarArea, Bar } from 'vue-chartjs'
import bnkData from '@/data/bnk48.js';

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    let AgeData = bnkData.map(x => {
      var ageDifMs = Date.now() - new Date(x['birthday']);
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return [x['nickname'],Math.abs(ageDate.getUTCFullYear() - 1970)];
    })
    console.log(AgeData);
    let bnk = AgeData.sort((a,b) => {
      return a[1]-b[1];
    })
    let label = bnk.map(x => {
      return x[0];
    })
    let data = bnk.map(x => {
      return x[1];
    })
    const ex = ['#ff6384','#36a2eb','#cc65fe','#ffce56','green','blue','red','pink','brown'];
    console.log(bnk);
    let color = [];
    while(color.length !== 24){
      let x = Math.floor((Math.random() *99 ))%9;
      color.push(ex[x]);
    }
    this.renderChart({
      labels: label,
      datasets: [
        {
          label: 'Age',
          backgroundColor: color,
          data: data
        }
      ]
    },{ responsive:true ,title: {display: true,text:'Age'}})
  }
}
