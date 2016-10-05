(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
      fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(){
	if(!checkImportAtt()){
	  var script = document.createElement('script'),
	  	  components = document.getElementsByTagName('link')[1],
	  	  parent = components.parentNode, timeout = 100, poll;

	  script.src = 'bower_components/webcomponentsjs/webcomponents.min.js';
	  parent.insertBefore(script, components);

	  poll = function () {
		  setTimeout(function () {
		    timeout--;
		    if (typeof MYAPP !== 'undefined') {
		      console.log('components is loaded!');
		    }
		    else if (timeout > 0) {
		      poll();
		    }
		    else {
		      console.log('components is failed!');
		    }
		  }, 100);
	  };

		poll();
	}

})();

function checkImportAtt(){
	return ('import' in document.querySelector('link[rel="import"]'));
}

