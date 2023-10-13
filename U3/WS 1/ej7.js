function fact(n){
    if(n==0){
        return 1;
    }
    
    return n*fact(n-1);
}

document.write("<table border='1'>");
    for(i=1; i<=10; i++){
        document.write("<tr>");
            document.write("<td>fact(" + i + ")</td>");
            document.write("<td>" + fact(i) + "</td>");
        document.write("</tr>");
    }
document.write("</table>");