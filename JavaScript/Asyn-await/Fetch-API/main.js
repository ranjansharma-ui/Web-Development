async function getData() {
    // get request - async
    let responce = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');

    // parse json - async
    let data = await responce.json();
    console.log(data);
    
}
// getData();

///scenario:
 //prepare url / api endpoint -> sync
//await  //fetch data -> network call -> async
 // process data -> sync




 const myHeader = new Headers();
 myHeader.append("Content-type","application/json");

 const url = "https://jsonplaceholder.typicode.com/posts";

 const option = {
    method: "POST",
    body: JSON.stringify({username: "Ranjan Sharma"}),
    Headers: myHeader,
 };
// apiKey need
 async function getData() {
    const responce = await fetch(url);
    let data = await responce.json();
    console.log("get data responce: ", data);
 }

 async function POSTData() {
    const response = await fetch(url,option);
    let data = await response.json();
    console.log("post data responce: ", data);
 }

 async function ProcessData(){
    await POSTData();
    await getData();
 }

ProcessData();