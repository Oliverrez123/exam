// bruger var fs for at bruge File Server på egen computer
var fs = require("fs");



//viser hvor user og data skal gemmes og hentes
const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";


//laver en class der hedder DB, der skal holde flere funktioner ift databsen
class DB {
  constructor() {
    this.users = this.openFile(USER_FILE);}


  //sætter path til hvor filer gemmer
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + USER_FILE, contentString);
  }

  // metode der åbner filer som JSON

  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + USER_FILE);
    return JSON.parse(file);
  }



  //metode der viser hvor bruger skal gemmes
  saveUser(user) {
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }


  //metode der viser hvordan bruger slettes fra systemet
  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  //metode til at finde bruger gennem email 'verificering'
  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }
  //forloop for opdateiring af user
  updateUser(user) {
    for (let i=0; i < this.users.length; i++) {
      console.log(this.users[i]);
      console.log(user);
      if (this.users[i].email == user.userMail) {
        this.users[i].email = user.email;
        this.users[i].password = user.password;}
    }
    this.saveFile(USER_FILE, JSON.stringify(this.users));}}

//for at kunne hentes i de andre filer, eksporterer jeg routeren
module.exports = new DB();

