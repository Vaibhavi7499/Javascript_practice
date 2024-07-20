function showTime()
{
let currentDate=new Date()
let date1=currentDate.getDate()
let month=currentDate.getMonth()
let monthsName=["January","February","March","April","May","June","July","August","September","Octomber","November","December"]
let year=currentDate.getFullYear()
document.getElementById('subcontainer').innerHTML=`${date1} - ${monthsName[month]} - ${year}`
setTimeout(showTime,1000)
}
 showTime()