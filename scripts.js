// const values = require('./data.json');
// // console.log(values);
// const amountValues = values.map((value)=>value.amount)
// console.log(amountValues);

// import values from './data.json'
// const content = values;

const data = {
    // labels: content.map(row => row.day),
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
      label: '$',
      fontFamily: 'DM Sans',
      // data: content.map(row => row.amount),
      data: [ 17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      backgroundColor: [
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(118, 181, 188, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)',
        'rgba(236, 117, 93, 1)'
      ],
      outerHeight: 177,
      borderWidth: 0,
      borderRadius: 5,
      borderSkipped: false,
//    barThickness: 50.36,
    }]
  };

  // config 
  const config = {
    type: 'bar',
    data,
    options: {
       maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          backgroundColor: null,
          display:false,
            
          ticks: {
           display: false,
          
          },
           grid: {
            drawTicks:false,
            drawOnChartArea:false,
            borderWidth: 0,
            drawBorder: false,
            display: false,
           }
        },
        x: {
            // display:false,
          ticks:{
              display: true,
              // display: true,
          }, 

          grid: {
            drawTicks:false,
            drawBorder: false,
            drawOnChartArea: false,
            display: false,
            lineWidth: 0,
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            font: {
              fontFamily:'DM Sans',
            },
            boxWidth: 0,
          }
        },
        tooltip:{
          borderRadius: 0,
          backgroundColor: '#382314',
          yAlign:'bottom', 
          displayColors: false, 
          
          labelPointStyle: function(context){
             return{
              // PointStyle: false,
              rotation: 0
            }
           },
          callbacks: {
            title: function(context){
              return '';
              // return console.log(context);
            },
          },
        },
      }
    }
  };

  // if(window.matchMedia('(max-width: 375px)').matches){
  //   data.datasets.barThickness = 33;
  // }
  // elif(window.matchMedia('(max-width:100%)').matches){
  //   data.datasets.barThickness = 50.36;
  // }

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );