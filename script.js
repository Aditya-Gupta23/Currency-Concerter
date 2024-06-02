let famt=document.querySelector(".amt");
let tamt=document.querySelector(".camt");
let result=document.querySelector("#res");
let dbfrom=document.querySelector("#dbfrom");
let dbto=document.querySelector("#dbto");

const countries = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "KRW", name: "South Korean Won" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "INR", name: "Indian Rupee" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "ZAR", name: "South African Rand" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DKK", name: "Danish Krone" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "RON", name: "Romanian Leu" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "THB", name: "Thai Baht" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "QAR", name: "Qatari Riyal" },
    { code: "OMR", name: "Omani Rial" },
    { code: "MAD", name: "Moroccan Dirham" },
    { code: "TWD", name: "New Taiwan Dollar" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "TZS", name: "Tanzanian Shilling" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "NPR", name: "Nepalese Rupee" },
    { code: "BGN", name: "Bulgarian Lev" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "ISK", name: "Icelandic Krona" },
    { code: "MKD", name: "Macedonian Denar" },
    { code: "RSD", name: "Serbian Dinar" },
    { code: "HNL", name: "Honduran Lempira" },
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
    { code: "MDL", name: "Moldovan Leu" },
    { code: "ALL", name: "Albanian Lek" },
    { code: "GEL", name: "Georgian Lari" }
];
famt.value=1;

countries.forEach(country=>{
    const option1=document.createElement("option");
    const option2=document.createElement("option");

    option1.value=option2.value=country.code;
    option1.textContent=option2.textContent=`${country.code}(${country.name})`;

    dbfrom.appendChild(option1);
    dbto.appendChild(option2);

    dbfrom.value="USD";
    dbto.value="INR";

})

const getExchangeRate=async ()=>{
    try{
    res.textContent="Fetching Data .....";
    let responce=await fetch(`https://api.exchangerate-api.com/v4/latest/${dbfrom.value}`);
    let data =await responce.json();

    let xrate=data.rates[dbto.value];
    let convertedAmt=(famt.value*xrate).toFixed(2);
    tamt.value=convertedAmt;
    if(typeof xrate=="undifind"){
        document.querySelector("main").textContent="Exchange rate not avalible for selected country";     
    }
    else{
    result.textContent=`1 ${dbfrom.value} = ${xrate} ${dbto.value}`;
    }
    console.log(data);
    }
    catch(error)
    {
        document.querySelector("main").textContent="some error occured";
    }

}

getExchangeRate();
dbfrom.addEventListener("change",getExchangeRate);
dbto.addEventListener("change",getExchangeRate);
famt.addEventListener("change",getExchangeRate);
tamt.addEventListener("change",getExchangeRate)
