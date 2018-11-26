import {  Pie, Doughnut, PolarArea } from 'vue-chartjs'
import bnkData from '@/data/bnk48.js';

export default {
  extends: PolarArea,
  mounted () {
    // Overwriting base render method with actual data.
    let Blood = {
      'O':0,
      'A':0,
      'AB':0,
      'B':0,
    }
    bnkData.forEach(element => {
      let BT = element['blood_type'];
      Blood[BT]++;
    });
    console.log(Blood);
    this.renderChart({
      labels: ['O', 'A', 'B','AB'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: ['#ff6384','#36a2eb','#cc65fe','#ffce56'],
          data: [Blood['O'], Blood['A'], Blood['B'],Blood['AB']]
        }
      ]
    },{ responsive:true ,title: {display: true,text:'Blood Types'}})
  }
}
