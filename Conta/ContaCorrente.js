import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{ 
    static numeroDeContas = 0; //atributo estático
    //# representa que é um campo privado, mas ainda não foi concluído, a comunidade costuma utlizar (_underline para demonstrar que trata-se de um campo privado, mas não é).
    //#saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1; //será consultado a cc como um todo e não daquela classse específica.
    }

    //sobreescrevendo o comportamento de sacar : sobreescrita de métodos
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa);
    }
  
}