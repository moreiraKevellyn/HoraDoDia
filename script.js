function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora <12){
        //Bom Dia
        img.src = "img/img-redonda.png"
        document.body.style.background = "#D7DE69"
    } else if (hora >= 12 && hora < 18 ) {
        //Boa Tarde
        img.src ="img/tarde-redonda.png"
        document.body.style.background = "#CC8127"
    } else {
        //Boa Noite
        img.src = "img/noite-redonda.png"
        document.body.style.background = "#083285"
    }
}