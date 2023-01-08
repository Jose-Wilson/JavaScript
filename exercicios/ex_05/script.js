function tab() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('ERRRO! Por favor Digite um Número!')        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tan${c}`
            tab.appendChild(item)
            c ++
        }
    }

}