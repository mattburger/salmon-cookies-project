'use strict'

//generate customer data per location
function customersPerHour(arr)
{
  for( var i = 0; i < arr.length; i++)
  {
    arr[i] = Math.floor((Math.random() * 350) + 1);
  }
  return arr;
}

//generate sales data per location
function simSales(arr)
{
  for(var i = 0; i < arr.length; i++)
  {
    arr[i] = Math.floor((Math.random() * 800) + 1);
  }
  return arr;
}

//total sales per location
function totalSales(arr1)
{
  var tmpTotal = 0;
  for(var i = 0; i < arr1.length; i++)
  {
    tmpTotal += arr1[i];
  }
  return tmpTotal;
}

//minimum customers/hour for the work day per location
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

//customers/hour for the work day per location
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

//calculate avg sales per location
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
    console.log('avrArr ' + avgArr[i]);
    console.log('cookieArr '+ cookieArr[i]);
    console.log('custArr ' + custArr[i]);
    avgArr[i] = cookieArr[i]/custArr[i];
    
  }
  console.log('HERE!!!!');
  console.log(avgArr);
  return avgArr;
}
//values initialized to 0 will be updated by the functions above when     called.

var location1 = 
{
  locationName: '1st and Pike',
  
  //holds sales data
  salesByHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  
  //total sales per day
  totalSalesDay: 0,

   //hourly customer data
  customersByHour: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],

  //average cookie sales data
  avgCookiePerCustHourly: [0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
  
  //holds minimum customers value from 
  minimumCustomersHourly: 0,
  maximumCustomersHourly: 0,
  cookieDayAvg: 0,
  roundTime: function()
    {
      var tmpTotalAvg = 0;
      for(var i = 0; i < this.avgCookiePerCustHourly.length; i++)
      {
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
        //console.log('loc1['+i+']: ' + this.avgCookiePerCustHourly[i]);
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
//updating values of location1
location1.salesByHour = simSales(location1.salesByHour);
console.log(location1.salesByHour);
location1.totalSalesDay = totalSales(location1.totalSalesDay);
location1.customersByHour = customersPerHour(location1.customersByHour);
location1.avgCookiePerCustHourly = avgCookie(location1.salesByHour,location1.customersByHour,location1.avgCookiePerCustHourly);
console.log('WTF is going on: ' + location1.avgCookiePerCustHourly);
location1.minimumCustomersHourly = minCust(location1.customersByHour);
location1.maximumCustomersHourly = maxCust(location1.customersByHour);
location1.cookieDayAvg = location1.roundTime();

//refer to comments within lines 85 - 119
var location2 = 
{
  locationName: 'SeaTac Airport',
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
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
        //console.log('loc2['+i+']: ' + this.avgCookiePerCustHourly[i]);
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
location2.salesByHour = simSales(location2.salesByHour);
console.log(location2.salesByHour);
location2.totalSalesDay = totalSales(location2.totalSalesDay);
location2.customersByHour = customersPerHour(location2.customersByHour);
location2.avgCookiePerCustHourly = avgCookie(location2.salesByHour,location2.customersByHour,location2.avgCookiePerCustHourly);
location2.minimumCustomersHourly = minCust(location2.customersByHour);
location2.maximumCustomersHourly = maxCust(location2.customersByHour);
location2.cookieDayAvg = location1.roundTime();

//refer to comments within lines 85 - 119
var location3 = 
{
  locationName: 'Seattle Center',
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
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
        console.log('loc3['+i+']: ' + this.avgCookiePerCustHourly[i]);
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
location3.salesByHour = simSales(location3.salesByHour);
location3.totalSalesDay = totalSales(location3.totalSalesDay);
location3.customersByHour = customersPerHour(location3.customersByHour);
location3.avgCookiePerCustHourly = avgCookie(location3.salesByHour,location3.customersByHour,location3.avgCookiePerCustHourly);
location3.minimumCustomersHourly = minCust(location3.customersByHour);
location3.maximumCustomersHourly = maxCust(location3.customersByHour);
location3.cookieDayAvg = location1.roundTime();

//refer to comments within lines 85 - 119
var location4 = 
{
  locationName: 'Captiol Hill',
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
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
        console.log('loc14'+i+']: ' + this.avgCookiePerCustHourly[i]);
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
location4.salesByHour = simSales(location4.salesByHour);
location4.totalSalesDay = totalSales(location4.totalSalesDay);
location4.customersByHour = customersPerHour(location4.customersByHour);
location4.avgCookiePerCustHourly = avgCookie(location4.salesByHour,location4.customersByHour,location4.avgCookiePerCustHourly);
location4.minimumCustomersHourly = minCust(location4.customersByHour);
location4.maximumCustomersHourly = maxCust(location4.customersByHour);
location4.cookieDayAvg = location1.roundTime();

//refer to comments within lines 85 - 119
var location5 = 
{
  locationName: 'Alki',
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
        tmpTotalAvg += this.avgCookiePerCustHourly[i];
        console.log('loc5['+i+']: ' + this.avgCookiePerCustHourly[i]);
      }
      tmpTotalAvg = tmpTotalAvg/this.avgCookiePerCustHourly.length;
      return tmpTotalAvg.toFixed(2);
    }
};
location5.salesByHour = simSales(location5.salesByHour);
location5.totalSalesDay = totalSales(location5.totalSalesDay);
location5.customersByHour = customersPerHour(location5.customersByHour);
location5.avgCookiePerCustHourly = avgCookie(location5.salesByHour,location5.customersByHour,location5.avgCookiePerCustHourly);
location5.minimumCustomersHourly = minCust(location5.customersByHour);
location5.maximumCustomersHourly = maxCust(location5.customersByHour);
location5.cookieDayAvg = location1.roundTime();

//to use for the sales home page table build
var llArr = [location1,location2,location3,location4,location5];
/*
for(var i = 0; i < llArr.length; i++)
{
  console.log('location' + (i+1));
  console.log(llArr[i].cookieDayAvg);
}*/


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

//builds table
function buildTable(tag, arg)
{
  var tableName = document.getElementById(tag);
  var row = tableName.insertRow();
  var locCell = row.insertCell();
  var minCustCell = row.insertCell();
  var maxCustCell = row.insertCell();
  var avgCookieSaleCell = row.insertCell();
  locCell.innerHTML = arg.locationName;
  minCustCell.innerHTML = arg.minimumCustomersHourly;
  maxCustCell.innerHTML = arg.maximumCustomersHourly;
  avgCookieSaleCell.innerHTML = arg.roundTime();
  console.log('call buildTable()');
  console.log(arg.cookieDayAvg);
}

//builds list and table for location1
function loc1Build()
{
  buildList('list-loc1', location1);
  buildTable('table-loc1', llArr[0]);
}
//builds list and table for location2
function loc2Build()
{
  buildList('list-loc2', location2);
  buildTable('table-loc2', location2);
}
//builds list and table for location3
function loc3Build()
{
  buildList('list-loc3', location3);
  buildTable('table-loc3', location3);
}
//builds list and table for location4
function loc4Build()
{
  buildList('list-loc4', location4);
  buildTable('table-loc4', location4);
}
//builds list and table for location5
function loc5Build()
{
  buildList('list-loc5', location5);
  buildTable('table-loc5', location5);
}
//builds table data for all locations on sales.html
function salesBuild(tag)
{
  console.log('All values withing llArr:');
  console.log(llArr);
  for(var i = 0; i < llArr.length; i++)
  {
    buildTable(tag,llArr[i]);  
  }
}