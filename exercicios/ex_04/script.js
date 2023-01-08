function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var pas = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'        
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }        
        } else {
            // Contagem Regressiva
            for(let c = i; c >= f ; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }  
        res.innerHTML += ` \u{1F3c1}`   
    }
}