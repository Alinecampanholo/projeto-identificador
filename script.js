function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados informados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade <=10){
                img.setAttribute('src' , 'menino.png')
            } else if(idade <=21){
                img.setAttribute('src' , 'moço.png')
            } else if(idade <60){
                img.setAttribute('src' , 'homem.png')
            } else{
                img.setAttribute('src' , 'idoso.png')
            }
        
        } else if(fsex[1].checked){
            genero = 'mulher'
            if(idade <=10){
                img.setAttribute('src' , 'menina.png')
            } else if(idade <=21){
                img.setAttribute('src' , 'moça.png')
            } else if(idade <60){
                img.setAttribute('src' , 'mulher.png')
            } else{
                img.setAttribute('src' , 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}