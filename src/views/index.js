//Tjekker om bruger findes
document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  //Hvis ikke, så bliver man redirected til login.html
  if (!user) {
    location.href = "/login.html";
  }
//henter deleteUser elementet, der bliver brugt fra min index.html
  document.getElementById("deleteUser").addEventListener("submit", (event) => {
    event.preventDefault();

    //viser at det er "user", som skal slettes
    const user = JSON.parse(localStorage.getItem("user"));

    //fetcher min /users/delete endpoint for at slette specifik bruger
    fetch("http://localhost:6969/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          //"remover" "user", og redirecter til login.html
          localStorage.removeItem("user");
          location.href = "/login.html";
        }
      })
      //Hvis noget går galt, kommer denne besked
      .catch(() => {
        window.alert("Something went wrong.");
      });
  });
});

