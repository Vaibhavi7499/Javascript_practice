function userData()
{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
       return res.json()
    })
    .then((response)=>{
    let users="";
    response.map((ele)=>{
        users+=`
        <tr>
        <td>${ele?.name}</td>
        <td>${ele?.email}</td>
        <td>${ele?.address?.city}</td>
        <td>${ele?.phone}</td>
        <td>${ele?.company?.name}</td>
      </tr>
        `
    })
    document.getElementById('tbl_body').innerHTML=users
    })
    
}
userData()