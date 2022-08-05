function doGet() {
  var html = HtmlService.createTemplateFromFile('Index.html').evaluate()
  .setTitle("Reformas")
  .setFaviconUrl("https://cdn.iconscout.com/icon/free/png-512/r-characters-character-alphabet-letter-36029.png");
  return html

}

