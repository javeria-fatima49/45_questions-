// //project 14# question 43


let magicians: string[] = ['alice', 'david', 'chris'];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice());

console.log('original magicians:');
console.log(magicians);

console.log('great magicians:');
console.log(greatMagicians);
