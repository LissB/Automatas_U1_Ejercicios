//Todas las palabras que tengan una longitud de 7 o más letras.
let mensaje ="La biologia es la ciencia que estudia el origen, la evolucion y las caracteristicas de los seres vivos";
let newMensaje =mensaje.replace(/[a-z]{7,}/g, "");
console.log(newMensaje);

//Expresiones que NO terminen con una vocal
let mensaje2 ="la biologia se encarga de describir y explicar el comportamiento y las caracteristicas que diferencian a los seres vivos";
let newMensaje2 =mensaje2.replace(/[^aeiou]\b/g, " ");
console.log(newMensaje2);


//Las palabras que inicien con "M" donde la segunda letra sea una vocal
let mensaje3 ="Mrcoles mnacional Mar tecnologia";
let newMensaje3 =mensaje3.replace(/m|M(?![aeiou])/g, "");
console.log(newMensaje3);


//Expresiones encerradas en unas comillas 
let mensaje4 ='La palabra biología está formada por dos vocablos griegos: bios (“vida”) y logos (“estudio”)';
let newMensaje4 =mensaje4.replace(/[\“][a-z]{1,}[\”]/g, " ");
console.log(newMensaje4);


//Ip's
let mensaje5 ="la ip 196.184.1.20 y la ip 126.168.46.156 Esta no es una ip 126.168.46";
let newMensaje5 =mensaje5.replace(/\b[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\b/g, "");
console.log(newMensaje5);


//Horas
let mensaje6 ="Son las 108:54:25, 13:05, 5.30 12-30, 5:30, 7;45";
let newMensaje6 =mensaje6.replace(/(\b[0-9]{1,2}\:[0-9]{1,2}\:\d\d\b)|(\b[0-9]{1,2}\:\d\d\b)/g, " ");
console.log(newMensaje6);


//Telefonos
let mensaje7 ="Telefonos: 9851095623 985-122-43-12 985 124 56 23";
let newMensaje7 =mensaje7.replace(/(\b[0-9]{10}\b)|\b[0-9]{3}\-[0-9]{3}\-(\d\d)\-(\d\d\b)/g, "");
console.log(newMensaje7);


//Correos electrónicos
let mensaje8 ="Correos electrónicos: ingrid4_xooc@gmail.com ingridxooc@itsva.edu.mx lisset@hotmail.com y6";
let newMensaje8 =mensaje8.replace(/([a-zA-Z0-9_]{1,}\@[a-z]{1,}\.[a-z]{2,3}\.[a-z]{2,3})|([a-zA-Z0-9_]{1,}\@[a-z]{1,}\.[a-z]{2,3})/g, " ");
console.log(newMensaje8);
//(/[a-zA-Z0-9_]{1,}\@[a-z]{1,}\.\w\w\w/g, " ")

 
//Url's
let mensaje9 ="Url's: https://www.w3schools.com  https://www.maccosmetics.com.mx  https://www.google.com.mx/search?client=opera&q=lettering&sourceid=opera&ie=UTF-8&oe=UTF-8";
let newMensaje9 =mensaje9.replace(/[a-z]{4,5}\:\/\/[w]{3}\.[a-zA-Z0-9.=?%&$+/-]{1,}/g, " ");
console.log(newMensaje9);


//Código postal
let mensaje10 ="Código postal: 97785  97780 31050 777843";
let newMensaje10 =mensaje10.replace(/\b[0-9]{5}\b/g, " ");
console.log(newMensaje10);
