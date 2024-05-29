function verificar() {
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //Elemento
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescenteg.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancaf.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'adolescente.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        window.document.getElementById('res').style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // Para fazer aparecer um elemento
    }
}
