//let countValue=document.getElementById('count').value
let countValue=0
function decrease()
{
    countValue=countValue-1
    document.getElementById('count').innerHTML=countValue
    if(countValue<=0)
    document.getElementById('decrease').disabled=true

}

function reset()
{
    countValue=0
    document.getElementById('count').innerHTML=countValue
    document.getElementById('decrease').disabled=true
}

function increase()
{
    countValue=countValue+1
    document.getElementById('count').innerHTML=countValue
    document.getElementById('decrease').disabled=false
}