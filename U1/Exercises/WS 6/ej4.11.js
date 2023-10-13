var col = parseInt(prompt("Introduce el numero de columnas"));
var al = parseInt(prompt("Introduce la altura de la tabla en pixeles"));
var an = parseInt(prompt("Introduce la anchura de la tabla en pixeles"));

document.write("<table style=\"border-collapse:collapse\" border=\"2\" border-color=\"black\" cellspacing=\"2\" bgcolor=\"white\">" );
document.write("<tr bgcolor=\"white\" height=\"" + al + "\">");

for(i=0; i<col; i++){
    document.write("<td " + "width=\"" + an + "\"" + ">&nbsp;</td>");
}

document.write("</tr>");
document.write("</table>");
