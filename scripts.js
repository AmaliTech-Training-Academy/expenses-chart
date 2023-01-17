const chartEl=document.querySelector('#chart');

const data = {
  // labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  labels: '///work in here for {item.day}///',
  datasets: [{
    label: '$',
    fontFamily: 'DM Sans',
    // data: [ 17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    data: '///work in here for {item.day}///',
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
    // barThickness: 50.36,
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
      }
    }
  }
};


const myChart = new Chart(
  document.getElementById('myChart'),
  config
  
);

async function chart(){
     const chartdata= await fetch('./data.json');
     const data= await chartdata.json();
     console.log(data);
     // list_ = JSON.parse(data);
 }
 chart()
  







// const chartEl=document.querySelector('#chart');


// function chartItem(item) {
//     return `
//         <div class="chart-card">
//           <button class="chart-btn">
//               <div class="chart-item">
//                 <p class="chart-item-tooltip">$${item.amount}</p>
//               </div>
//               <p class="chart-item-day">${item.day}</p>
//           </button>
//           <p class="chart-item-tooltip">$${item.amount}</p>
//         </div>
//     `;
// }

// async function chart(){
//     const chartdata= await fetch('./data.json');
//     const data= await chartdata.json();
//     console.log(data);
//     // let amountArr = data.map(item => item.amount);
//     // const index = amountArr.indexOf(Math.max(amountArr));
//     // console.log(data[index]);
//     // list_ = JSON.parse(data)
//      chartEl.innerHTML = data
//     // data
//     // console.log(data[1].amount)
//     chartEl.innerHTML = data.map(i => chartItem(i));
// }
// chart()

// document.querySelectorAll('.chart-card')
// Number([...document.querySelectorAll('.chart-item')][0].style.height.split('.')[0])