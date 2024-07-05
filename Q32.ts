//QUESTIONS# 32
let current_users: string[] = ['sualeha','tuba','ramsha','javeria','amna',];
let new_users: string[] = ['rabiya','hafsa','soniya','sajjal','javeria'];

new_users.forEach((newUser) =>{
if (
    current_users.some(
        (currentUsers) => currentUsers.toLowerCase() === newUser.toLowerCase()

    )


){
    console.log(`${newUser} will need to enter a new username.`);

}else{

console.log(`${newUser} is available.`);
}
})