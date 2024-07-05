//QUESTIONS # 40
function makeAlbum(writername: string,albumtitle: string){
    return{writername,albumtitle}
}

let album1 = makeAlbum('imam ahmad raza khan','meri ulfat madiny sy yunhi nh');
let album2 = makeAlbum('imam ahmad raza khan','sb se ola ho aala hamara nabi');
let album3 = makeAlbum('imam ahmad raza khan','subha taiba mai hoi batTa bara noora ka');

console.log(album1);
console.log(album2);
console.log(album3);

function makeAlbum2(writername: string, albumtitle: string, numberOfTracks?: number) {
    return {writername, albumtitle, numberOfTracks}
}

let album4 = makeAlbum2('imama ahmad raza khan','dil sy mustafa ko tu pukar',30);
let album5 = makeAlbum2('imam ahmad raza khan','hasbi rabbi jallah',55);
let album6 = makeAlbum2('javeriafatima','typescript ki coding',66);

console.log(album4);
console.log(album5);
console.log(album6);

