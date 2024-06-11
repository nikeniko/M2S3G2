function updateSavedNameDisplay() {
  const savedName = localStorage.getItem("name"); // recupera il valore associa alla chiave "name" dal localStorage
  const savedNamedisplayed = document.getElementById("saved-name"); //Seleziona l'elemento HTML con id "saved-name"
  if (savedName) {
    savedNamedisplayed.textContent = `Nome precedentemente usato : ${savedName}`; // se esiste un nome salvato, aggiorna il contenuto del div con il nome salvato
  } else {
    savedNamedisplayed.textContent = "Nessun nome salvato"; // se non esiste un nome salvato, aggiornato il contenuto del div con un messagio di avisso
  }
}

function saveName() {
  const nameInput = document.getElementById("name-input").value; // Recupera il valore del campo di input con id "name-input"
  localStorage.setItem("name", nameInput); // Salva il valore ne localStorage con la chiave "name"
  updateSavedNameDisplay();
}
function removeName() {
  localStorage.removeItem("name"); // rimuove il valore "name-input"
  updateSavedNameDisplay();
}

document.addEventListener("DOMContentLoaded", updateSavedNameDisplay); // chiama la funzione dopo averlo analizzato

let counter = sessionStorage.getItem("counter") // recupera il valore da counter
  ? parseInt(sessionStorage.getItem("counter"), 10) // ? verifica se il valore non è nullo se non lo è lo converte in un numero decimale specificato dal 10
  : 0; // se il valore è nullo comincia da 0

function increment() {
  counter++;
  document.getElementById("timer").textContent = counter; // aggiorna il contenuto dell'elemento html con id timer
  sessionStorage.setItem("counter", counter); // salva il nuovo valore del contatore sotto la variabile counter
}

setInterval(function () {
  // un intervallo che avvia la funzione ogni 1000 millisecondi
  increment();
}, 1000);

document.getElementById("timer").textContent = counter; // per far si che il numero venga visualizzato nel caricare la pagina
