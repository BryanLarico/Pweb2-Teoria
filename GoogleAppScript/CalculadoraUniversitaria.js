function PromedioSemestral() {
  var documento = SpreadsheetApp.openById("1q5-WsgvI2TwaF1LMTWDI7My2fcOwPblJ8WEPa1tcKEA");
  var hojas = documento.getSheets();
  var datos = hojas[0].getDataRange().getValues();
  
  for(i in datos){
    var columna = datos[i];
    var promedioFinal = 0;
    for(var j = 1; j < 12; j = 2 + +j){
      var promedio = columna[j] * columna[1 + +j] / 20;
      var promedioFinal = promedioFinal + promedio;
    }
    var puntajeAcumulado = promedioFinal * 20 / 100;
    hojas[0].getRange(1 + +i,14).setValue(promedioFinal);
    hojas[0].getRange(1 + +i,15).setValue(puntajeAcumulado);
  }
  SpreadsheetApp.flush();
}