document.write(`<table style="border-collapse:collapse; text-align: center;" border="1">`);

document.write(`<th style="padding:5px">Num Asc.</th>`);
document.write(`<th style="padding:5px; ">Seno</th>`);

    for(i=0; i<11; i++){
        document.write("<tr>");
        document.write(`<td style="padding:5px">${i}</td>`);
        document.write(`<td style="padding:5px; ">` + Math.sin(i).toFixed(2) +`</td>`);
        document.write("</tr>");
    }

document.write("</table>");