
//getelementbyid for at hente knappen fra min create.html, der skal trigger eventet
document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("createUser").addEventListener("submit", (event) => {
    //gør så siden ikke reloader
    event.preventDefault();

    //Jeg henter inputtet fra de to inputfelter til email og kode i HTML
    //henter input fra email og password fra min create.html
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //bruger skal nu inkludere email og password som deres input
    const user = {
      email: email,
      password: password
    };


    //bruger dette endpoint til user creation
    fetch("http://localhost:6969/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
   
      .then((response) => response.json())
      .then((response) => {
        if (response) {

//Når funktion virker vil man directes til login.html
          window.alert("User has been created. Welcome to Pastel Avisen")
          location.href = "/login.html";
        }
      })
      //hvis der slås fejl vil denne besked køre:
      .catch(() => {
        window.alert("Something went wrong.");
      });
  });
});
