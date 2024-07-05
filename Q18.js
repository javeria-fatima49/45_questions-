//question #18
//Think of something you could store in a array. 
//For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['cape town', 'dehli', 'faislabad', 'bankok', 'ahmadabad'];
console.log('original' + places);
console.log('copy ' + __spreadArray([], places, true).sort());
console.log('original :' + places);
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
console.log('original :' + places.sort());
console.log('original :' + places.sort().reverse());
