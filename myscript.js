var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
      labels: ["Team 11", "Team 12", "Team 3", "Team 7", "Team 8", "Team 5", "Team 4","Team 9","Team 10","Team 6","Team 1","Team 2"],
      datasets: [
          {
               label: "Scavenger Hunt",
                fill: false,
               backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(139, 0, 0, 0.2)","rgba(249, 105, 14, 0.2)","rgba(240, 255, 0, 0.2)","rgba(0, 230, 64, 0.2)","rgba(134, 226, 213, 0.2)","rgba(210, 82, 127, 0.2)"],
               borderWidth: 2,
               data: [98,34,26,18,18,17,16,9,9,7,6,2],
          }
      ]
  },
  options: {
      labels: {
            fontColor: "blue"
      },
      scales: {
          xAxes: [{
              gridLines: {
                  display: false
              },
              ticks: {
                  beginAtZero: true
              },
              stacked: true
          }],
          yAxes: [{
              gridLines: {
                  display: false
              },
              stacked: true
          }]
      },
      legend: {display: false},
      title: {
          display: true,
          text: "Point Totals for Greek Week 2020"
      },
      responsive: true
  }
});
