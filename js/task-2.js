class Storage {
    #items = [];
    constructor(parametr) {
        this.#items = parametr;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        return this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const newMassiv = this.#items.filter((item) => item !== itemToRemove);
        this.#items = newMassiv;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

