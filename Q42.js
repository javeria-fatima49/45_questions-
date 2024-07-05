//4QUESTIONS # 42
var magicianss = ['don', 'rameez', 'chris',];
function make_great(magicianss) {
    for (var i = 0; i < magicianss.length; i++) {
        magicianss[i] = magicianss[i] + 'the great';
    }
}
// console.log(make_great);
make_great(magicianss);
console.log(magicianss);
