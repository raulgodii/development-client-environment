// Over an array with names, find all entries whose firstname starts with 'J', create projection combined of only the initials of the name and then sort alphabetically
function filterJnames(...arr){
    res = arr.filter(element => element.toUpperCase().startsWith("J"));

    res = res.map(element => {
        arrSplit = element.split(" ");
        return arrSplit.map(part => part[0]).join("").toUpperCase();
    });

    res.sort();

    return res;
}