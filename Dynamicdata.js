import tabledata from '../chronicle_webpage/jsondata/tabledata.json' assert { type: 'json' };
import countData from '../chronicle_webpage/jsondata/card.json' assert { type: 'json' };

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
            <i class="fa-solid"> &#x${cardData[i].iconCode} </i>
        </span> 
     </div>
     <small class="end-line">${cardData[i].totalText}: ${cardData[i].totalnum}</small>
    <div>`
}


