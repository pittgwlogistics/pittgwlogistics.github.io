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
    labels: ["ΑΔΠ, ΦΔΘ, ΑΦA     ", "ΑΕΦ, Fiji, TKE, ΔΣΘ", "ΧΩ, ΠΚΑ, ΙΝΔ        ", "ΔΔΔ, ΣΑΜ, ΑΕΠ     ", "ΔΦΕ, ΠΚΦ, ΦΒΣ, ΑΣΡ", "ΔZ, ΣΦΕ, ΚΑΨ        ", "KΔ, Triangle, ΣΑΕ      ", "ΚΚΓ, ΒΘΠ, ΣΒΡ       ","ΦΣΡ, ΔΧ, ΖΒΤ        ","ΣΔΤ, ΔΤΔ, ΠΛΦ        ","ΣΣΣ, ΔΣΦ, ΣΑΕΠ      ","ΘΦΑ, ΑΤΩ, ΣΑΩ      "],
      datasets: [
        {
            label: "Scavenger Hunt",
             fill: false,
            backgroundColor: ["rgba(0,191,255,0.7)", "rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)","rgba(0,191,255,0.7)"],
            borderWidth: 2,
            data: [6,2,26,16,17,7,18,18,9,9,78,34],
       },
       {
         label: "Fall Blood Drive",
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
         data: [0,0,0,20,0,5,10,0,5,0,0,30],
     },

     {
         label: "PDM Fall Fundraising",
          fill: false,
         backgroundColor: ["rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)"],
         borderWidth: 2,
         data: [0,0,0,5,0,5,10,0,0,30,0,20],
     },
     {
         label: "Spring Blood Drive",
          fill: false,
         backgroundColor: ["rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)","rgba(255,53,94)"],
         borderWidth: 2,
         data: [4,0,6,5,0,2,7,10,3,3,9,10],
     },
     {
         label: "T-Shirt Order",
          fill: false,
         backgroundColor: ["rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)","rgba(234, 46, 234)"],
         borderWidth: 2,
         data: [3,0,2,0,3,3,1,6,3,4,2,3],
     },
     {
         label: "Pairing Bonding Event",
          fill: false,
         backgroundColor: ["rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)","rgba(155, 46, 234)"],
         borderWidth: 2,
         data: [26,0,10,23,14,0,0,10,14,10,20,21],
     },
     {
         label: "PDM Talent Show",
          fill: false,
         backgroundColor: ["rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)"],
         borderWidth: 2,
         data: [5,0,5,0,5,5,5,20,24,5,5,25],
     },
     {
         label: "Like Contest",
          fill: false,
         backgroundColor: ["rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)","rgba(30, 60, 255)"],
         borderWidth: 2,
         data: [0,0,0,10,0,20,0,0,0,0,30,0],
     },
     {
         label: "PDM",
          fill: false,
         backgroundColor: ["rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)","rgba(51,255,51)"],
         borderWidth: 2,
         data: [57,0,0,34,0,0,32,33,32,34,37,59],
     },
     {
         label: "James Robilotta",
          fill: false,
         backgroundColor: ["rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)","rgba(255, 250, 10)"],
         borderWidth: 2,
         data: [0,0,0,48,33,49,0,25,28,38,88,106],
     },

     {
         label: "Mindful Moment",
          fill: false,
         backgroundColor: ["rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )","rgba(255, 142, 51 )"],
         borderWidth: 2,
         data: [57,0,26,66,36,65,0,0,0,23,88,135],
     },
     {
         label: "Food Drive",
          fill: false,
         backgroundColor: ["rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)","rgba(98, 0, 255)"],
         borderWidth: 2,
         data: [5,0,10,0,0,0,0,0,5,20,30,5],
     },
     {
         label: "Family Feud",
          fill: false,
         backgroundColor: ["rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)","rgba(255, 139, 249)"],
         borderWidth: 2,
         data: [26,0,0,70,66,33,0,0,24,27,99,78],
     },
     {
         label: "Pitt-Tok",
          fill: false,
         backgroundColor: ["rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)","rgba(0, 204, 137)"],
         borderWidth: 2,
         data: [46,0,5,60,33,21,0,5,0,0,52,68],
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
          text: "Point Totals for Greek Week 2021"
      },
      responsive: true
  }
});
