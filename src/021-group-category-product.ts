interface Product {
  name: string;
  category: string;
  price: number;
}

const products: Product[] = [
  { name: "Notebook", category: "eletronicos", price: 3500 },
  { name: "Mouse", category: "eletronicos", price: 100 },
  { name: "Arroz", category: "alimentos", price: 30 },
  { name: "Feijão", category: "alimentos", price: 8 },
  { name: "Teclado", category: "eletronicos", price: 200 },
  { name: "Leite", category: "alimentos", price: 6 },
];

function getTotalByCategory(products: Product[]) {
  let object: Record<string, number> = {};

  for (let index of products) {
    if (index.category === "eletronicos") {
      if (object[index.category] !== undefined) {
        object[index.category] += index.price;
      } else {
        object[index.category] = index.price;
      }
    }

    if (index.category === "alimentos") {
      if (object[index.category] !== undefined) {
        object[index.category] += index.price;
      } else {
        object[index.category] = index.price;
      }
    }
  }

  return object;
}

console.log(getTotalByCategory(products));
