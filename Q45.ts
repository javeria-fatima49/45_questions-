//project last Question 45//

function make_car(manufacturer: string, model: string,...options: [string, any][]): object {
    let car: { manufacturer: string; model: string; [key: string]: any } = { manufacturer, model };
    

    options.forEach(([key, value]) => car[key] =value);
    return car;

}
console.log(make_car('toyota','gorolla',['color','red'],['year',2020]));

console.log(make_car('ford','fiesta',['color','blue'],['year',true]));


///completed project 45 questions//