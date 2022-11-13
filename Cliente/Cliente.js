export class Cliente{ //Molde: nas classes chamamos de campos, atributos ou propriedades

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;        
    }

    autenticar(){
        return true;
    }
}
