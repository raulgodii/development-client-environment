//a
document.write(Math.round(Math.random()) + "<br>");

//b
document.write(Math.round(Math.random()*(200-100)+100) + "<br>");

//c
min = parseInt(prompt("Introduce el valor minimo"));
max = parseInt(prompt("Introduce el valor maximo"));
document.write(Math.round(Math.random()*(max-min)+min));