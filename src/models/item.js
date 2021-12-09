class Item {
//laver mine item objekter med constructor metoden
    constructor(kategori, pris) {
        
        this.kategori = kategori;
        this.pris = pris;
    }}

//for at kunne hentes i de andre filer, eksporterer jeg routeren
module.exports = Item;