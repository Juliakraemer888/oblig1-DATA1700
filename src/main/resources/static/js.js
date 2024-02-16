let billettene = []; //Endre på arrayet fra kjopBillett-funksjonen slik at det blir globalt tiljengelig og kan brukes i slettBillett-funksjonen

function kjopBillett() {
    let valgtFilm = document.getElementById("filmer").value;
    let valgteBilletter = document.getElementById("antallBilletter").value;
    let valgtFornavn = document.getElementById("skrivFornavn").value;
    let valgtEtternavn = document.getElementById("skrivEtternavn").value;
    let valgtTelefonnr = document.getElementById("skrivTelefonnr").value;
    let valgtEpost = document.getElementById("skrivEpost").value;

    let billett1 = {     //Lager et objekt og setter inn lagde variabler.
        film: valgtFilm,
        antall: valgteBilletter,
        fornavn: valgtFornavn,
        etternavn: valgtEtternavn,
        telefonnummer: valgtTelefonnr,
        epost: valgtEpost
    };
    let valid = true;

    if (billett1.antall === "") {
        document.getElementById("feilAntall").innerHTML = "Skriv noe inn i antall";
    } else {
        document.getElementById("feilAntall").innerHTML = "";
    }
    if (billett1.fornavn === "") {
        document.getElementById("feilFornavn").innerHTML = "Skriv noe inn i fornavnet";
    } else {
        document.getElementById("feilFornavn").innerHTML = "";
    }
    if (billett1.etternavn === "") {
        document.getElementById("feilEtternavn").innerHTML = "Skriv noe inn i etternavnet";
    } else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }
    if (billett1.telefonnummer === "") {
        document.getElementById("feilTelefonnr").innerHTML = "Skriv noe inn i telefonnr";
    } else if (!valideringTelefonnr(document.getElementById("skrivTelefonnr").value)) {
      document.getElementById("feilTelefonnr").innerHTML = "Skriv en gyldig telefonnr";
      valid = false;
    }
    else {
        document.getElementById("feilTelefonnr").innerHTML = "";
    }
    if (billett1.epost === "") {

        document.getElementById("feilEpost").innerHTML = "Skriv noe inn i epost";
    } else if (!valideringEpost(document.getElementById("skrivEpost").value)) {
        document.getElementById("feilEpost").innerHTML = "Skriv en gyldig epostadresse";
        valid = false;
    } else {
        document.getElementById("feilEpost").innerHTML = "";
    }
    if (valid === true) {
        billettene.push(billett1); // pusher/setter inn objektet vi laget inn i arrayet.
        skrivUt();

        //Henter verdiene som oppe uten å sette det til noen variabler. Setter to hermetegn for å blanke de ut.
        document.getElementById("filmer").value = "";
        document.getElementById("antallBilletter").value = "";
        document.getElementById("skrivFornavn").value = "";
        document.getElementById("skrivEtternavn").value = "";
        document.getElementById("skrivTelefonnr").value = "";
        document.getElementById("skrivEpost").value = "";
    }
}
function skrivUt() { //kjører gjennom en for-løkke for å skrive ut verdier vi har laget i objektet og satt inn i arrayet.
  let ut = "";
  for (let i = 0; i < billettene.length; i++) {
      ut += billettene[i].film + " " + billettene[i].antall + " " + billettene[i].fornavn
          + " " + billettene[i].etternavn + " " + billettene[i].telefonnummer +
          " " + billettene[i].epost;
  }
  document.getElementById("utskrift").innerHTML = ut;
}
function slettBillett() {

      billettene = [];  //tømmer arrayet ved å sette den tom.
      console.log(billettene); //sjekker i konsollen og får da et tom array når jeg trykker slett billett.
      skrivUt(); /*kaller på metoden som skriver ut, etter å ha tømt arrayet. Da sletter jeg også teksten som tilhører den slettede billetten. */
  }

  function valideringEpost(input) {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return input.match(validRegex);
  }
  function valideringTelefonnr (input) {
      const validRegex = /^[0-9]{8}$/;
      console.log(input);
      return input.match(validRegex);
  }
