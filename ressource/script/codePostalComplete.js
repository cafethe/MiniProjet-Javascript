$(document).ready(function(){
	var liste = [
    "Nantes",
    "Nancy",
    "Nanterre",
    "Paris",
    "Bordeaux"
	];

	$('#commune').autocomplete({
	source : liste,
    minLength : 3
    select : function(event, ui){ // lors de la selection d'une proposition
        $('div').append(ui.item); // on ajoute la description de l'objet dans un bloc
    }
	});

});
