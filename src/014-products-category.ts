interface Product {
  id: number;
  name: string;
  category: "Eletrônicos" | "Livros" | "Games";
}

const products: Product[] = [
  { id: 1, name: "Mouse", category: "Eletrônicos" },
  { id: 2, name: "Clean Code", category: "Livros" },
  { id: 3, name: "Teclado", category: "Eletrônicos" },
  { id: 4, name: "God of War", category: "Games" },
  { id: 5, name: "Domain-Driven Design", category: "Livros" },
  { id: 6, name: "Monitor", category: "Eletrônicos" },
];

function groupProductsByCategory(products: Product[]) {
  const result = {
    Eletrônicos: [],
    Livros: [],
    Games: [],
  };
  for (
    let productsForCategory = 0;
    productsForCategory < products.length;
    productsForCategory++
  ) {
    if (products[productsForCategory].category === "Eletrônicos") {
      result.Eletrônicos.push(products[productsForCategory].name);
    }

    if (products[productsForCategory].category === "Livros") {
      result.Livros.push(products[productsForCategory].name);
    }

    if (products[productsForCategory].category === "Games") {
      result.Games.push(products[productsForCategory].name);
    }
  }
  return result;
}

console.log(groupProductsByCategory(products));
