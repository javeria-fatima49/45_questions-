//lower case
//QUESTION # 2
let personName:string ="Seerat";
console.log("lowercase:",personName.toLowerCase());

//uper case
console.log("uppercase:",personName.toUpperCase());

//title case 
console.log("Titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));