//QUESTIONS# 32
var current_users = ['sualeha', 'tuba', 'ramsha', 'javeria', 'amna',];
var new_users = ['rabiya', 'hafsa', 'soniya', 'sajjal', 'javeria'];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUsers) { return currentUsers.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
