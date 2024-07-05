//QUESTIONS # 40
function makeAlbum(writername, albumtitle) {
    return { writername: writername, albumtitle: albumtitle };
}
var album1 = makeAlbum('imam ahmad raza khan', 'meri ulfat madiny sy yunhi nh');
var album2 = makeAlbum('imam ahmad raza khan', 'sb se ola ho aala hamara nabi');
var album3 = makeAlbum('imam ahmad raza khan', 'subha taiba mai hoi batTa bara noora ka');
console.log(album1);
console.log(album2);
console.log(album3);
function makeAlbum2(writername, albumtitle, numberOfTracks) {
    return { writername: writername, albumtitle: albumtitle, numberOfTracks: numberOfTracks };
}
var album4 = makeAlbum2('imama ahmad raza khan', 'dil sy mustafa ko tu pukar', 30);
var album5 = makeAlbum2('imam ahmad raza khan', 'hasbi rabbi jallah', 55);
var album6 = makeAlbum2('javeriafatima', 'typescript ki coding', 66);
console.log(album4);
console.log(album5);
console.log(album6);
