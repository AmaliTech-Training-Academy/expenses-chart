// import { map } from './data.json';
// console.log(data);
import Data from './data.json'

const trydump = map((item)=>{
    console.log(item);
})

Data.map((item) => {
	document.querySelector('.days').innerHTML = item.day;
	document.querySelector('.amounts').innerHTML = item.amount;

})



window.onload = function () {
	var chart = new CanvasJS.Chart("myChart", {
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: map((item)=>item)
		}
		]
	});
	chart.render();
}

