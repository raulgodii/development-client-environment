// 1 TWO ARGUMENTS
var sum = (num1, num2) => num1+num2;
document.write("the answer to everything is: " + sum(40,2) + "<br>");

// 2 ONE ARGUMENT
var stringLength = (str) => document.write(`the length of "${str}" is: ` + str.length + "<br>");
stringLength("Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu");

// 3 ONE ARGUMENT, pt.2
var stringLength = (str) => {
    let length = str.length;
    document.write(`the length of "${str}" is:` + length + "<br>");
    return str.length;
}
stringLength("willynilly");

// 4 ONE ARGUMENT
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
var showAlert = (name) =>{
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}
showAlert("you ball of fluff")

// 5 NESTED FUNCTIONS
var oneTwoThreeRotate = () => {
    Array.prototype.slice.call( document.querySelectorAll('div,p,span,img,a,body')).map(tag => tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)'
    )
}

oneTwoThreeRotate();

// 8 SYNTAX WONKY
let eye = "eye";
const fire = () =>{
    return `bulls-`;
}

// 9 REFACTOR
var fibonacci = (n) => {
        if (n < 3) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
