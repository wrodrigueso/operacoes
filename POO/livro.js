class livro {
construtor(titulo,autor,paginas) {
    this.autor=autor;
    this.paginas=paginas;
    this.paginaAtual=0; //Começa na pag
    this.lido=false;

}
lerPaginas(numerosPaginas){
    if(this.lido) {
        return `Voce ja terminou de ler${this.titulo}!`;
    }
    (this.paginaAtual += this.paginas)

    if (this.paginaAtual >= this.paginas) {
        this.paginaAtual = this.paginas;
        this.lido = true;
        return `Parabens ! Voçe terminou de ler ${this.titulo}!`;
    }
        return `Voçe leu ${numeroPaginas} páginas. ${this.paginaAtual} de ${this.paginas}.`;

}
verProgresso() {
    if (this.lido) {
        return`"${this.titulo} COMPLETO!"`;
    }
    const porcentagem = Math.round(this.paginasAtual / this.paginas *100);
    return `"${this.titulo}" - Progresso ${this.paginaAtual}/${this.paginas}paginas(${porcentagem}%)`; 
}      
reiniciarLeitura(){
    this.paginaAtual=0;
    this.lido=false;
    return`Leitura de "${this.titulo}"reiniciar`;
}
mostrarDetalhes() {
    const status = this.lido ? "LIDO" :"NÃO LIDO";
    return`
    Titulo:${this.titulo}
    Autor:${this.autor}
    paginas:${this.paginas}
    Status:${status}
    paginas atual:${this.paginas}
   `.trim();
    }

}
     const livro1 = new livro("Dom casmurro", "Macho de Assis", 200);
     const livro2 = new livro("O pequeno principe","Antoine de Saint-Exupery", 120);   

console.log("\n MOSTRANDO OS RESULTADOS");
console.log(livro1.mostrarDetalhes()) ;
console.log("");

//Simulando = leitura
console.log("começar a ler...");
console.log(livro1.lerPaginas(50));
console.log(livro1.verproguesso());
console.log("");

console.log(livro1.lerPaginas(100))
console.log(livro1.paginas.verprogresso());
console.log("");

//testando o segundo livro
console.log("começando a ler o segundo livro...");
console.log(livro2.lerPaginas(30));
console.log(livro2.verprogresso());
console.log("");
