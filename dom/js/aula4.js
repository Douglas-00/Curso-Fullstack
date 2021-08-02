/*function log() {
    console.log(this)
}
HTMLCollection.prototype.log = log
HTMLElement.prototype.log = log
NodeList.prototype.log = log
Node.prototype.log = log

const lista = document.querySelector('div ul')
lista.parentNode.log()*/

document.querySelectorAll('div ul li').log()