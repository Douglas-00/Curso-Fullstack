let compara = function(param) {
    console.log(this === param)
}
compara(global)
const obj = {}
compara = compara.bind(obj)
compara(global)
compara(obj)

let compara = param => console.log(this === param)