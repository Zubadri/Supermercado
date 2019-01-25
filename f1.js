//Especificar en Load Type: Bottom of head
var cont=0;
var cer=0;
var pes=0;
var car=0;
var cong=0;
var verd=0;
//Paso 0. Creamos otra variable global para controlar los nuevos input
var contInput=0;
function eliminar_parrafo (){
    var idparrafo="p"+cont;   //obtener el id del parrafo a borrar: p1,p2,etc.
    var parrafo = document.getElementById(idparrafo);
    var padre = parrafo.parentNode;    
    padre.removeChild(parrafo);        
	cont--;                            
}
function annadir_parrafo (){
    cont++;                            
    var parrafo = document.createElement("p");  
	parrafo.innerHTML="Bienvenido a nuestro sitio web - " + cont;
	parrafo.setAttribute("id","p"+cont);       
	document.getElementsByTagName("body")[0].appendChild(parrafo); 
}
//Paso 1. Nueva función para agregar un input nuevo con su label en su fieldset
function anadir_inputTextVerd(){
	verd++;
	contInput++;
	//Cada input tiene un label asociado
	var label = document.createElement("label");  
	label.innerHTML="Verdura " + verd;
	label.setAttribute("for","hijo"+contInput);
	label.setAttribute("id","labelHijo"+contInput);       
	document.getElementById("carro").appendChild(label);    
    var input = document.createElement("input");  
	input.setAttribute("id","hijo"+contInput);       
	document.getElementById("carro").appendChild(input);
}
function anadir_inputTextCong(){
	cong++;
	contInput++;
	//Cada input tiene un label asociado
	var label = document.createElement("label");  
	label.innerHTML="Congelado " + cong;
	label.setAttribute("for","hijo"+contInput);
	label.setAttribute("id","labelHijo"+contInput);       
	document.getElementById("carro").appendChild(label);    
    var input = document.createElement("input");  
	input.setAttribute("id","hijo"+contInput);       
	document.getElementById("carro").appendChild(input);
}
function anadir_inputTextCar(){
	car++;
	contInput++;
	//Cada input tiene un label asociado
	var label = document.createElement("label");  
	label.innerHTML="Carne " + car;
	label.setAttribute("for","hijo"+contInput);
	label.setAttribute("id","labelHijo"+contInput);       
	document.getElementById("carro").appendChild(label);    
    var input = document.createElement("input");  
	input.setAttribute("id","hijo"+contInput);       
	document.getElementById("carro").appendChild(input);
}
function anadir_inputTextPes(){
	pes++
	contInput++;
	//Cada input tiene un label asociado
	var label = document.createElement("label");  
	label.innerHTML="Pescado " + pes;
	label.setAttribute("for","hijo"+contInput);
	label.setAttribute("id","labelHijo"+contInput);       
	document.getElementById("carro").appendChild(label);    
    var input = document.createElement("input");  
	input.setAttribute("id","hijo"+contInput);       
	document.getElementById("carro").appendChild(input);
}
function anadir_inputTextCer(){
	cer++;
	contInput++;
	//Cada input tiene un label asociado
	var label = document.createElement("label");  
	label.innerHTML= "Cereal " + cer;
	label.setAttribute("for","hijo"+contInput);
	label.setAttribute("id","labelHijo"+contInput);       
	document.getElementById("carro").appendChild(label);    
    var input = document.createElement("input");  
	input.setAttribute("id","hijo"+contInput);       
	document.getElementById("carro").appendChild(input);
}
//Paso 2. Ahora para eliminar los input
function eliminar_inputText(){
 	do{//Metemos todo en un bucle para que elimine todos los que se hayan podido crear
		var idInput="hijo"+contInput;
		var input = document.getElementById(idInput);
		var idLabel="labelHijo"+contInput;
		var label = document.getElementById(idLabel);
		
		var padre = input.parentNode;    
		padre.removeChild(input);
		var padre = label.parentNode; 
		padre.removeChild(label);
		contInput--;                     
	} while (contInput>0);
}
//Paso 3. Escuchar al evento
function agregarOEliminar(){
    if ((document.getElementById('estado').value == 1)
        /*|| (document.getElementById('estado').value == 2)
        || (document.getElementById('estado').value == 3)
        || (document.getElementById('estado').value == 4)*/){
         anadir_inputTextVerd(); 
         }
         else if(document.getElementById('estado').value == 2) {
            anadir_inputTextCong();
         }
         else if(document.getElementById('estado').value == 3) {
            anadir_inputTextCar();
         }
         else if(document.getElementById('estado').value == 4) {
            anadir_inputTextPes();
         }
         else if(document.getElementById('estado').value == 5) {
            anadir_inputTextCer();
        
    } else if (document.getElementById('estado').value == 0){
         eliminar_inputText();   
    }
}
/*function validar(){
	creo una variable de tipo booleano que en principio tendrá un valor true(verdadero),
	y que se convertirá en false(falso) cuando la condición no se cumpla
	var todo_correcto = true;

	/*El primer campo a comprobar es el del nombre. Lo traemos por id y verificamos
	la condición, en este caso, por ejemplo, le decimos que tiene que tener más de dos dígitos
	para que sea un nombre válido. Si no tiene más de dos dígitos, la variable todo_correcto
	devolverá false.
	if(document.getElementById('nombre').value.length < 0 ){
		todo_correcto = false;
	}
	/*Hacemos lo mismo con el campo dirección. En este caso le pediremos al usuario que
	introduzca al menos 10 caracteres.
	else if(document.getElementById('DNI').value.length < 0 ){
   		todo_correcto = false;
	}
	else if(document.getElementById('apellidos').value.length < 0 ){
		todo_correcto = false;
 }
 if(!todo_correcto){
	alert('Algunos campos no están correctos, vuelva a revisarlos');
	}
	
	return todo_correcto;
	}*/
