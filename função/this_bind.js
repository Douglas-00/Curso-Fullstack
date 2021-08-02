function pessoa() {
    this.idade = 0
    setInterval(function() { // set interval dispara outra função 
        this.idade

    } /*.bind(this)*/ , 1000)
    clearInterval(this.idade);
}