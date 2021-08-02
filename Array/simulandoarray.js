const quasearray = { 0: 'Rafael', 1: 'ana', 2: 'Bia' }
console.log(quasearray)
Object.defineProperty(quasearray, 'toString', {
    value: function() { return Object.values(this) }
})
console.log(quasearray[0])