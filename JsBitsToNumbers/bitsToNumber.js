let $ = document.querySelector.bind(document);

let botaoBitsToNumbers = $('#botaoBitsToNumbers');
let binarioConvertido = $('#binarioConvertido');

botaoBitsToNumbers.addEventListener('click', function(event){

    event.preventDefault();

    let numeroBinario = $('#inputBinario').value;
    binarioConvertido.textContent = transformaBinarioEmNumero(numeroBinario);
});


function transformaBinarioEmNumero(numeroBinario){    

    let numerosBinarios = geraArrayInputNumeros(numeroBinario);

    var binarioConvertido = transformaArrayEmBinario(numerosBinarios);

    return binarioConvertido;
}


function geraArrayInputNumeros(numeroBinario){
    var numerosBinarios = numeroBinario.split('').map(function(item){
        //Transforma numeros do input para uma array de Inteiros
        return parseInt(item, 10);
    });
    
    return numerosBinarios;
}


function transformaArrayEmBinario(arrayNumerosBinarios){
    
    let valorBit;
    let total = 0;

    arrayNumerosBinarios.reverse().forEach(function(binario, index){
        if(index == 0){
            valorBit = 1;
        }
        else{
            valorBit = valorBit * 2;
        }

        if(binario != 0){
            total += valorBit;
        }
    });

    return total;
}