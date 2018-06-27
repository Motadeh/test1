


/* function myfunction() {
    document.getElementById("fromcurrency").classList.toggle("show"); */
// }


/* let droplist = document.getElementById('country');
droplist.length = 0;

let defaultoption = document.createElement('option');
defaultoption.text = 'choose country';

droplist.add(defaultoption);
droplist.selectedIndex = 0; */

const url = 'https://free.currencyconverterapi.com/api/v5/currencies';

let data;
fetch(url).then(response => response.json()).then(data => console.log(data));
data;

 let fromcurrency = document.getElementById('countries');

function currencyOption(data){

    let fromcurrency = document.getElementById('countries');

    for (let currency of Object.keys(data).sort()){
        let {currencyName, id} = data[currency];

        console.log(currencyName);



        let optionFrom = document.createElement('option');
        optionFrom.innerText = `${currency} (${currencyName})`;
        optionFrom.value = `${currency}`;

        let optionTo = document.createElement('option');
        optionTo.innerText = `${currency}(${currencyName})`;
        optionTo.value = `${currency}`;

        fromcurrency.appendChild(optionFrom);

        toCurrencyInput.appendChild(optionTo);
    
    }
}