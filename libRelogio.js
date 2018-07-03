var tempo
function formataRelogio(tempo){
    var tempoEmHorasFloat = tempo/60
    var horas = parseInt(tempoEmHorasFloat)
    var minutos = Math.ceil((tempoEmHorasFloat - horas) * 60)
    return horas.toString().padStart(2,0) + ":" + minutos.toString().padStart(2,0)
}
