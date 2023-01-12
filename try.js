const data = require('./data.json')
// console.log(data);

const trydump = data.map((item)=>{
    console.log(item);
})





window.onload = function () {
	var chart = new CanvasJS.Chart("myChart", {
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: data.map((item)=>item)
		}
		]
	});
	chart.render();
}

