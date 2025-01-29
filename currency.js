const BASE_URL = "https://open.er-api.com/v6/latest";

// console.log("Fetching data");
// const getCurrency = async () => {
//     let response = await fetch(BASE_URL);
//     console.log(response);

//     let data = await response.json();
//     console.log(data.rates);

//     return data;
// }

// getCurrency();

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#form-button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

// for (code in countryList){
//     console.log(code);
// }



for(let select of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        
        if(select.name === "from" && code === "USD"){
            newOption.selected = "1";
        }
        if(select.name === "to" && code === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag= (element) => {
    let curr = element.value;
    let currCode = countryList[curr];

    let newSrc = `https://flagsapi.com/${currCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

function updateValue(amount) {
    let res_output = document.querySelector("#result");
    res_output.innerText = amount;
    res_output.value = amount;
}

let calculateValue = async (amount, url)=> {
    console.log(amount);
    let response = await fetch(url);
    let data = await response.json();
    let destCurr = toCurr.value;

    console.log(destCurr);
    let allRates = data.rates;
    let finalAmount = allRates[destCurr] * amount;
    console.log(finalAmount);

    updateValue(finalAmount);
}


btn.addEventListener("click", (event) => {
    event.preventDefault();
    getUrlAmount();
})

function getUrlAmount() {
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;

    if(amtValue == "" || amtValue < 1){
        amtValue = 1;
        amount.value = "1";
    }

    const url = `${BASE_URL}/${fromCurr.value}`;
    console.log(url);


    calculateValue(amtValue,url);
}


window.addEventListener("load" , () => {
    getUrlAmount();
});