//QUESTIONS # 44
function make_sandvich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandvich with: ".concat(items.join(','), "."));
}
make_sandvich('han', 'chees');
make_sandvich('turkey', 'lettuce', 'tomato');
make_sandvich('avacado', 'sprouts', 'mustard', 'mayo');
