/*
Ser autenticável siginifica ter um método "autenticar"
Duck Type: em programação é a aplicação do teste do pato, como eles estão falando aqui. Se ele anda como um pato, se ele faz "quack" como um pato, ele deve ser um pato, no sentido de que não me interessa se ele é de verdade um pato, me interessa que ele anda como um pato e que ele faz "quack" como um pato. Se ele é um pato de verdade ou não, tanto faz.
Traduzindo isso para programação, não me interessa o tipo dele, me interessa o que aquele objeto consegue fazer. Se ele tem a presença de ter determinados métodos e propriedades. Dessa maneira que nós trabalhamos com o JavaScript, usando duck typing.
Não me interessa se ele é do tipo Cliente, do tipo Funcionario, do tipo ContaCorrente, me interessa se ele tem o método e a propriedade que eu quero utilizar, se ele tem aquilo, eu vou utilizar independentemente do tipo. Por isso nós falamos que é o duck typing, ele passa o teste do pato. Se ele tem a propriedade que eu quero usar, então eu vou usá-lo dessa maneira.
E o polimorfismo é essa ferramenta superimportante para orientação a objetos, para o nosso sistema, para conseguirmos tratar objetos diferentes economizando e reutilizando código de uma maneira bem legal.
Outro pilar muito importante da orientação a objetos é o encapsulamento, que vimos bastante no curso anterior, onde queremos proteger o máximo possível as propriedades e os atributos que são sensíveis à nossa classe. Vimos muito isso na nossa conta, no geral.
Numa conta eu quero proteger o cliente, eu quero proteger o saldo e eu tenho maneiras de fazer isso. Eu terei os meus assessores, como o get e o set, eu vou ter um método que está na linguagem do negócio e que faz o manuseio dessas propriedades internas no meu objeto, sem precisarmos expor isso para outras classes. Então encapsular o comportamento é outra coisa superimportante da orientação a objetos.
Só queria deixar bem claro esses dois pontos, orientação a objetos tem herança, tem propriedades, tem métodos, tem uma série de coisas, mas duas coisas superimportantes são polimorfismo e encapsulamento. Se você sair desse curso com essas duas coisas na cabeça, eu já estou feliz.
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.validaAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static validaAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }        
}