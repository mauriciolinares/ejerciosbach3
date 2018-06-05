let string;

const palindromo = (string) => {
    let stringSpace = string.replace(/\s/g,"");
    stringReverse = stringSpace.split("").reverse().join("");
    if(stringSpace === stringReverse){
        return console.log("Tu palabra es un palíndromo");
    }
    return console.log("Vuelve a intentarlo, tu palabra es fea :(");
};

palindromo("adriana");
palindromo("ana");
palindromo("anita lava la tina");
