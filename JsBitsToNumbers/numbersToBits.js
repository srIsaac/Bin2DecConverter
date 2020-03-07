let botaoNumbersToBits = $('#botaoNumbersToBits');
let numeroConvertido = $('#numeroConvertido');
let inputNumero = $('#inputNumero');

botaoNumbersToBits.addEventListener('click', function(event){
    
    event.preventDefault();

    var valorInputNumero = inputNumero.value;
    
    let arrayValorBit = [];

    for(let i = 1; i <= valorInputNumero; i = i * 2){
         arrayValorBit.push(i);
    }

    let arrayConvertido = arrayValorBit.reverse().map(function(item){
        if(valorInputNumero >= item){
            valorInputNumero = valorInputNumero - item;
            return 1;
        }
        return 0;
    });

    arrayConvertido = arrayConvertido.join('');
    numeroConvertido.textContent = arrayConvertido;
});