let url = "https://randomuser.me/api/?authuser=0";
let global, risorsa;

let nome = document.querySelector("#nome");
let immagine = document.querySelector("#immagine");
let fisso = document.querySelector("#fisso");
let mobile = document.querySelector("#mobile");
let mail = document.querySelector("#mail");

let dettagli = document.querySelector("#dettagli");
let nascita = document.querySelector("#nascita");
let eta = document.querySelector("#eta");
let ubicazione = document.querySelector("#ubicazione");
let indirizzo = document.querySelector("#indirizzo");

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
        fisso.innerHTML = "Tel: " + data.results[0].phone;
        mobile.innerHTML = "Cell: " + data.results[0].cell;
        mail.innerHTML = "Email: " + data.results[0].email;

        dettagli.innerHTML = "Dettagli del profilo";
        nascita.innerHTML = "Data di nascita: " + data.results[0].dob.date;
        eta.innerHTML = "Età: " + data.results[0].dob.age + " anni";
        ubicazione.innerHTML = "Paese di provenienza: " + data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.country;
        indirizzo.innerHTML = "Indirizzo: " + data.results[0].location.street.name + ", " + data.results[0].location.street.number;
    }
).catch(
    function (err) {
        console.log(err)
    }
)
console.log(risorsa)