const chartEl=document.querySelector('#chart');


function chartItem(item) {
    return `
        <div class="chart-card">
          <button class="chart-btn">
              <div class="chart-item">
                <p class="chart-item-tooltip">$${item.amount}</p>
              </div>
              <p class="chart-item-day">${item.day}</p>
          </button>
          <p class="chart-item-tooltip">$${item.amount}</p>
        </div>
    `;
}

async function chart(){
    const chartdata= await fetch('./data.json');
    const data= await chartdata.json();
    console.log(data);
    // let amountArr = data.map(item => item.amount);
    // const index = amountArr.indexOf(Math.max(amountArr));
    // console.log(data[index]);
    // list_ = JSON.parse(data)
     chartEl.innerHTML = data
    // data
    // console.log(data[1].amount)
    chartEl.innerHTML = data.map(i => chartItem(i));
}
chart()

// document.querySelectorAll('.chart-card')
// Number([...document.querySelectorAll('.chart-item')][0].style.height.split('.')[0])