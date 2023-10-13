function isOdd(x){
    if(x%2!=0)
        return true;
    else
        return false;
}

function inRange(x, min, max){
    if(x>=min && x<=max)
        return true;
    else
        return false;
}

function getBiggestNumber(numbers){
    n=numbers[0];
        for(i=0; i<numbers.length; i++){
            if(numbers[i]>n)
                n = numbers[i];
        }
    return n;
}

function getPercentage(number, percentage){
    return (number*(percentage*0.01));
}

function getRandomColorSequence(colors, length){
    n = [];
    
    for(i=0; i<length; i++){
        n.push(colors[Math.floor(Math.random() * colors.length)]);
    }

    return n;
}

function getRockPaperScissor(){
    n = ["rock", "paper", "scissor"];

    return (n[Math.floor(Math.random()*n.length)]);
}

function getRockPaperScissorRandomSequence(length){
    n = ["rock", "paper", "scissor"];
    r =[];

    for(i=0; i<length; i++){
        r.push(n[Math.floor(Math.random() * n.length)]);
    }

    return r;
}

function filterNumbersGreaterThan(numbers, filter){
    res = []
    
    for(i=0; i<numbers.length; i++){
        if(numbers[i]<filter){
            res.push(numbers[i]);
        }
    }
    
    return res;
}

function getFactorial(x){
    if(x==0){
        return 1;
    }
    return x*getFactorial(x-1);
}

function areArraysEqual(a, b){
    return a.toString() === b.toString();
}

function toHackerSpeak(text){
    r = "";
    for(i=0; i<text.length; i++){
        c=text[i];
        if(c=='a')
            r+=4;
        else if(c=='e')
            r+=3;
        else if(c=='i')
            r+=1;
        else if(c=='o')
            r+=0;
        else if(c=='s')
            r+=5;
        else
            r+=c;
    }       
    return r;
}

function getFileExtension(file){
    r=file.split(".");

    return r[r.length-1];
}

function flatArray(arr){
    r=[];
    for(i=0; i<arr.length; i++){
        r.push(arr[i]);
    }
    return r;
}

function removeDuplicates(arr){
    r=[];
    for(i=0; i<arr.length; i++){
        if(!r.includes(arr[i]))
            r.push(arr[i]);
    }
    return r;
}

function countLetter(letter, text){
    r = 0;
    for(i=0; i<text.length; i++){
        if(text[i]==letter)
            r++;
    }       
    return r;
}

function canPlay(hand, face){
    faceArr = face.split(" ");
    for(i=0; i<hand.length; i++){
        handArr = hand[i].split(" ");
        if(handArr[0]==faceArr[0] ||handArr[1]==faceArr[1])
            return true;
    }
    return false;
}

function removeWords(str, words){
    strArr = str.split(" ");
    r = "";
    for(i=0; i<strArr.length; i++){
        exists = false;
        for(j=0; j<words.length; j++){
            if(strArr[i]==words[j]){
                exists = true;
                j=words.length;
            }
        }
        if(!exists){
            r+=strArr[i] + " ";
        }
    }

    return r;
}

function getRange(a, b, inclusive=true){
    if(b<a){
        c = a;
        a = b;
        b = c;
    }

    if(inclusive){
        min=a;
        max=b;
    }
    else{
        min=a+1;
        max=b-1;
    }

    r = [];

    while(min<=max){
        r.push(min);
        min++;
    }

    return r;
}

document.write("<b>isOdd(3)</b>" + " returns: " + isOdd(3) + "<br>");
document.write("<b>inRange(2, -4, 10)</b>" + " returns: " + inRange(2, -4, 10) + "<br>");
document.write("<b>getBiggestNumber([3, 8, 2, 1, 10])</b>" + " returns: " + getBiggestNumber([3, 8, 2, 1, 10]) + "<br>");
document.write("<b>getPercentage(200, 10)</b>" + " returns: " + getPercentage(200, 10) + "<br>");
document.write("<b>getRandomColorSequence([\"red\", \"blue\", \"green\"], 4)</b>" + " returns: " + getRandomColorSequence(["red", "blue", "green"], 4) + "<br>");
document.write("<b>getRockPaperScissor()</b>" + " returns: " + getRockPaperScissor() + "<br>");
document.write("<b>getRockPaperScissorRandomSequence(4)</b>" + " returns: " + getRockPaperScissorRandomSequence(4) + "<br>");
document.write("<b>filterNumbersGreaterThan([3, 8, 12, 13, 1, 7, 4], 7)</b>" + " returns: " + filterNumbersGreaterThan([3, 8, 12, 13, 1, 7, 4], 7) + "<br>");
document.write("<b>getFactorial(4)</b>" + " returns: " + getFactorial(4) + "<br>");
document.write("<b>areArraysEqual([1, 4], [1, 4])</b>" + " returns: " + areArraysEqual([1, 4], [1, 4]) + "<br>");
document.write("<b>toHackerSpeak(\"I'm a hacker now\")</b>" + " returns: " + toHackerSpeak("I'm a hacker now") + "<br>");
document.write("<b>getFileExtension(\"imagen.jpg\")</b>" + " returns: " + getFileExtension("imagen.jpg") + "<br>");
document.write("<b>flatArray([[1, 5, 4], [3, 10], [2, 5]])</b>" + " returns: " + flatArray([[1, 5, 4], [3, 10], [2, 5]]) + "<br>");
document.write("<b>removeDuplicates([4, 5, 10, 4, 10, 2])</b>" + " returns: " +  removeDuplicates([4, 5, 10, 4, 10, 2]) + "<br>");
document.write("<b>countLetter(\"a\", \"javascript\")</b>" + " returns: " + countLetter("a", "javascript") + "<br>");
document.write("<b>canPlay([\"yellow 3\", \"yellow 5\", \"red 8\"], \"red 2\")</b>" + " returns: " + canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") + "<br>");
document.write("<b>canPlay([\"yellow 3\", \"red 8\"], \"green 2\")</b>" + " returns: " + canPlay(["yellow 3", "red 8"], "green 2") + "<br>");
document.write("<b>removeWords(\"This is a really bad test\", [\"really\", \"bad\"])</b>" + " returns: " + removeWords("This is a really bad test", ["really", "bad"]) + "<br>");
document.write("<b>getRange(5, 10)</b>" + " returns: " + getRange(5, 10) + "<br>");
document.write("<b>getRange(3, -2)</b>" + " returns: " + getRange(3, -2) + "<br>");
document.write("<b>getRange(-5, -10, false)</b>" + " returns: " + getRange(-5, -10, false) + "<br>");