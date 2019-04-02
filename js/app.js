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
for(var i = 12; i < 21; i++)
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
console.log(headerData);

function SalmonCookieLocation(name,minCust,maxCust,avgCook)
{
  this.name = name;
  this.workDayHrs = 14;
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
  };
  allLocations.push(this);
}

for(var i = 0; i < dataSet.length; i++)
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
SalmonCookieLocation.render = function()
{
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChile(tdEl);

  for(var i = 0; i < this.customersHour.length; i++)
  {
    tdEl.textContent = 'Customers: ' + this.customersHour[i] + '\nCookies: ' + this.cookiesHour[i];
    trEl.appendChild(tdEl);
  }
};

//Thanks Sam!
function makeHeaderRow()
{
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  for(var i = 0; i < headerData.length; i++)
  {
    thEl.textContent = headerData[i];
    trEl.appendChild(thEl);
  }
}

//thanks Sam!
function renderLocations()
{
  for(var i = 0; i < allLocations.length; i++)
  {
    allLocations[i].render();
  }
}
makeHeaderRow();
renderLocations();
