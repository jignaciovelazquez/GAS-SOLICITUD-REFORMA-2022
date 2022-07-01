function doGet() {
  var html = HtmlService.createTemplateFromFile('Index.html').evaluate()
  .setTitle("Reformas")
  .setFaviconUrl("https://cdn.iconscout.com/icon/free/png-512/r-characters-character-alphabet-letter-36029.png");
  return html

}

function buscarID(id){
  const libro = SpreadsheetApp.openById("1iyba6EH-qooC6mA3jMy1NDFpf42bwcx1Uip-tGwsvT4");
  const Hoja = libro.getSheetByName("GESTIONES");
  const Hoja2 = libro.getSheetByName("Online");


  var UltimaFila1 = Hoja.getLastRow();
  var UltimaFila2 = Hoja2.getLastRow();



  
  for(i=1;i<=UltimaFila1;i++){
    if (Hoja.getRange(i,1).getValue()==id){
      let dir = Hoja.getRange(i,3).getValue();
      let nod = Hoja.getRange(i,2).getValue();
      return [nod,dir];
    }
  }
  for(i=1;i<=UltimaFila2;i++){
    if (Hoja2.getRange(i,3).getValue()==id){
      let dir = Hoja2.getRange(i,5).getValue();
      let nod = Hoja2.getRange(i,4).getValue();
      return [nod,dir];
    }
  }
  return ["",""]
}

function Escribir(id,formato){
  const libro = SpreadsheetApp.openById("1iyba6EH-qooC6mA3jMy1NDFpf42bwcx1Uip-tGwsvT4");
  const Hoja = libro.getSheetByName("RELEVOS");  
  
  for(i=1;i<=500;i++){
    if (Hoja.getRange(i,1).getValue()==id){
      Hoja.getRange(i,12).setValue(formato);
      return
    }
  }
}