interface Product {
  id: number;
  name: string;
  stock: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mouse",
    stock: 10,
  },
  {
    id: 2,
    name: "Teclado",
    stock: 5,
  },
  {
    id: 3,
    name: "Monitor",
    stock: 2,
  },
];

function updateStock(products: Product[], productId: number, quantity: number) {
  for (
    let updateProductStock: number = 0;
    updateProductStock < products.length;
    updateProductStock++
  ) {
    if (productId === products[updateProductStock].id) {
      if (quantity > products[updateProductStock].stock) {
        return "Insufficient stock";
      }

      products[updateProductStock].stock =
        products[updateProductStock].stock - quantity;

      return products[updateProductStock];
    }
  }
  return "Product not found";
}

console.log(updateStock(products, 1, 2));
