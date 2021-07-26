// 1. Create an XHR Object
var request= new XMLHttpRequest();
// 2.Open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// 3.Send a connection 
request.send();
// 4.Once data has been received successfully, we have to convert the data
request.onload=function(){
    var data = JSON.parse(this.response);
    console.log(data);

    //Get all countries with region Asians
    var a = data.filter(i =>i.region==="Asia").map(j=>j.name);
    console.log(a);

    //Get all countries with population less than 200000
    var population = data.filter(i => i.population<200000).map(j => (j.name+" "+j.population));
    console.log(population);

    //Get all countries which is using USD 
    var usd = data.filter(i=>{
        for( x in i.currencies){
            if(i.currencies[x].code==="USD")
            {
                return true;
            }
        }
    }).map(i=>i.name);
    console.log(usd);

    // Get sum of population of all countries
    var tot_pop= data.reduce((a,b)=>a+b.population,0);
    console.log(`Total Population is :${tot_pop}`);
}