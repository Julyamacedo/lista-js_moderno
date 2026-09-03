const pessoa = { nome: "julya", idade: 17, profissao: "Desenvolvedora"
};

const apresentarPessoa = ({ nome, idade, profissao }) => {
    return `${nome} tem ${idade} anos e trabalha como ${profissao}.`;
};

console.log(apresentarPessoa(pessoa));