function formataRelogio( tempoEmMinutos ){
    var diasEmFloat = tempoEmMinutos / 1440
    var dias = parseInt(diasEmFloat)
    var minutosRestantes = tempoEmMinutos - (dias * 1440)
    var tempoEmHorasFloat = minutosRestantes/60
    var horas = parseInt(tempoEmHorasFloat)
    var minutos = Math.ceil((tempoEmHorasFloat - horas) * 60)
    return dias + " dia(s) " + horas.toString().padStart(2,0) + ":" + minutos.toString().padStart(2,0)
}
