function first(opciones){

	var string = prompt("Por favor introduzca una frase");

	var charArr = []; /*arreglo de caracteres*/
	var arrCipher = []; /*arreglo cifrado*/
	var arrDesc = []; /* arrego descifrado*/
	var n = 33; /*la cantidad de posiciones a correr a la derecha*/


if (string === ""){ /*valida si esta vacio*/
  alert ("El campo no puede estar vacio!, por favor introduce una frase");
}
else {
charArr = string.split('', string.length); /*convierte string en Array*/
  for (var i = 0; i < charArr.length; i++){
      var x = string.charCodeAt(charArr[i]); /* asigna en x el codigo ASCII del caracter*/
      var code = (x - 65 + n) % 26 + 65;
      var charCiph = String.fromCharCode(code);
      arrCipher.push(charCiph);
      console.log (i);
      console.log (charArr[i]);
      
    }
}

var newString = '';
/ newString = charCiph.join('');
console.log (arrCipher);
console.log (charArr);