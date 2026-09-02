interface Order {
  id: number;
  customer: string;
  product: string;
  quantity: number;
}

const orders: Order[] = [
  { id: 1, customer: "Lucas", product: "Notebook", quantity: 1 },
  { id: 2, customer: "Maria", product: "Mouse", quantity: 2 },
  { id: 3, customer: "Lucas", product: "Notebook", quantity: 1 },
  { id: 4, customer: "João", product: "Teclado", quantity: 3 },
  { id: 5, customer: "Maria", product: "Mouse", quantity: 1 },
  { id: 6, customer: "Lucas", product: "Mouse", quantity: 2 },
  { id: 7, customer: "Lucas", product: "Notebook", quantity: 2 },
];

function getRepeatedOrders(orders: Order[]) {
  let object: Record<string, number> = {};
  let array = [];
  let result = [];

  for (let index of orders) {
    if (object[index.customer + index.product] !== undefined) {
      object[index.customer + index.product] += 1;
    } else {
      object[index.customer + index.product] = 1;
    }
  }

  for (let key in object) {
    if (object[key] > 1) {
      array.push(key.split(/(?=[A-Z])/));
    }
  }

  for (let index of array) {
    let custumer = index[0];
    let product = index[1];
    result.push({ customer: custumer, product: product });
  }
  return result;
}

console.log(getRepeatedOrders(orders));
