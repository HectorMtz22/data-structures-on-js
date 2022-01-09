function Grades() {
    this.current = [];
    this.add = add;
    this.average = average;

    function add(element) {
        this.current.push(element)
    }

    function average() {
        const sum = this.current.reduce((previous, current) => previous += current)
        return (sum / this.current.length).toFixed(2)
    }
}

// This is for testing
const database = new Grades();
database.add(80)
database.add(90)
database.add(80)
console.log(database.average())