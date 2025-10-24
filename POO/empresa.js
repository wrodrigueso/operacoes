function Funcionario(nome, salario, departamento) {
this.nome = nome;
this.salario = salario;
this.departamento = departamento;
this.ativo = true;
}

Funcionario.prototype.trabalhar = function() {
    console.log(`${this.nome} esta trabalhando no departamento de ${this.departamento}`);

};

//herança classica: baseada em classes,extrutura fixa,copia um comportamento e herarquia
//herança proyotipica: baseada em objetos, estrutura dinamica, delega comportamento e cadei


Funcionario.prototype.receberSalario = function() {
    console.log(`${this.nome} recebeu o salario de R$ ${this.salario.toFixed(2)}`);

};
Funcionario.prototype.demitir = function() {
    this.ativo = false;
        console.log(`${this.nome} foi demitido(a)`);
};

Funcionario.prototype.info = function() {
    const status = this.ativo ? "ativo"  : "Inativo";
    console.log(` Functionario : ${this.nome} | Salario: R$ ${this.salario.toFixed(2)}
    depto: ${this.departamento} | Status: ${this.status}`);
};

//construtor derivado: Desenvolvedor
function Desenvolvedor(nome, salario, linguagem,senioridade) {
    Funcionario.call(this,nome,salario, "11");
    this.linguagem = linguagem;
    this.senioridade = senioridade;
    this.proijetos = [];
};

//Configuração a herança prototipica
Desenvolvedor.prototype = Object.create(Funcionario.prototype);
Desenvolvedor.prototype.constructor = Desenvolvedor;

Desenvolvedor.prototype.progamar = function() {
    console.log(`${this.nome} esta progamado em ${this.linguagem}`)
}

//Criar  um metodo p/ que o desenvolvedor faça projetos " adicionarProjetos"
Desenvolvedor.prototype.adicionarProjetos = function(projeto){
    this.projetos.push(projeto)
    console.log(`${this.nome} foi adicionado ao projeto: ${projeto}`);
};

Desenvolvedor.prototype.trabalhar = function(){
    console.log(`${this.nome} (${this.senioridade}) esta desenvolvendo
        software`);

};
Desenvolvedor.prototype.info = function(){
    const status = this.ativo? "ativo" : "inativo";
    console.log(`desenvolvedor : ${this.nome} | ${this.Senioridade} | ${this.linguagem} | projetos: ${this.projetos.length} | ${this.status} `);
};
 //crontructor derivada: Gerente
 function Gerente(nome, salario, departamento, equipe) {
    Funcionario.call(thisis, nome, salario,departamento)
    this.equipe = equipe || [];
    this.bonus = 0;
 };

 Gerente.prototype = Object.create(Funcionario.prototype);
 Gerente.prototype.constructor = Gerente;

 Gerente.prototype.gerenciar = function() {
    console.log(`${this.nome} esta gerenciando uma equipe de ${this.equipe.length}
    pessoas`);
 };

 Gerente.prototype.adicionarFuncionario = function(funcionario) {
    this.equipe.push(funcionario)
    console.log(`${funcionario} foi adicionado a equipe de ${this.nome}`);
 };

 Gerente.prototype.darBonus = function(valor) {
    this.bonus = valor;
    console.log(`${this.nome} recebeu um bonus de R$ ${valor.toFixed(2)}`);
 };

 Gerente.prototype.receberSalario = function(){
    const total = this.salario + this.bonus;
    console.log(`${this.nome} recebeu Salario + bonus : R$ ${total.toFixed(2)}`);
    this.bonus = 0;
 };

  console.log("*** TESTANDO HERANÇA PROTOTIPICA***");

  const funcionario1 = new Funcionario("diana", 3000,  "RH");
  funcionario1.trabalhar();
  funcionario1.receberSalario();
  funcionario1.info();
  console.log();

  const dev = new Desenvolvedor("pedro", 6000,"javascript", "sênior");
  dev.progamar();
  dev.adicionarProjetos("Sistemas de E-comerce");
  dev.trabalhar();
  dev.receberSalário();
  console.log();

  const GERENTE = new Gerente("Pedro",6000,"Gerência","TI");
  grente.dicionarFuncionario("Anna G.");
  gerente.gerenciar();
  gerente.darBonus(3000);
  gerente.receberSalario();


 

