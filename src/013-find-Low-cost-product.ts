interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mouse",
    price: 120,
  },
  {
    id: 2,
    name: "Teclado",
    price: 250,
  },
  {
    id: 3,
    name: "Headset",
    price: 180,
  },
  {
    id: 4,
    name: "Monitor",
    price: 950,
  },
  {
    id: 5,
    name: "Mousepad",
    price: 45,
  },

  {
    id: 6,
    name: "Sansung S26 Ultra",
    price: 30,
  },
];

function getCheapestProduct(products: Product[]) {
  let firstUser = products[0];
  for (
    let getLowCostProduct = 0;
    getLowCostProduct < products.length;
    getLowCostProduct++
  ) {
    if (products[getLowCostProduct].price < firstUser.price) {
      firstUser = products[getLowCostProduct];
    }
  }
  return firstUser;
}

console.log(getCheapestProduct(products));
