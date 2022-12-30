let amigo = {nome: 'josé',
 sexo: 'M', 
 peso:85.5, 
engordar(p=0) {
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(-17)
console.log(`${amigo.nome} peso ${amigo.peso}Kg`)
