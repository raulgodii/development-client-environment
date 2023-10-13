// FIND LARGEST NUMBER
function findLargestNumber(...arr){
    res = arr[0];
    arr.forEach(element => {
        if(element>res) res = element;
    });
    return res;
}

// FIND LONGEST STRING
function findLongestString(...str){
    res = [];
    str.forEach(element => {
        if(element.length>res.length) res = element;
    });
    return res;
}

// FIND EVEN NUMBERS
function findEvenNumbers(...arr){
    res = arr.filter(element => element%2==0);
    return res;
}

// FIND ODD NUMBERS
function findEvenNumbers(...arr){
    res = arr.filter(element => element%2!=0);
    return res;
}

// FIND WORDS THAT CONTAIN IS
function findWordsCotainIs(...str){
    res = str.filter(element => element.includes("is"));
    return res;
}

// ASSERT ALL NUMBERS ARE DIVISIBLE BY THREE
function divisibleThree(...arr){
    res = arr.filter(element => element%3==0);
    return res;
}

// ZIP TWO ARRAYS TOGETHER
function zipTwoArrays(a, b){
    return a.concat(b);
}

// SORT JOINED ARRAY FROM SMALLEST TO LARGEST
function joinAndSort(arr1, arr2){
    return (arr1.concat(arr2)).sort((a, b) => a-b);
}

// REMOVE THE FIRST WORD IN THE ARRAY
function removeFirstWord(...arr){
    arr.shift();
    return arr;
}

// PLACE A NEW WORD AT THE START OF THE ARRAY
function placeNewWord(...arr){
    arr.unshift("New Word");
    return arr;
}