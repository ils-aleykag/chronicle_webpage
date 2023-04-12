import tabledata from './jsondata/tabledata.json' assert { type: 'json' };
import countData from './jsondata/card.json' assert { type: 'json' };
import chartData from './jsondata/charts.json' assert {type: 'json'};

Chart.register(ChartDataLabels);

let SchoolInfo=tabledata["SchoolInfo"];
for (let i=0; i<SchoolInfo.length; i++) {
  document.querySelector(".table-schl tbody").innerHTML += `
<tr>
<th scope="row"> <img src=${SchoolInfo[i].SchoolLogo}></th>
  <td>${SchoolInfo[i].schoolName} <span class="text-mute">${SchoolInfo[i].small}</td>
  <td>${SchoolInfo[i].email}<br> ${SchoolInfo[i].phone}</td>
  <td>${SchoolInfo[i].schoolSize}</td>
  <td><b>${SchoolInfo[i].dataUsage}</b>/<span class="text-mute">${SchoolInfo[i].totalData} mb</span></td>
  <td>${SchoolInfo[i].status}</td>
  <td><a href=${SchoolInfo[i].Link} class="text-decoration-none"><i class="fa-solid fa-eye"></i>&nbsp; View</a>
  </td>
</tr>`
}

let cardData=countData["cardData"];
for (let i=0; i<cardData.length; i++) {

    document.getElementById("card").innerHTML += `
    <div class="card">
      <div class="card-title">
        <p class="text"> ${cardData[i].cardtitle} </p>
     </div>
     <div class="card-inner">
       <span class="text font-weight-bold"> ${cardData[i].activeCases}<sub>${cardData[i].status}</sub></span>
       <span class="circle-icon">
            <img src="${cardData[i].iconimg}">
        </span> 
     </div>
     <small class="end-line">${cardData[i].totalText}: ${cardData[i].totalnum}</small>
    <div>`
}


for(let i=0; i<chartData.schoolSelect.length; i++){
  document.getElementById("select-school").innerHTML += `<option value='${i}'>${chartData.schoolSelect[i].schoolName}</option>`
}

let selectValue = document.getElementById("select-school").value;
//pie chart
let pieXValues = ["Multimedia", "Audio Notes", "Notes","Free Space"];
let {multimedia, audioNotes, notes, freeSpace} = chartData.schoolSelect[selectValue];
let pieYValues = [multimedia, audioNotes, notes, freeSpace];
let barColors = ["#386CB5", "#7DB0F7", "#CCCCCC", "#286BCB"];


let pieChart;
pieChart = new Chart("pie-chart", {
type: "pie",
data: {
  labels: pieXValues,
  datasets: [{
    backgroundColor: barColors,
    data: pieYValues,
    borderWidth: 6
  }]
},
options: {
  plugins: {
    rotation : 220,
    labels:{
      render: (ctx)=>{
        return ctx.value + " mb ";
      },
      position:"outside",
      fontColor: barColors
    },
    datalabels:{
      formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(data => {
          sum += data;
        });
        let percentage = (value*100 / sum).toFixed(0)+"%";
        return percentage;
      },
      labels: {
        title: {
          font: {
            weight: 'bold'
          }
        },
      },
      color: "#FFFFFF"
    },
    legend: {
      display: true,
      position: 'left',
      align: 'end',
      labels: {
          usePointStyle	: true,
          pointStyle: "circle",
          fontColor: '#333',
          boxWidth: 10,
          boxHeight: 10,
          borderRadius: "50",
      }
  },
    title: {
      display: false,
      beginAtZero: true,
    },
    type: 'linear'
  },
  responsive: true,
  aspectRatio: 2,
},
});

document.getElementById("select-school").addEventListener('change', (e)=>{
  ({multimedia, audioNotes, notes, freeSpace} = chartData.schoolSelect[e.currentTarget.value])
  pieYValues = [multimedia, audioNotes, notes, freeSpace];
  pieChart.destroy();

  pieChart = new Chart("pie-chart", {
      type: "pie",
      data: {
        labels: pieXValues,
        datasets: [{
          backgroundColor: barColors,
          data: pieYValues,
          borderWidth: 6
        }]
      },
      options: {
        rotation: 220,
        plugins: {
          
          labels:{
            render: (ctx)=>{
              return ctx.value + " mb ";
            },
            position:"outside",
            fontColor: barColors
          },
          datalabels:{
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = (value*100 / sum).toFixed(0)+"%";
              return percentage;
            },
            labels: {
              title: {
                font: {
                  weight: 'bold'
                }
              },
            },
            color: "#FFFFFF"
          },
          legend: {
            display: true,
            position: 'left',
            align: 'end',
            labels: {
                usePointStyle	: true,
                pointStyle: "circle",
                fontColor: '#333',
                boxWidth: 10,
                boxHeight: 10,
                borderRadius: "50",
            }
        },
          title: {
            display: false,
            beginAtZero: true,
          },
          type: 'linear'
        },
        responsive: true,
        aspectRatio: 2
      },
    });
    
})


//Bar graph JS
var xValues = chartData.schoolSelect.map((value)=>{return value.schoolName})
  
let barChart = new Chart("bar-chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      label: "Active",
      backgroundColor: "#F9AC32",
      data: chartData.schoolSelect.map((value)=>{return value.roster.active}),
      barThickness:18,
      hoverBackgroundColor: "#5BCDA2"
    },{
        label:"Inactive",
        backgroundColor: "#EEEEEE",
        data: chartData.schoolSelect.map((value)=>{return value.roster.inactive}),
        barThickness:18
    }]
  },
  options: {
    plugins: {
      datalabels:{
        display: false
      },
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
            labelPointStyle: function(context) {
                return {
                    pointStyle: 'circle',
                    rotation: 0
                };
            }
        }
      },
      title: {
        display: false,
      },
    },
    
    scales: {
      x:  {
        stacked:true,
        grid: {
          display: false
        },
        ticks:{
          fontColor: "#C7C7C7",
          font:{
            size:11
          },
        }
      },
  
      y: {
        stacked:true,
        grid:{
          drawBorder: false
        },
        border: {
          display: false
      },
        min: 0,
        max: 400,
        ticks: {
          // forces step size to be 50 units
          stepSize: 100
        }
      },
    },
    responsive: true,
    aspectRatio: 2
  },
});

document.querySelector("#active span").style.backgroundColor = barChart.data.datasets[0].backgroundColor;
document.querySelector("#inactive span").style.backgroundColor = barChart.data.datasets[1].backgroundColor;
document.querySelector("#active span:nth-child(2)").innerText = barChart.data.datasets[0].label;
document.querySelector("#inactive span:nth-child(2)").innerText = barChart.data.datasets[1].label;

let allLabel = document.querySelectorAll("#radiobtn button");
for(let i=0; i<allLabel.length; i++){
  allLabel[i].addEventListener("click", ()=>{
    let visibilityData = barChart.isDatasetVisible(i);
    if(visibilityData === true){
      barChart.hide(i);
      allLabel[i].lastElementChild.style.textDecoration = "line-through";
    }else{
      barChart.show(i);
      allLabel[i].lastElementChild.style.textDecoration = "none";
    }
  })
}


let changeTab = (element, type)=>{

  let activeBarTab = document.querySelector(".charts-card .chart-title span a.active");
  element.firstElementChild.className +=" active"
  activeBarTab.className = activeBarTab.className.replace("active", "");

  barChart.destroy();

  barChart = new Chart("bar-chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        label: "Active",
        backgroundColor: "#F9AC32",
        data: chartData.schoolSelect.map((value)=>{return value[type].active}),
        barThickness:18,
        hoverBackgroundColor: "#5BCDA2"
      },{
          label:"Inactive",
          backgroundColor: "#EEEEEE",
          data: chartData.schoolSelect.map((value)=>{return value[type].inactive}),
          barThickness:18
      }]
    },
    options: {
      plugins: {
        datalabels:{
          display: false
        },
        legend: {
          display: false,
        },
        tooltip: {
          usePointStyle: true,
          callbacks: {
              labelPointStyle: function(context) {
                  return {
                      pointStyle: 'circle',
                      rotation: 0
                  };
              }
          }
        },
        title: {
          display: false,
        },
      },
      
      scales: {
        x:  {
          stacked:true,
          grid: {
            display: false
          },
          ticks:{
            fontColor: "#C7C7C7",
            font:{
              size:11
            },
          }
        },
    
        y: {
          stacked:true,
          grid:{
            drawBorder: false
          },
          min: 0,
          max: 400,
          border: {
            display: false
        },
          ticks: {
            // forces step size to be 50 units
            stepSize: 100
          }
        },
      },
      responsive: true,
      aspectRatio: 2
    },
  });
  
}


let barChartArray = ["roster", "teachers"]
var allBarTabs = document.querySelectorAll(".charts-card .chart-title span");

for(let i=0; i<allBarTabs.length; i++){
  allBarTabs[i].addEventListener("click", ()=>{changeTab(allBarTabs[i], barChartArray[i])});
}
