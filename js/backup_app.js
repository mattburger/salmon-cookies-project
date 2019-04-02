'use strict'

function customersPerHour(arr)
{
  for( var i = 0; i < arr.length; i++)
  {
    arr[i] = Math.floor((Math.random() * 350) + 1);
  }
  return arr;
}

function simSales(arr)
{
  for(var i = 0; i < arr.length; i++)
  {
    arr[i] = Math.floor((Math.random() * 800) + 1);
  }
  return arr;
}

function totalSales(arr1)
{
  var tmpTotal = 0;
  for(var i = 0; i < arr1.length; i++)
  {
    tmpTotal += arr1[i];
  }
  return tmpTotal;
}

function minCust(arr2)
{
  var tmpMin = arr2[0];
  for(var i = 1; i < arr2.length-1; i++)
  {
    if(arr2[i+1] < tmpMin)
    {
      tmpMin = arr2[i];
    }
  }
  return tmpMin;
}

function maxCust(arr3)
{
  var tmpMax = arr3[0];
  for(var i = 1; i < arr3.length-1; i++)
  {
    if(arr3[i+1] > tmpMax)
    {
      tmpMax = arr3[i];
    }
  }
  return tmpMax;
}

function avgCookie(cookieArr,custArr,avgArr)
{
  var len = ((cookieArr.length + custArr.length)/2);
  if(len !== cookieArr.length || len != custArr.length)
  {
    console.log('Issue with Customer & Cookie arrays!');
    alert('!!stopped due to error!!');
    return;
  }
  
  for(var i = 0; i < len; i++ )
  {
    avgArr[i] = cookieArr[i]/custArr[i];
    
  }
  return avgArr;
}

var location1 = 
{
  locationName: '1st and Pike',
  salesByHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  totalSalesDay: 0,
  customersByHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  avgCookiePerCustHourly: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  minimumCustomersHourly: 0,
  maximumCustomersHourly: 0,
  cookieDayAvg: 0,
  roundTime: function()
    {
      var tmpTotalAvg = 0;
      for(var i = 0; i < this.avgCookiePerCustHourly.length; i++)
      {
        console.log('loc1: ' + this.avgCookiePerCustHourly);
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
location1.salesByHour = simSales(location1.salesByHour);
location1.totalSalesDay = totalSales(location1.totalSalesDay);
location1.customersByHour = customersPerHour(location1.customersByHour);
location1.avgCookiePerCustHourly = avgCookie(location1.avgCookiePerCustHourly);
location1.minimumCustomersHourly = minCust(location1.minimumCustomersHourly);
location1.maximumCustomersHourly = maxCust(location1.maximumCustomersHourly);
location1.cookieDayAvg = location1.roundTime();

var location2 = 
{
  locationName: 'SeaTac Airport',
  salesByHour: simSales(cookies),
  totalSalesDay: totalSales(cookies),
  customersByHour: customersPerHour(customers),
  avgCookiePerCustHourly: avgCookie(cookies,customers,avgByHr),
  minimumCustomersHourly: minCust(customers),
  maximumCustomersHourly: maxCust(customers),
  roundTime: function()
    {
      var tmpTotalAvg = 0;
      for(var i = 0; i < this.avgCookiePerCustHourly.length; i++)
      {
        console.log('loc2: ' + this.avgCookiePerCustHourly);
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
var location3 = 
{
  locationName: 'Seattle Center',
  salesByHour: simSales(cookies),
  totalSalesDay: totalSales(cookies),
  customersByHour: customersPerHour(customers),
  avgCookiePerCustHourly: avgCookie(cookies,customers,avgByHr),
  minimumCustomersHourly: minCust(customers),
  maximumCustomersHourly: maxCust(customers),
  roundTime: function()
    {
      var tmpTotalAvg = 0;
      for(var i = 0; i < this.avgCookiePerCustHourly.length; i++)
      {
        console.log('loc3: ' + this.avgCookiePerCustHourly);
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
var location4 = 
{
  locationName: 'Captiol Hill',
  salesByHour: simSales(cookies),
  totalSalesDay: totalSales(cookies),
  customersByHour: customersPerHour(customers),
  avgCookiePerCustHourly: avgCookie(cookies,customers,avgByHr),
  minimumCustomersHourly: minCust(customers),
  maximumCustomersHourly: maxCust(customers),
  roundTime: function()
    {
      var tmpTotalAvg = 0;
      for(var i = 0; i < this.avgCookiePerCustHourly.length; i++)
      {
        console.log('loc4: ' + this.avgCookiePerCustHourly);
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
var location5 = 
{
  locationName: 'Alki',
  salesByHour: simSales(cookies),
  totalSalesDay: totalSales(cookies),
  customersByHour: customersPerHour(customers),
  avgCookiePerCustHourly: avgCookie(cookies,customers,avgByHr),
  minimumCustomersHourly: minCust(customers),
  maximumCustomersHourly: maxCust(customers),
  roundTime: function()
    {
      var tmpTotalAvg = 0;
      for(var i = 0; i < this.avgCookiePerCustHourly.length; i++)
      {
        console.log('loc5: ' + this.avgCookiePerCustHourly);
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};

//to use for the sales home page table build
var llArr = [location1,location2,location3,location4,location5];

//builds the hourly sales list per location
function buildList(tag, location)
{
  var ulTag = document.getElementById(tag);
  var textNode;
  var text = '';
  var locTime = 0;
  for(var i = 0; i < location.salesByHour.length; i++)
  {
    if(i < 6)
    {
      locTime = i + 6;
      var node = document.createElement('li');
      text = '(' + locTime + 'AM) ' + location.salesByHour[i];
      textNode = document.createTextNode(text);
      node.appendChild(textNode);
      ulTag.appendChild(node);
    }
    else
    {
      locTime = i - 5;
      var node = document.createElement('li');
      text = '(' + locTime + 'PM) ' + location.salesByHour[i];
      textNode = document.createTextNode(text);
      node.appendChild(textNode);
      ulTag.appendChild(node);
    }
  }
}

function buildTable(tag, location)
{
  var tableName = document.getElementById(tag);
  var row = tableName.insertRow();
  var locCell = row.insertCell();
  var minCustCell = row.insertCell();
  var maxCustCell = row.insertCell();
  var avgCookieSaleCell = row.insertCell();
  locCell.innerHTML = location.locationName;
  minCustCell.innerHTML = location.minimumCustomersHourly;
  maxCustCell.innerHTML = location.maximumCustomersHourly;
  avgCookieSaleCell.innerHTML = location.roundTime();
}

function loc1Build()
{
  buildList('list-loc1', location1);
  buildTable('table-loc1', location1);
}
function loc2Build()
{
  buildList('list-loc2', location2);
  buildTable('table-loc2', location2);
}
function loc3Build()
{
  buildList('list-loc3', location3);
  buildTable('table-loc3', location3);
}
function loc4Build()
{
  buildList('list-loc4', location4);
  buildTable('table-loc4', location4);
}
function loc5()
{
  buildList('list-loc5', location5);
  buildTable('table-loc5', location5);
}

function salesBuild(tag)
{
  for(var i = 0; i < llArr.length; i++)
  {
    buildTable(tag,llArr[i]);  
  }
}