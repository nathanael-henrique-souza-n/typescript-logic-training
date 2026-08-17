interface Customer {
  id: number;
  name: string;
  totalSpent: number;
}

const customers: Customer[] = [
  {
    id: 1,
    name: "Ana",
    totalSpent: 2500,
  },
  {
    id: 2,
    name: "João",
    totalSpent: 4200,
  },
  {
    id: 3,
    name: "Maria",
    totalSpent: 3900,
  },
  {
    id: 4,
    name: "Pedro",
    totalSpent: 5100,
  },
];

function getTopCustomer(customers: Customer[]) {
  let firstClient = customers[0];
  for (let getCustomer = 0; getCustomer < customers.length; getCustomer++) {
    if (customers[getCustomer].totalSpent > firstClient.totalSpent) {
      firstClient = customers[getCustomer];
    }
  }
  return firstClient;
}

console.log(getTopCustomer(customers));
