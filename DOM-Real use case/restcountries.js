

function getCountries(){
fetch("https://restcountries.com/v3.1/all",{
    method:"GET"
})
.then((data)=>data.json())
.then(sortedCountries=>{
const countryList=document.getElementById("country-list");
sortedCountries.forEach((country)=>{
    const countryContainer=document.createElement('div');
    countryContainer.innerHTML=`
    <div>
    <img class="country-flag" src=${country.flags.png} alt="flag"
    </div>
    <div class="country-details">
    <h2>${country.name.common}</h2>
    <p><span class="country-details-heading">Population:</span>${country.population}</p>
    <p><span class="country-details-heading">Region:</span>${country.region}</p>
    <p><span class="country-details-heading">Capital:</span>${country.capital}</p>
    </div>
    `
    countryList.append(countryContainer);
})
});
}

getCountries();
