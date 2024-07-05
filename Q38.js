//QUESTIONS # 38
function describe_city(nameofcity, country) {
    if (country === void 0) { country = 'pakistan'; }
    return ("".concat(nameofcity, " is in ").concat(country, "."));
}
;
var city1 = describe_city('pakistan,karachi');
var city2 = describe_city('india,dehli');
var city3 = describe_city('dubai,UAE');
var city4 = describe_city('south africa,capetown');
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
