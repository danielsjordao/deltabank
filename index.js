import { Cliente } from "./Cliente/Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js"; //dois cliques ctrl+D altera as próximas referências.
import { SistemaAutenticacao } from "./SistemaAutenticacao/SistemaAutenticacao.js";

const diretor = new Diretor("Monalise", 20000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Filipe", 10000, 98765432100);
gerente.cadastrarSenha("987654");

const cliente = new Cliente("Zeine", 13245768900, "123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "987654"); //E essa propriedade dos objetos de tomarem várias formas ou até de recebermos aqui na autenticação um funcionário mais genérico e conseguir reutilizá-lo, independentemente de ele ser um diretor ou um gerente, é chamado de polimorfismo.
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123")

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
