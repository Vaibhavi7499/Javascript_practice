let person = {
  name: "Vaibhavi Bodke",
  age: 20,
  location:{
    address:{
  city: "Kanheri",
    }
  }
};

//let person1=Object.assign({},person)
let person1={
    ...person,
    name:"Vaibhavi Phawade",
    age:21,
    location:{
    address:{
        city:"Latur"
    }
    }
}

//person1.address.city="Latur"
console.log(person1)
document.getElementById("name").innerHTML=person.name
document.getElementById("name1").innerHTML=person1.name
document.getElementById("age").innerHTML=person.age
document.getElementById("age1").innerHTML=person1.age
document.getElementById("city").innerHTML=person?.location?.address?.city
document.getElementById("city1").innerHTML=person1?.location?.address?.city