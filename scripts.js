// const fetchdata= await fetch('./data.json');
// const JSONdata= await fetchdata.json();
// console.log(JSONdata);



const data = {
  labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
  // labels: JSONdata.map(item => item.day),
  datasets: [{
    label: '',
     fontFamily: 'DM Sans',
    data: [ 17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    // data: JSONdata.map(item => item.amount),
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
          border: {
            display: false,
          },
        ticks:{
            display: true,
            // display: true,
            font: {
              size: 15,
          }
        }, 
        grid: {
          drawTicks:false,
          drawBorder: false,
          display: false,
          lineWidth: 0,
          drawOnChartArea: true,
        },
      }
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: false,
        }
      }
    }
  }
};


const myChart = new Chart(
  document.getElementById('myChart'),
  config,
  // fetchdata= await fetch('./data.json'),
  // JSONdata= await fetchdata.json(),
  // console.log(JSONdata),
);

 







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