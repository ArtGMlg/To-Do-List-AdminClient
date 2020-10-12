// Set new default font family and font color to mimic Bootstrap's default styling
/*Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}




$.ajax({
    url: encodeURI("https://k16-omsk.ru/server_for_tasks/tasks/getAllTasks"),
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      DateInf(data);
    }
  });

function DateInf(data){
	var Jan= 0;
	var Feb= 0;
	var arrFeb = [];
	var Mar= 0;
	var Apr= 0;
	var May= 0;
	var Jun= 0;
	var Jul= 0;
	var Aug= 0;
	var Sep= 0;
	var Oct= 0;
	var Nov= 0;
	var Dec= 0;
	var admin = JSON.parse(localStorage.getItem('admUser')).email;
	

	for (i = 0; i < data.tasks.length; i++) {
		if (data.tasks[i].status === "complite" && data.tasks[i].admin === admin) {
			if (data.tasks[i].date >= "2019-01-01" && data.tasks[i].date <= "2019-01-31") {
				Jan = Jan + 1;
			}
			else if (data.tasks[i].date >= "2019-02-01" && data.tasks[i].date <= "2019-02-29") {
				Feb = Feb + 1;
			}
			else if (data.tasks[i].date >= "2019-03-01" && data.tasks[i].date <= "2019-03-31") {
				Mar = Mar + 1;
			}else if (data.tasks[i].date >= "2019-04-01" && data.tasks[i].date <= "2019-04-30") {
				Apr += 1;
			}
			else if (data.tasks[i].date >= "2019-05-01" && data.tasks[i].date <= "2019-05-31") {
				May = May + 1;
			}
			else if (data.tasks[i].date >= "2019-06-01" && data.tasks[i].date <= "2019-06-30") {
				Jun = Jun + 1;
			}
			else if (data.tasks[i].date >= "2019-07-01" && data.tasks[i].date <= "2019-07-31") {
				Jul = Jul + 1;
			}
			else if (data.tasks[i].date >= "2019-08-01" && data.tasks[i].date <= "2019-08-30") {
				Aug = Aug + 1;
			}
			else if (data.tasks[i].date >= "2019-09-01" && data.tasks[i].date <= "2019-09-30") {
				Sep = Sep + 1;
			}
			else if (data.tasks[i].date >= "2019-10-01" && data.tasks[i].date <= "2019-10-31") {
				Oct = Oct + 1;
			}
			else if (data.tasks[i].date >= "2019-11-01" && data.tasks[i].date <= "2019-11-30") {
				Nov = Nov + 1;
			}
			else if (data.tasks[i].date >= "2019-12-01" && data.tasks[i].date <= "2019-12-31") {
				Dec = Dec + 1;
			}
		}
	}


// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    datasets: [{
      label: "Выполнено",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return '' + number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ' ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }  
});
myLineChart.data.datasets[0].data = [ Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec ];
myLineChart.update();
};*/