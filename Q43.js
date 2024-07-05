// //project 14# question 43
var magicians = ['alice', 'david', 'chris'];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice());
console.log('original magicians:');
console.log(magicians);
console.log('great magicians:');
console.log(greatMagicians);
