const chartEl=document.querySelector('#chart');


function chartItem(item) {
    return `
        <div class="chart-card">
          <button class="chart-btn">
              <div class="chart-item" style="height: ${item.amount *3.5}px;"></div>
              <p class="chart-item-day">${item.day}</p>
          </button>
          <p class="chart-item-tooltip">$${item.amount}</p>
        </div>
    `;
}


// chartdiv.innerHTML = `
//   <button class="chart-btn">
//       <div class="chart-item"></div>
//       <p class="chart-item-day">${querydata.day}</p>
//   </button>
//   <p class="chart-item-tooltip">${querydata.amount}</p>
// `

async function chart(){
    const chartdata= await fetch('./data.json');
    const data= await chartdata.json();
    console.log(data);
    // list_ = JSON.parse(data)
     chartEl.innerHTML = data
    data
    // console.log(data[1].amount)
    chartEl.innerHTML = data.map(i => chartItem(i));
}
chart()

