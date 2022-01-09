function Letters() {
    this.dataStore = []

    this.add = (element) => this.dataStore.push(element)
    this.display = () => this.dataStore.join("")
}

// Testing
const letter = new Letters();
letter.add("H")
letter.add("o")
letter.add("l")
letter.add("a")
console.log(letter.display())