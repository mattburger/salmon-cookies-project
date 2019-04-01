'use strict'
var cookies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var customers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var avgByHr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
  var tmpAvgSold = 0;
  for(var i = 0; i < len; i++ )
  {
    avgArr[i] = cookieArr[i]/custArr[i];
    
  }
  return avgArr;
}
function roundAvg(someNumber)
{
  return Math.round((10*someNumber)/10);
}

var location1 = 
{
  salesByHour: simSales(cookies),
  totalSalesDay: totalSales(cookies),
  customersByHour: customersPerHour(customers),
  avgCookiePerCustHourly: avgCookie(cookies,customers,avgByHr),
  minimumCustomersHourly: minCust(customers),
  maximumCustomersHourly: maxCust(customers),
  roundTime: function()
    {
      for(var i = 0; i < this.avgCookiePerCustHourly.length; i++)
      {
        this.avgCookiePerCustHourly[i] = roundAvg(this.avgCookiePerCustHourly[i]);
      }
    }
};
var ulTag = document.getElementById('list-loc1');

var textNode;
var text = '';
var locTime = 0;
for(var i = 0; i < location1.salesByHour.length; i++)
{
  if(i < 6)
  {
    locTime = i + 6;
    var node = document.createElement('li');
    text = '(' + locTime + 'AM) ' + location1.salesByHour[i];
    textNode = document.createTextNode(text);
    node.appendChild(textNode);
    ulTag.appendChild(node);
  }
  else
  {
    locTime = i - 5;
    var node = document.createElement('li');
    text = '(' + locTime + 'PM) ' + location1.salesByHour[i];
    textNode = document.createTextNode(text);
    node.appendChild(textNode);
    ulTag.appendChild(node);
  }
}

for(var i = 0; i < location1.salesByHour.length; i++)
{
  if(i < 6)
  {
    locTime = i + 6;
    var node = document.createElement('li');
    text = '(' + locTime + 'AM) ' + location1.salesByHour[i];
    textNode = document.createTextNode(text);
    node.appendChild(textNode);
    ulTag.appendChild(node);
  }
  else
  {
    locTime = i - 5;
    var node = document.createElement('li');
    text = '(' + locTime + 'PM) ' + location1.salesByHour[i];
    textNode = document.createTextNode(text);
    node.appendChild(textNode);
    ulTag.appendChild(node);
  }
}

console.log('location1');

console.log(location1.salesByHour);
console.log(location1.totalSalesDay);
console.log(location1.customersByHour);
location1.roundTime();
console.log(location1.avgCookiePerCustHourly);
console.log(location1.minimumCustomersHourly);
console.log(location1.maximumCustomersHourly);
