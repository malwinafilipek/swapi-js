const { Readline } = require("readline/promises");

async function fetchResource(recource, pagenum,  query){
    let paramURL;
    let x = (query == undefined);
    if ((recource == "planets" && x) ||( recource == "people" && x) || (recource == "starships" && x)){
        paramURL = `https://swapi.dev/api/`+recource+`/?page=`+pagenum;
    } else {
        paramURL = `https://swapi.dev/api/`+recource+`?search=`+query;
    }
    const response = await fetch(paramURL);
    const data = await response.json();
    nextPage = data.next;
    prevPage = data.previous;
    let params = data.results;
    params.forEach(element => {
        console.log(element.name)
    });
}

fetchResource("planets", 1, "tatooine");
// function next(){
//     if (nextPage){
//         paramURL = new URL(nextPage)
//     }
// }

// console.log("funckja posiada dwie zmienne: x, y.")
// console.log('x => wybieranie listy zasobów: "planets" / "people" / "starships" + numer strony')
// console.log('y => searching: np fetchResource("planets", "Tatooine") / fetchResource("people", "r2")')

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('Aby wyświetlić stronę zasobu wybierz 1.\nAby wyświetlić konkretny obiekt wybierz 2.', option => {
//     switch (option){
//         case 1:
//             // readline.question('Podaj nazwę zasobu, który chcesz wyświetlić: \n-planets\n-people\n-starships'), resource => {
//             //     console.log(resource)
//             // }
//             console.log(option)
//         case 2:
//             console.log(option)
//     };
//     readline.close();
//   });
// // fetchResource("planets", "2")


