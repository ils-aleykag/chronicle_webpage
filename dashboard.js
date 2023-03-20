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
var xValues = ["School Name 01", "School Name 02", "School Name 03", "School Name 04"];

var barColors = "#F9AC32";

new Chart("bar-chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data:[150, 210, 350, 250],
      barThickness: 20,
      label: "Active"
    },
    {
      backgroundColor: "#EEEEEE",
      data: [200, 300, 400, 300],
      barThickness: 20,
      label: "Inactive",
    }]
  },

  options: {
    legend: {
      display: true,
    },

    scales: {
       x:  {
        stacked:true,
      },
  
      y: {
        stacked:true,
      },
    },
     
  },
});