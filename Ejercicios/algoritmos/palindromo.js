let frase;
    function comparar (frase) {
        let fraseMin = frase.replace(/\s+/g,'').toLocaleLowerCase();
        let palindromo = fraseMin.split("").reverse().join("");
        if(fraseMin === palindromo){
            console.log('Son igualitas!!!');
        }else{
            console.log('Ni se parecen');
        }
        
    }
comparar('Mira nomas como se ven');
comparar('Anita lava la tina');
comparar('Adan no calla con nada');