//a
fechaHoy = new Date();

//b
fecha85 = new Date(fechaHoy);
fecha85.setDate(85);

//c
fecha187 = new Date(fechaHoy);
fecha187.setDate(-187);

//d
year = fecha85.getFullYear();
fecha85.setFullYear(year+2);

//e
fecha187.setDate(-1);

//f
fechaResto = new Date(fecha85-fecha187);