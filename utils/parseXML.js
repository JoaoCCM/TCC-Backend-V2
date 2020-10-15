// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var xhr = new XMLHttpRequest();

// xhr = new XMLHttpRequest();

// xhr.open("GET", "./file.xml", false);
// xhr.send();

// var xmlDoc = xhr.responseXML;

// const json = { artista: [], disco: [] };

// let x = xmlDoc.getElementsByTagName("CD");

// for (let i = 0; i < x.length; i++) {
//     json.artista.push(
//         `Artista: ${
//             x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue
//         }`
//     );
//     json.disco.push(
//         `Disco: ${
//             x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
//         }`
//     );
// }

// console.log(x);

//FileSystem já é um modulo nativo do node, não precisa instalar
const fs = require("fs");

//nesse exemplo o caminho ali é um diretorio criado na raiz desse projeto
const fileData = fs.readFileSync("./file.xml", "utf-8");

console.log(typeof fileData);

//se o arquivo não existir o filesystem cria
fs.writeFileSync("./copiedFile.html", fileData, (err) => {
    console.error(err);
});

console.log(fileData);
