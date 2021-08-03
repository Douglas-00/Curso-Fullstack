function log(){
    console.log(this)
}
HTMLCollection.prototype.log = log
HTMLElement.prototype.log = log
NodeList.prototype.log = log
Node.prototype.log = log

const lista = document.querySelector('div ul')
lista.parentNode.log()
lista.childNodes.log()

const primeiro = lista.firstChild
primeiro.log()
primeiro.nextSibling.log()

const ultimo = lista.lastChild
ultimo.log()
ultimo.previousSibling.log()
