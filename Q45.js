//project last Question 45//
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car('toyota', 'gorolla', ['color', 'red'], ['year', 2020]));
console.log(make_car('ford', 'fiesta', ['color', 'blue'], ['year', true]));
///completed project 45 questions//