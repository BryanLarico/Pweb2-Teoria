function PromedioSemestral() {
  var documento = SpreadsheetApp.openById("1q5-WsgvI2TwaF1LMTWDI7My2fcOwPblJ8WEPa1tcKEA");
  var hojas = documento.getSheets();
  var datos = hojas[0].getDataRange().getValues();

  for(i in datos){
    var columna = datos[i];

    var promedio1 = columna[1] * columna[2] / 20;
    var promedio2 = columna[3] * columna[4] / 20;
    var promedio3 = columna[5] * columna[6] / 20;
    var promedio4 = columna[7] * columna[8] / 20;
    var promedio5 = columna[9] * columna[10] / 20;
    var promedio6 = columna[11] * columna[12] / 20;

    var promedioFinal = promedio1 + promedio2 + promedio3 + promedio4 + promedio5 + promedio6;
    var puntajeAcumulado = promedioFinal * 20 / 100;
    hojas[0].getRange(1 + +i,14).setValue(promedioFinal);
    hojas[0].getRange(1 + +i,15).setValue(puntajeAcumulado);
  }
  SpreadsheetApp.flush();
}