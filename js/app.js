'use strict';

var allLocations = [];
var pike = ['Pike',23, 65, 6.3];
var seaTac = ['SeaTac',3, 24, 1.2];
var seattle = ['Seattle',11, 38, 3.7];
var capitol = ['Capitol',20, 38, 2.3];
var alki = ['Alki',2,16,4.6];
var dataSet = [pike,seaTac,seattle,capitol,alki];
var headerData = ['Location'];
for(var i = 6; i < 12; i++)
{
  headerData.push(i + 'am');
}
for(i = 12; i < 21; i++)
{
  if(i > 12)
  {
    headerData.push((i-12) + 'pm');
  }
  else
  {
    headerData.push(i + 'pm');
  }
}
//console.log(headerData);

function SalmonCookieLocation(name,minCust,maxCust,avgCook)
{
  this.name = name;
  this.workDayHrs = 15;
  this.minCustomers = minCust;
  this.maxCustomer = maxCust;
  this.avgCookies = avgCook;
  this.customersHour = [];
  this.cookiesHour = [];
  this.totalCookiesDay = 0;
  this.populateCustHr = function ()
  {
    for(var i = 0; i < this.workDayHrs;i++)
    {
      this.customersHour.push(Math.floor((Math.random() * this.maxCustomer) + this.minCustomers));
    }
    //console.log(this.customersHour);
  };
  this.populateCookiesAnHr = function ()
  {
    for(var i = 0; i < this.customersHour.length; i++)
    {
      this.cookiesHour.push(Math.ceil(this.customersHour[i] * this.avgCookies));
    }
    //console.log(this.cookiesHour);
  };
  this.calcTotalCookies = function ()
  {
    for(var i = 0; i < this.cookiesHour.length; i++)
    {
      this.totalCookiesDay += this.cookiesHour[i];
    }
    //console.log(this.totalCookiesDay);
    console.log(this.cookiesHour.length);
    console.log(this.cookiesHour);
  };
  allLocations.push(this);
}

for(i = 0; i < dataSet.length; i++)
{
  new SalmonCookieLocation(dataSet[i][0],dataSet[i][1],dataSet[i][2],dataSet[i][3]);
}
for(i = 0; i < allLocations.length; i++)
{
  allLocations[i].populateCustHr();
  allLocations[i].populateCookiesAnHr();
  allLocations[i].calcTotalCookies();
}
//console.table(allLocations);

//thanks Sam!
var daTable = document.getElementById('table-sales');
SalmonCookieLocation.prototype.render = function()
{
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  //daTable.appendChild(trEl);
  for(var i = 0; i < this.customersHour.length; i++)
  {
    tdEl = document.createElement('td');
    tdEl.textContent = 'Customers: ' + this.customersHour[i] + '\nCookies: ' + this.cookiesHour[i];
    trEl.appendChild(tdEl);
    //daTable.appendChild(trEl);
    //console.log(this.customersHour.length);
    //console.log('in render()');
    //console.log(tdEl);
    //console.log(trEl);
    
    //daTable.appendChild(trEl);
  }
  daTable.appendChild(trEl);
};

//Thanks Sam!
/*function makeHeaderRow()
{
  var thEl = document.createElement('th');

  for(var i = 0; i < headerData.length; i++)
  {
    var trEl = document.createElement('tr');
    thEl.textContent = headerData[i];
    trEl.appendChild(thEl);
    console.log('in makeHeaderRow()');
    console.log(thEl);
    console.log(trEl);
  }
  daTable.appendChild(trEl);
}
*/
//thanks Sam!
function renderLocations()
{
  for(var i = 0; i < allLocations.length; i++)
  {
    allLocations[i].render();
  }
}
//makeHeaderRow();
renderLocations();
