$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


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
      labels: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7"],
      datasets: [
          {
               label: "Number of Points",
                fill: false,
               backgroundColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
               borderWidth: 2,
               data: [1000, 200, 500, 200, 300, 542, 150],
          }
      ]
  },
  options: {
      scales: {
          xAxes: [{
              gridLines: {
                  display: false
              },
              ticks: {
                  beginAtZero: true
              }
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
      }
  }
});
