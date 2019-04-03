'use strict';

var allLocations = [];
var pike = ['Pike',23, 65, 6.3];
var seaTac = ['SeaTac',3, 24, 1.2];
var seattle = ['Seattle',11, 38, 3.7];
var capitol = ['Capitol',20, 38, 2.3];
var alki = ['Alki',2,16,4.6];
var dataSet = [pike,seaTac,seattle,capitol,alki];
var hData = ['Location'];
var makeHData = function()
{
  for(var i = 6; i < 12; i++)
  {
    hData.push(i + 'am');
  }
  for(i = 12; i < 21; i++)
  {
    if(i > 12)
    {
      hData.push((i-12) + 'pm');
    }
    else
    {
      hData.push(i + 'pm');
    }
  }
  hData.push('Total Cookies/Store');
};
makeHData();

function SalmonCookieLocation(name,minCust,maxCust,avgCook)
{
  this.name = name;
  this.workDayHrs = 15;
  this.minCustomers = minCust;
  this.maxCustomer = maxCust;
  this.avgCookies = avgCook;
  this.dayTotalCookies = 0;
  this.customersHour = [];
  this.cookiesHour = [];
  this.populateCustHr = function ()
  {
    for(var i = 0; i < this.workDayHrs;i++)
    {
      this.customersHour.push(rand(this.minCustomers, this.maxCustomer));
    }

  };
  this.populateCookiesAnHr = function ()
  {
    for(var i = 0; i < this.customersHour.length; i++)
    {
      this.cookiesHour.push(Math.ceil(this.customersHour[i] * this.avgCookies));
    }
  };
  this.calcCookieDayTotal = function ()
  {
    for(var i = 0; i < this.cookiesHour.length;i++)
    {
      this.dayTotalCookies += this.cookiesHour[i];
    }

  };

  allLocations.push(this);
}

//Thanks Sam!
function rand(min, max) 
{
  // following line line MDN Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var setLocData = function ()
{
  for(var i = 0; i < dataSet.length; i++)
  {
    new SalmonCookieLocation(dataSet[i][0],dataSet[i][1],dataSet[i][2],dataSet[i][3]);
  }
  for(i = 0; i < allLocations.length; i++)
  {
    allLocations[i].populateCustHr();
    allLocations[i].populateCookiesAnHr();
    allLocations[i].calcCookieDayTotal();
  }
};
setLocData();

function totalCookiesPerHourAllLoc()
{
  var tmpHourlyCookieTotal = ['Total Cookies/hr'];
  for(var i = 0; i < allLocations[0].cookiesHour.length;i++)
  {
    tmpHourlyCookieTotal.push(0);
    for(var j = 0; j < allLocations.length;j++)
    {
      tmpHourlyCookieTotal[i+1] += allLocations[j].cookiesHour[i];
    }
  }
  return tmpHourlyCookieTotal;
}

//thanks Sam!
var daTable = document.getElementById('table-sales');
SalmonCookieLocation.prototype.render = function()
{
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for(var i = 0; i < this.customersHour.length; i++)
  {
    tdEl = document.createElement('td');
    tdEl.textContent = 'Customers: ' + this.customersHour[i] + '\nCookies: ' + this.cookiesHour[i];
    trEl.appendChild(tdEl); 
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.dayTotalCookies;
  trEl.appendChild(tdEl);
  daTable.appendChild(trEl);
};

var headerData = totalCookiesPerHourAllLoc();
//Thanks Sam!
function makeHeaderRow(hd)
{
  var trEl = document.createElement('tr');
  var thEl;
  //trEl.appendChild(thEl);
  for(var i = 0; i < hd.length; i++)
  {
    thEl = document.createElement('th');
    thEl.textContent = hd[i];
    trEl.appendChild(thEl);

  }
  daTable.appendChild(trEl);
}

//thanks Sam!
function renderLocations()
{
  for(var i = 0; i < allLocations.length; i++)
  {
    allLocations[i].render();
  }
}


/*form handling area */


var storeForm = document.getElementById('addStore');

var nStore = function(storeName, customerMinData, customerMaxData, cookieData)
{
  this.storeName = storeName;
  this.customerMinData = customerMinData;
  this.customerMaxData = customerMaxData;
  this.cookieData = cookieData;
};

function handleSubmit(event)
{
  event.preventDefault();
  var tmpStoreName = event.target.sName.value;
  var tmpCustomerMinData = parseInt(event.target.custMinD.value);
  var tmpCustomerMaxData = parseInt(event.target.custMaxD.value);
  var tmpCookieData = parseFloat(event.target.cookD.value);
  if(!tmpStoreName || !tmpCustomerMinData || !tmpCustomerMaxData || !tmpCookieData)
  {
    alert('The fields must be filled to create a new store');
  }
  var tmpStore = new nStore(tmpStoreName,tmpCustomerMinData,tmpCustomerMaxData,tmpCookieData);

  new SalmonCookieLocation(tmpStore.storeName,tmpStore.customerMinData,tmpStore.customerMaxData,tmpStore.cookieData);

  allLocations[allLocations.length-1].populateCustHr();
  allLocations[allLocations.length-1].populateCookiesAnHr();
  console.log(allLocations[allLocations.length-4]);
  console.log(allLocations[allLocations.length-1]);

  allLocations[allLocations.length-1].render();
}
//console.log(allLocations[allLocations.length-1]);
/*form handling area*/

makeHeaderRow(hData);
renderLocations();
storeForm.addEventListener('submit',handleSubmit);
makeHeaderRow(headerData);
