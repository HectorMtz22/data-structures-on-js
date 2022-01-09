// Extend the JS Array 
Array.matrix = function(numrows, numcols, initial) {
    let arr = []
    for (let i = 0; i < numrows; i++) {
        let columns = []
        for (let j = 0; j < numcols; j++) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr
}

function weekTemps() {
    this.dataStore = Array.matrix(12, 0, 0)
    
    this.add = (month, value) => {
        this.dataStore[month].push(value)
    }

    this.monthlyAverage = (month) => {
        return this.dataStore[month].reduce((p, c) => p += c) / this.dataStore[month].length
    }

    this.average = (month, week) => {
        return this.dataStore[month][week]
    }

    this.totalAverage = () => {
        return (this.dataStore
            .flat()
            .reduce((previous, current) => previous += current)) / this.dataStore.flat().length
    }
}

// Testing
const weektemps = new weekTemps();
weektemps.add(0, 68)
weektemps.add(0, 69)
weektemps.add(0, 70)
weektemps.add(1, 70)
console.log(weektemps.monthlyAverage(0))
console.log(weektemps.average(1, 0))
console.log(weektemps.totalAverage())