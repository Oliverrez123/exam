//Tjekker hvorledes bruger findes
document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    //Hvis ikke, så redirect til login.html endpointet
    if (!user) {
      location.href = "/login.html";
    }});

//laver funktion der updater users emaol og PW  
//definerer at user er den som er logged on, altså den fra Localstor..
function updateUser(){
  var userMail = localStorage.getItem("user");
  userMail = JSON.parse(userMail)

  //får værdierne fra de inputs der bliver lagt ind i værdierne fra profil.html
  var email = document.getElementById("newEmail").value;
  var password = document.getElementById("newPassword").value;

  //fetcher /users/update endpointet
  const updateUser = {email: email, password: password, userMail: userMail.email};
  const Opdater = {email: email, password: password};
  fetch("http://localhost:6969/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
    
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.setItem("user", JSON.stringify(Opdater))
          //Denne alert bliver vist når user er updated
          window.alert("User updated")
        }
      })
      //Hvis der sker en fejl bliver den catched og viser denne besked:
      .catch(() => {
        window.alert("Something went wrong, try again.");
      });
  };
  //laver logout funktion 
    function logout() {
      localStorage.clear();
      //når man er logget ud, bliver man redirected til login.html endpointet
      location.href = "/login.html"
    }
//ny item function
//henter knappen med ID "createForm" 
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("createForm").addEventListener("submit", (event) => {
    event.preventDefault();

    //tager inputsne fra mine HTML id felter
    const valgtKategori = document.getElementById("category").value;
    const valgtPris = document.getElementById("price").value;

    //min vare skal bestå af disse 2
    const item = {
      kategori : valgtKategori,
      pris : valgtPris
};
    console.log(item)
    //fetcher mit /items/create endpoint for item oprettelse
    fetch("http://localhost:6969/items/create", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(item),
    })
    //fortæller hvad der skal ske når functionen kører
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        //når den er oprettet:
        window.alert("Item is now in our system")
      }
    })
    //ved fejl:
    .catch(() => {
      window.alert("The item could not be created. Try again")
      
    })})});

//laver en loadfile funktion der kan sætte billede op ved varen
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

//Jeg eksporter logud-funktionen så den kan hentes andre steder
module.exports = logout();
