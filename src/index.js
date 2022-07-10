const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*':      ' ',
};
function decode(expr) {
    let result = '';
    if (expr.length % 10 !== 0) {return 0};

    for(let i = 0; i < expr.length; i +=10) {
        let morseLetter = '';
        if (expr[i] === '*') {
            morseLetter += '*';
        } else {
            for(let k = 0; k < 10; k +=2) {
                if (expr[i + k] === '1') {
                    if (expr[i + k + 1] === '1') {
                        morseLetter += '-';
                    } else {
                        morseLetter += '.';
                    }
                }
            }
        }
        result += MORSE_TABLE[morseLetter];
    }
    return result;
}

module.exports = {
    decode
}