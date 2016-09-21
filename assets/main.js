function checkImportAtt(){
    return ('import' in document.querySelector('link[rel="import"]'));
}
      if(!checkImportAtt()){
        alert("Sorry, your browser not supporting import attribute without polyfill.");
      }
