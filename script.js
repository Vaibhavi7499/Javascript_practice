
function getData()
{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
        return res.json()
    })
    .then((response)=>{
        let tableData="";
        response.map((ele)=>{
        tableData+=`<tr>
        <td>${ele.id}</td>
        <td>${ele.title}</td>
        <td>${ele.description}</td>
        <td>${ele.price}</td>
        <td><img src="${ele.image}" /></td>
        </tr>`
        })
        document.getElementById("table_body").innerHTML= tableData
    })

}
getData()