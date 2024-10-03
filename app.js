let
encyptInput = document.querySelector('#enc_input'),
encyptOutput = document.querySelector('#enc_output'),
decryptInput = document.querySelector('#dec_input'),
decryptOutput = document.querySelector('#dec_output');
const
numbers = [12, 14, 20, 21, 6, 9, 24, 17, 11, 23, 19, 5, 4, 15, 7, 8, 13, 16, 18, 1, 2, 0, 10, 25, 3, 22],
alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
code = ["f%4j", "&t3G", "@P9j", "q3(G", "1p$i", "#K1A", "wW^b", "!J1C", ")1Rr", "#Y^H", "01$e", "d1^L", "!#lz", "G#%T", "vH$o", "l^4S", "p%5e", "b0$N", "h&Jw", "3T*B", "*5ja", "8#4W", "!tJv", "i3%R", "5%$y", "v$&X"];
document.querySelector('#encrypt').addEventListener('click', () => {
    for (i of encyptInput.value) {
        for (j of alphabets) {
            if (i == j) {
                encyptOutput.value += code[numbers[alphabets.indexOf(j)]]
            }
        }
        if (i == ' ') {
            encyptOutput.value += " "
        }

    }
})
document.querySelector('#decrypt').addEventListener('click', () => {
    let decryptedData = '' , tempCode = '';
    for (let i = 0; i < decryptInput.value.length; i++) {
        if (decryptInput.value[i] === ' ') {
            decryptedData += ' ';
        } 
        else {
            tempCode += decryptInput.value[i];
            if (tempCode.length === 4) {
                let codeIndex = code.indexOf(tempCode);
                
                if (codeIndex !== -1) {
                    let alphabetIndex = numbers.indexOf(codeIndex);
                    decryptedData += alphabets[alphabetIndex];
                }
                tempCode = '';
            }
        }
    }
    decryptOutput.value = decryptedData;
});