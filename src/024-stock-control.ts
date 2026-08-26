interface Product {
  id: number;
  name: string;
  stock: number;
}

interface Movement {
  productId: number;
  type: "entry" | "exit";
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: "Notebook", stock: 10 },
  { id: 2, name: "Mouse", stock: 20 },
  { id: 3, name: "Teclado", stock: 5 },
];

const movements: Movement[] = [
  { productId: 1, type: "exit", quantity: 3 },
  { productId: 2, type: "entry", quantity: 10 },
  { productId: 1, type: "entry", quantity: 5 },
  { productId: 3, type: "exit", quantity: 2 },
  { productId: 2, type: "exit", quantity: 25 },
];

function updateStock(products: Product[], moviments: Movement[]) {
  for (
    let indexMovements = 0;
    indexMovements < moviments.length;
    indexMovements++
  ) {
    for (
      let indexProducts = 0;
      indexProducts < products.length;
      indexProducts++
    ) {
      if (moviments[indexMovements].productId === products[indexProducts].id) {
        if (moviments[indexMovements].type === "entry") {
          products[indexProducts].stock += moviments[indexMovements].quantity;
        } else if (moviments[indexMovements].type === "exit") {
          if (
            products[indexProducts].stock >= moviments[indexMovements].quantity
          ) {
            products[indexProducts].stock -= moviments[indexMovements].quantity;
          }
        }
      }
    }
  }

  return products;
}

console.log(updateStock(products, movements));
