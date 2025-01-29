const URL = "https://api.restful-api.dev/objects";
let para = document.getElementById("para");
let btn = document.getElementById("btn");




// const getData = async () => {
//     console.log("getting data . . .");

//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);

    
//     para.innerText = data[1].name;
// }

function getData() {
    fetch(URL).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        para.innerHTML = data[3].name;
    })
}

btn.addEventListener("click" , getData);