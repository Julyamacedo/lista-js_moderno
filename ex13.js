const produto = { nome: "mascara de cilios", preco: 80
};

const mostrarProduto = ({ nome, preco }) => {
    return `Produto: ${nome} - Preco: R$ ${preco}`;
};

console.log(mostrarProduto(produto));