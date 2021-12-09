// I denne fil definerer jeg en model til at definerer hvordan mine brugere skal være opbygget til brug i andre filer
class User {
 
  //laver mit bruger objekte med constructor metoden
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

//for at kunne hentes i de andre filer, eksporterer jeg routeren
module.exports = User;
