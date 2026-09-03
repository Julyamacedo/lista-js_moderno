const pedido = {produto: "mause",  preco: 250, quantidade: 2
};

const calcularTotal = (preco, quantidade) => {
    return preco * quantidade;
};

const { produto, preco, quantidade } = pedido;

const total = calcularTotal(preco, quantidade);

console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor unitário: R$ ${preco}`);
console.log(`Total: R$ ${total}`);