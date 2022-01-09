// @ts-check

function Words() {
    this.dataStore = [];

    const add = (element) => {
        this.dataStore.push(element)
    }

    const display = () => {
        return this.dataStore.join(" ")
    }

    const displayInverted = () => {
        return this.dataStore.reverse().join(" ")
    }

    this.add = add;
    this.display = display;
    this.displayInverted = displayInverted;
}


// For testing
const words = new Words();
words.add("Hola")
words.add("Mundo")
console.log(words.display())
console.log(words.displayInverted())