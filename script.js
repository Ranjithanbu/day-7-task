//Solving problems using array functions 

//a)Get all the countries from Asia continent /region using Filter function

const URL="https://restcountries.com/v3.1/all";

const req= new XMLHttpRequest();

req.open("GET",URL);

req.send();

req.onload = () => {
const arr=JSON.parse(req.response)
 
const con=(obj)=>{
if(obj.continents=="Asia"){console.log(obj.name.common)}
}
const ans=arr.filter(con)
console.log(ans)}


//b)Get all the countries with a population of less than 2 lakhs using Filter function

const URL="https://restcountries.com/v3.1/all";

const req= new XMLHttpRequest();

req.open("GET",URL);

req.send();

req.onload = () => {
const arr=JSON.parse(req.response)
 
const con=(obj)=>{
if(obj.population<200000){console.log(obj.name.common,"=> population =>",obj.population)}
}
const ans=arr.filter(con)
console.log(ans)}*/

//c)Print the following details name, capital, flag, using forEach function

const URL="https://restcountries.com/v3.1/all";

const req= new XMLHttpRequest();

req.open("GET",URL);

req.send();

req.onload = () => {
const arr=JSON.parse(req.response)

arr.forEach((element)=>console.log(element.name.common,"=>",element.capital,"=>",element.flags.png))

}



//d)Print the total population of countries using reduce function

const URL="https://restcountries.com/v3.1/all";

const req= new XMLHttpRequest();

req.open("GET",URL);

req.send();

req.onload = () => {
const arr=JSON.parse(req.response)
let pop=[]
for(let i of arr){
    pop.push(i.population)
}
let add=(a,b)=>{
    return a+b
}
console.log(pop.reduce(add))
}

//e)Print the country that uses US dollars as currency.

const URL="https://restcountries.com/v3.1/all";

const req= new XMLHttpRequest();

req.open("GET",URL);

req.send();

req.onload = () => {
const arr=JSON.parse(req.response)

console.log(arr.filter((val)=>{
    if(val.currencies.USD){console.log(val.name.common)}
}))
}


