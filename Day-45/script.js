const data = async()=>{
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const userdata = await response.json();
console.log(userdata);
}

// data();

async function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

