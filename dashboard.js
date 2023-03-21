// SIDEBAR TOGGLE
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// -------- bar chart --------
var xValues = ["School_Name_01", "School_Name_02", "School_Name_03", "School_Name_04"];
var barColors = "#F9AC32"; 

new Chart("bar-chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      label: "Active",
      backgroundColor: barColors,
      data:[150, 210, 350, 250],
      barThickness:18
    },{
        label:"Inactive",
        backgroundColor: "#EEEEEE",
        data: [50, 90, 50, 60],
        barThickness:18
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'right',
        align: "start",
        labels: {
            usePointStyle	: true,
            pointStyle: "circle",
            fontColor: '#444B48',
            boxWidth: 6,
            boxHeight: 6,
            borderRadius: "50",
        }
    },
    },
    
    scales: {
      x:  {
        stacked:true,
        grid: { display: false },
      },
  
      y: {
        stacked:true,
        ticks: {
          stepSize: 100,   // forces step size to be 50 units
          min: 0,
          max: 400
        },
      },
    },
    responsive: true,
    aspectRatio: 2
  },
});

//----Pie chart-----

var xValues = ["Multimedia", "Audio Notes", "Notes","Free Space"];
var yValues = [49, 23, 17, 11];
var barColors = [
  "#386CB5",
  "#7DB0F7",
  "#286BCB",
  "#CCCCCC"
];

new Chart("pie-chart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      datalabels: {
        formatter: (value) => {
            let sum = 0;
            let dataArr = yValues;
            dataArr.map(data => {
                sum += data;
            });
            let percentage = (value*100 / sum).toFixed(2)+"%";
            return percentage;
        },
        color: '#fff',
    },
      legend: {
        display: true,
        position: 'left',
        align: 'start',
        labels: {
            usePointStyle	: true,
            pointStyle: "circle",
            fontColor: '#333',
            boxWidth: 8,
            boxHeight: 8,
            borderRadius: "50"
        }
    },
    
    },
    responsive: true,
    aspectRatio: 2,
    rotation : 210, 
    borderAlign: "inner",
  },
});
