class Item {
    //bruger constuctor til at "constructe" (lave) mit Items (vare) objekt
        constructor(kategori, pris) {
            //herefter gemmer jeg de ønskede variabler til mit Item-objekt
            this.kategori = kategori;
            this.pris = pris;
        }
    }
    
    module.exports = Item;