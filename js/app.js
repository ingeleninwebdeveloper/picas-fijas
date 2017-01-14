$(document).ready(function(){

	

	var numero;
	
 			
var numero="";
var cifra=[];
for(a=0;a<4;a++){
	cifra[a]=parseInt(Math.random()*10);

	for(aa=0;aa<a;aa++){
		if(cifra[a]==cifra[aa]){a-=1;break}

	}
}
for(a=0;a<4;a++){
	numero+=cifra[a];
}

console.log(numero)



$(document).keyup(function(e) {

if(e.which == 13) {



			var position = 0;
			var coincide = 0;

			var n = $("#num").val();
			if (n != null) {
      $(aviso).html(" No puede ingresar numeros iguales"); 
    }

			if (n.length != 4 )
			{


				$(aviso).html("debe ingresar un numero de 4 cifras")
				

			}
			
            if(n.length == 4) {

            	for (var i=0; i<n.length; i++)
            	{

            		for (var x=0; x<numero.length; x++)

            			if (n[i] == numero [x]){
            				coincide=coincide+1;
            				
            				if (x == i)

            				{  

            					position=position+1;


            				}
            			}



            	}


			$("#tabla").append("<tr><td>"+ n + "</td><td>" + coincide + "</td> <td>" + position +  " </td></tr>")
			
            	console.log(coincide)
            	 }

            	 if(coincide && position == 4)

            	 {
            	 	$("#myModal").modal();
            	 }
            
        }

      


});



});