// bruger var fs for at bruge File Server på egen computer
const fs = require("fs");


//viser hvor user og data skal gemmes og hentes
const NEW_PATH = __dirname + "/../../data";
const ITEM_FILE = "/items.json";


//laver en class der hedder DB, der skal holde flere funktioner ift databsen
class IDB {
    constructor() {
        this.items = this.openFile(ITEM_FILE);
    }


  //sætter path til hvor filer gemmer
    saveFile(fileName, contentString) {
        fs.writeFileSync(NEW_PATH + ITEM_FILE, contentString);
      }

// metode der åbner filer som JSON
    openFile() {
        const file = fs.readFileSync(NEW_PATH + ITEM_FILE);
        return JSON.parse(file);
    }
    
//metode der viser hvor items skal gemmes
saveItem(item) {
    this.items.push(item);
        console.log(this.items)
        this.saveFile(ITEM_FILE, JSON.stringify(this.items));
    } }

//for at kunne hentes i de andre filer, eksporterer jeg routeren
module.exports = new IDB();