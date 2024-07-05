//4QUESTIONS # 42
let magicianss: string[] = ['don','rameez','chris',];

function make_great(magicianss: string[]) {
for(let i = 0; i < magicianss.length; i++) {
    magicianss[i] = magicianss[i] + 'the great';
}
}
// console.log(make_great);

make_great(magicianss);

console.log(magicianss);
