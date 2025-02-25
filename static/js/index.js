let url = "https://randomuser.me/api/?authuser=0";
let global, risorsa;
let nome = document.querySelector("#nome");
let immagine = document.querySelector("#immagine");
let info = document.querySelector("#info");

risorsa = fetch(url).then(
    function (resp) {
        console.log(risorsa)
        console.log(resp)
        return resp.json()
    }
).then(
    function (data) {
        immagine.src = data.results[0].picture.large;
        nome.innerHTML = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
        info.innerHTML = data.results[0].cell;
    }
).catch(
    function (err) {
        console.log(err)
    }
)
console.log(risorsa)