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
    labels: ["ΑΔΠ, ΦΔΘ, ΑΦA     ", "ΑΕΦ, ΦΓΔ, TKE, ΔΣΘ", "ΧΩ, ΠΚΑ, ΙΝΔ        ", "ΔΔΔ, ΣΑΜ, ΑΕΠ     ", "ΔΦΕ, ΠΚΦ, ΦΒΣ, ΑΣΡ", "ΔZ, ΣΦΕ, ΚΑΨ        ", "KΔ, Triangle, ΣΑΕ      ", "ΚΚΓ, ΒΘΠ, ΣΒΡ       ","ΦΣΡ, ΔΧ, ΖΒΤ        ","ΣΔΤ, ΔΤΔ, ΠΛΦ        ","ΣΣΣ, ΔΣΦ, ΣΑΕΠ      ","ΘΦΑ, ΑΤΩ, ΣΑΩ      "],
      datasets: [
          {
               label: "Scavenger Hunt",
                fill: false,
               backgroundColor: ["rgba(0,191,255,0.7)", "rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)"],
               borderWidth: 2,
               data: [6,2,26,16,17,7,18,18,9,9,100,34],
          },
          {
            label: "Blood Drive",
             fill: false,
            backgroundColor: ["rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)"],
            borderWidth: 2,
            data: [7,1,2,1,1,2,4,4,5,1,5,3],
        },
        {
            label: "PDM Early Registration",
             fill: false,
            backgroundColor: ["rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)"],
            borderWidth: 2,
            data: [0,0,0,75,0,20,50,0,20,0,0,100],
        },

        {
            label: "PDM Fall Fundraising",
             fill: false,
            backgroundColor: ["rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)","rgba(255,255,0)"],
            borderWidth: 2,
            data: [0,0,0,20,0,20,50,0,0,100,0,75],
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
