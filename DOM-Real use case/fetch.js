

function get(){
    fetch("https://restcountries.com/v3.1/all",{
        method:"GET"
    }).then((data)=>data.json())
    .then(countries=>{
        var container=document.getElementById("container");
        countries.map((country)=>{
            var countrylist=document.createElement('div');
            countrylist.innerHTML=`
            <img src=${country.flags.png} alt=""></img>
            `
            container.append(countrylist);
        })
 
    })
}

get();