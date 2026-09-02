interface Product {
  id: number;
  name: string;
  stock: number;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Notebook", stock: 5, price: 3500 },
  { id: 2, name: "Mouse", stock: 0, price: 80 },
  { id: 3, name: "Teclado", stock: 3, price: 150 },
  { id: 4, name: "Monitor", stock: 0, price: 900 },
  { id: 5, name: "Headset", stock: 2, price: 250 },
  { id: 6, name: "Webcam", stock: 0, price: 300 },
];

function getOutOfStockProducts(products: Product[]) {
  let outOfStockProducts = [];
  let result = [];

  for (let product of products) {
    if (product.stock === 0) {
      outOfStockProducts.push(product);
    }
  }

  for (let product of outOfStockProducts) {
    result.push({ id: product.id, name: product.name });
  }

  return JSON.stringify(result, null, 2);
}

console.log(getOutOfStockProducts(products));
