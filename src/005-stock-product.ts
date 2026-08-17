interface Product {
  name: string;
  price: number;
  stock: number;
}

const products: Product[] = [
  {
    name: "Mouse",
    price: 100,
    stock: 10,
  },
  {
    name: "Keyboard",
    price: 250,
    stock: 5,
  },
  {
    name: "Monitor",
    price: 1200,
    stock: 2,
  },
];

export function calculateTotalStockValue(productList: Product[]) {
  const getPriceAndStock = productList.map((product) => {
    return product.price * product.stock;
  });

  const sumValues = getPriceAndStock.reduce((acc, vl) => {
    return acc + vl;
  }, 0);

  return sumValues;
}

console.log(calculateTotalStockValue(products));
