$(document).ready(function(){
  $("#submit").click(function(){
    $.ajax({
      //url : 'codePostal.php', // Ressource ciblÃ©e cÃ´tÃ© serveur
        url : 'http://infoweb-ens/~jacquin-c/codePostal/codePostal.php',
          type : 'GET',
          dataType : 'json', //Le type de donnÃ©es Ã  recevoir.
          jsonp : "jsoncallback",
		  data : 'commune=' + $('#commune').val() + "&format=json", //$_GET['CP'] au niveau serveur
          success : function(codeHtmlSucces, statut){
				$("ul").text("");
				for(var i = 0 ; i < codeHtmlSucces.length ; i++){
                  $("ul").append("<li>" + codeHtmlSucces[i].CP + "</li>");
				}
				
          }, error : function(resultat, statut, erreur){
          }, complete : function(resultat, statut){
          }
    });
  });
});
