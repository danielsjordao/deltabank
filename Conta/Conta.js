//Classe Abstrata: ela só funciona para ser herdada, uma classe abstrata nunca pode ser construída diretamente, 
//nunca podemos dar um new nela, nunca vai ter uma instância dessa própria classe, mas ela pode ser herdada, 
//assim como temos nossa ContaCorrente que herda daquela classe abstrata chamada Conta. 

export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata");
        }        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;       
                
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }        
    }

    get cliente(){
        return this._cliente;
    }
   
    get saldo(){
        return this._saldo;
    }

    //Método Abstrato    
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato")
        
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;    
        if (this._saldo >= valorSacado){ //acessar o saldo da própria conta-corrente a partir da qual chamamos o método, ou seja, "esta" conta. Para isso, usamos a palavra reservada this ("este(a)" em inglês).
            this._saldo -= valorSacado; //Assim, verificaremos e o saldo da conta-corrente é maior que o valor passado e, em caso positivo, subtrairemos esse valor do saldo desta mesma conta-corrente. A essa lógica atribuímos o nome de sacar().
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    }
    //Uma maneira de melhorarmos essa legibilidade é fazermos o chamado "early return" (ou "retorno antecipado", em tradução livre). Essa técnica consiste em verificarmos todas as situações indesejadas primeiro. Por exemplo, no método depositar() não queremos que o valor recebido seja menor ou igual a zero. Caso isso aconteça, simplesmente usaremos a instrução return para pararmos a execução do código.                            
    //Dessa maneira, mantemos o código onde a operação realmente é realizada no mesmo nível de indentação da condicional, e conseguimos analisar facilmente que, caso a condição seja verdadeira, sairemos da função sem executá-la. Se todas as verificações passaremos corretamente, o código será executado ao final. 
    transferir(valor, conta){       
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}