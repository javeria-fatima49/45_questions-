//QUESTIONS # 38
function describe_city(nameofcity: string, country: string = 'pakistan'){
    return (`${nameofcity} is in ${country}.`);
};

let city1 = describe_city('pakistan,karachi');
let city2 = describe_city('india,dehli',);
let city3 = describe_city('dubai,UAE');
let city4 = describe_city('south africa,capetown',);

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);