class StringBuilder {
    #value;
    constructor(params) {
        this.#value = params;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str) {
        this.#value = this.#value.concat(" ", str);
        return;
    }
    padStart(str) {
        this.#value = str.concat(" ", this.#value);
        return;
    }
    padBoth(str) {
        this.#value = this.#value.concat(str, " ");
        this.#value = str.concat(" ", this.#value);
        return;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
