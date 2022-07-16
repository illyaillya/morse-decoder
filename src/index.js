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
};

function decode(expr) {  
    count = 1;
    let tt = '';
    for(let i=0; i<expr.length-1; i+=2){
        //console.log(i, expr.length)
        
        if(expr[i] === '1' && expr[i+1] === '0' ){
            tt +='.';                     
        } else if(expr[i] === '1' && expr[i+1] === '1'){
            tt +='-';                    
        } else if (expr[i] === '0' && expr[i+1] === '0'){
            tt +=' ';                    
        }
       
        if (expr[i] === '*') {        
            
            tt += ' ';          
        }
        if(count === 5){
            tt += ',';
            count = 0 
        }
        count++
        //console.log(count)
    }

    const decodeLetter = letter => {      
      
        return MORSE_TABLE[letter.trim()]
        
      }
      
      const decodeWord = word => {
        //console.log(word)      
        return word.split(',').map(decodeLetter).join('');
      }
      
      const decodeMorse = morseCode => {
        return morseCode.trim().split('     ').map(decodeWord).join(' ');
      }    

        return decodeMorse(tt)
}

module.exports = {
    decode
}

console.log(decode('10111111111111101010001110101000101011101010111111101010101011111111101110101010'))