const visor = document.getElementById('visor')
let current = '0', prev='', op=null;

function atualizaVisor(){ 
    
    visor.textContent = current;
    console.log('current atualizaVisor', current)
}

function appendNumber(num){ //adicionar numero
    if(current === '' || current==='0') current = num;
    else current +=num
    
}

function deleteLast(){
    current = current.toString().slice(0,-1) || '0'
}

function clearAll() {
    current='0'; prev=''; op=null
}
2 % 4 === 0

function chooseOperation(operation){ //escolherOperador
    //se variavel current for vazia retorna nada
    if(current === '') return ;
    
    if(prev !== '') calculate();
    //var op = operation
    op=operation;
    prev = current;
    current ='';

    console.log('op',op, 'prev', prev, 'current', current)

}

function calculate(){
    let result;
    const a = parseFloat(prev), b = parseFloat(current);
    //isNaN = IsNotaNumber "é um não numero"
    console.log("valor a", a, "valor b", b)
    if(isNaN(a) || isNaN(b))return;
    switch(op){
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        //b !== 0 ? a / b verificando se 
        // a var b é diferente de 0
        case '/': result = b !== 0 ? a / b: 'Error'; break;
        case '%': result = (a % b);break;
        default: return;
    }
    current = result.toString()
    op = null; prev='';

    console.log("prev -> calculate", prev)
}
/*
querySelectorAll está pegando a class do html botões
e acesso o html button
*/
document.querySelectorAll('.botoes button').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    const val = btn.textContent;
    console.log('action ->', action);
    console.log('val ->', val);

    // ! ele nega uma lógica
    if(!action) appendNumber(val)
    else if(action ==='delete') deleteLast()
    else if(action === 'equals'){
    calculate();
    }else{
        chooseOperation({'+':'+', '-':'-', 'x':'*', '/':'/'}[val] || val)
    }
    
    
    atualizaVisor()


    
  });
});