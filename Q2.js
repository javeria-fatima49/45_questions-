//lower case
//QUESTION # 2
var personName = "Seerat";
console.log("lowercase:", personName.toLowerCase());
//uper case
console.log("uppercase:", personName.toUpperCase());
//title case 
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
