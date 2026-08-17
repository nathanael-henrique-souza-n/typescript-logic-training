interface Order {
  id: number;
  customer: string;
  status: "pending" | "paid" | "canceled";
}

const orders: Order[] = [
  {
    id: 1,
    customer: "Ana",
    status: "paid",
  },
  {
    id: 2,
    customer: "João",
    status: "pending",
  },
  {
    id: 3,
    customer: "Maria",
    status: "paid",
  },
  {
    id: 4,
    customer: "Pedro",
    status: "canceled",
  },
  {
    id: 5,
    customer: "Lucas",
    status: "pending",
  },
];

export function getCustomersByStatus(
  orders: Order[],
  statusClient: string,
): string[] {
  const clientsPaid: string[] = [];
  for (let clietpaid = 0; clietpaid < orders.length; clietpaid++) {
    if (orders[clietpaid].status === statusClient) {
      clientsPaid.push(orders[clietpaid].customer);
    }
  }
  return clientsPaid;
}

console.log(getCustomersByStatus(orders, "paid"));
