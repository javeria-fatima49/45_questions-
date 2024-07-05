//QUESTIONS # 37
function make_shirt(size, massage) {
    if (size === void 0) { size = 'large'; }
    if (massage === void 0) { massage = ' I love typescript'; }
    console.log("making  a ".concat(size, " t-shirt with the messsage \"").concat(massage, "\" printed on it."));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'dive into coding');
