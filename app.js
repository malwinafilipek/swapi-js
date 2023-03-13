async function fetchResource(x, pagenum,  y){
    let paramURL;
    if ((x == "planets" && y == undefined) ||( x == "people" && y == undefined) || (x == "starships" && y == undefined)){
        paramURL = `https://swapi.dev/api/`+x+`/?page=`+pagenum;
    } else {
        paramURL = `https://swapi.dev/api/`+x+`?search=`+y;
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
// function next(){
//     if (nextPage){
//         paramURL = new URL(nextPage)
//     }
// }
//funckja posiada dwie zmienne: x, y.
//x => wybieranie listy zasobów: "planets" / "people" / "starships" + numer strony
//y => searching: np fetchResource("planets", "Tatooine") / fetchResource("people", "r2")
fetchResource("planets", "2")
