function vistaSimple(idDiv, arrayLibros){
    document.getElementById(idDiv).innerHTML = "";
    
    ul = document.createElement("ul");
    
    for(let libro of arrayLibros){
        li = document.createElement("li");
        li.innerHTML = libro.titulo;
        ul.appendChild(li);
    }

    document.getElementById(idDiv).appendChild(ul);
}

function vistaCompleja(idDiv, arrayLibros){
    document.getElementById(idDiv).innerHTML = "";
    
    table = document.createElement("table");
    
    for(let libro of arrayLibros){
        tr = document.createElement("tr");
        table.appendChild(tr);
        td = document.createElement("td");
        td.innerHTML = libro.titulo;
        tr.appendChild(td);
    }

    document.getElementById(idDiv).appendChild(table);
}