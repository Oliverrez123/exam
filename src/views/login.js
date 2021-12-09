

//Tjekker om bruger er i storage
document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  //hvis ikke, send til "/" som er index
  if (user) {
    location.href = "/";
  }

  //henter "form" id fra min html, som er log in knappen
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    //henter input fra email og password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //definerer bruger = disse 2 properties, email og password
    const user = {
      email: email,
      password: password};

    //fetcher login endpointet
    fetch("http://localhost:6969/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })

    //Hvis bruger er der:
      .then((response) => response.json())
      .then((response) => {
        if (response) {
    
          //gemmer user i localstorage
          localStorage.setItem("user", JSON.stringify(user));
          //user skal sendes til "/" som er index
          location.href = "/";
        } else {
          //Hvis brugeren ikke passer i databasen vil vedkommende få en alert med en besked om dette
          //hvis ikke findes, vil denne alert komme frem:
          window.alert("You're not currently in our database");
        }
      })
      .catch(() => {
       //ved fejl:
        window.alert("Something went wrong. Try again..");
      });
  });
});
