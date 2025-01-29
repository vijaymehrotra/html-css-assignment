// const getPromise= () =>  {
//     return new Promise((resolve , reject) => {
//         console.log("This is a promise");
//         resolve("success");
//     });
// };

// let pro = getPromise();
// pro.then((res) => {
//     console.log("promise fulfilled with message: ", res);
// });

// function getData(dataId) { 
//     return new Promise((resolve , reject) => {
//         setTimeout(()=> {
//             console.log("data = " + dataId);
//             resolve("success");
//         }, 2000);
//     });
// }


// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 2000);
//     });
// }

// console.log("Fetching Data");
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log("Fetching data 2");
//     let p2 = asyncFunc();
//     p1.then((res) =>{});
// });

// console.log("Fetching data 1");
// getData(1).then((res) => {
//     console.log("Fetching data 2");
//     return getData(2);
// })  
// .then((res) =>{
//     console.log(res);
// });

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(200);
            resolve("success");
        }, 2000)
    })
}

async function getWeatherData() {
    console.log(1);
    await api();
    console.log(2);
    await api();
    console.log(3);
}

getWeatherData();

