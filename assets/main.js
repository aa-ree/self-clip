(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
      fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkImportAtt(){
    return ('import' in document.querySelector('link[rel="import"]'));
}
if(!checkImportAtt()){
  alert("Sorry, your browser not supporting import attribute without polyfill.");
}
