var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var dia = data.getUTCDay()
var dia_semana = ''
var fi = data.getTime()
var resp = document.getElementById("resp")
var horario = ""
var data_dia = data.getDate()
var data_mes =data.getMonth()
var data_mes2 = data_mes + 1
var data_ano = data.getFullYear()



if (hora >= 0 && hora < 6){
    
    var horario = "Boa madrugada"
    resp.innerHTML = (`<img id="paisagem" src="imagens/foto-madrugada.png" alt="imagem da madrugada">`)
    window.document.body.style.backgroundImage = "linear-gradient(to right, black, #023661, black, #023774)"
}

else if (hora >= 6 && hora < 12){
    var horario = "Bom dia"
    resp.innerHTML = (`<img id="paisagem" src="imagens/bom-dia.png" alt="imagem de bom dia">`)
    window.document.body.style.backgroundImage = "linear-gradient(to right, rgb(255, 246, 115), #ffffff, rgb(58, 204, 248), #ebd61f, #68c3ff)"
}

else if (hora >= 12 && hora < 18){
    var horario = "Boa tarde"
    resp.innerHTML = (`<img id="paisagem" src="imagens/foto_tarde.png" alt="imagem de boa tarde">`)
    window.document.body.style.backgroundImage = "linear-gradient(to right, rgb(248, 36, 202),#041d63, #21e6dc, rgb(10, 149, 192), #7c038b )"
}

else if (hora >= 18){
    var horario = "Boa noite"
    resp.innerHTML = (`<img id="paisagem" src="imagens/foto-noite.png" alt="imagem de boa noite">`)
    window.document.body.style.backgroundImage = "linear-gradient(to right,black, rgb(14, 15, 80),#004e72, #000000, rgb(18, 104, 131), #373186)"
}


switch (dia) {
    case 0:
        var dia_semana = "Domingo"
        break

    case 1:
        var dia_semana = "Segunda-feira"
        break

    case 2:
        var dia_semana = "Terça-feira"
        break

    case 3:
        var dia_semana = "Quarta-feira"
        break

    case 4:
        var dia_semana = "Quinta-feira"
        break

    case 5:
        var dia_semana = "Sexta-feira"
        break

    case 6:
        var dia_semana = "Sábado"
        break

    default: 
    console.log(`[ERRO] DIA INVÁLIDO`)
    break  
}
resp.innerHTML += (`<p id="hora">${hora}:${minutos}<p>`)
resp.innerHTML += (`<p>Muito ${horario}</p> `)
resp.innerHTML += (`<p>Hoje é ${dia_semana} - ${data_dia}/${data_mes2}/${data_ano}</p>`)
