const fs = require("fs");

const NEW_PATH = __dirname + "/../../data";
const ITEM_FILE = "/items.json";

class IDB {
    constructor() {
        this.items = this.openFile(ITEM_FILE);
    }

    saveFile(fileName, contentString) {
        fs.writeFileSync(NEW_PATH + ITEM_FILE, contentString);
      }
    openFile() {
        const file = fs.readFileSync(NEW_PATH + ITEM_FILE);
        return JSON.parse(file);
    }
    //specifikt

    saveItem(item) {
        this.items.push(item);
        console.log(this.items)
        this.saveFile(ITEM_FILE, JSON.stringify(this.items));
    }

    deleteItem(item) {
        this.items = this.items.filter((x) => x.kateogri != item.kategori);
        this.saveFile(ITEM_FILE, JSON.stringify(this.items));
      }
}


module.exports = new IDB();