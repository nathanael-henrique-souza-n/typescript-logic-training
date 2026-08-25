interface Order {
  id: number;
  customer: string;
  items: number;
  total: number;
  status: "paid" | "pending" | "cancelled";
}

const orders: Order[] = [
  { id: 1, customer: "Nathanael", items: 3, total: 150, status: "paid" },
  { id: 2, customer: "Lucas", items: 0, total: 200, status: "paid" },
  { id: 3, customer: "Maria", items: 5, total: 0, status: "paid" },
  { id: 4, customer: "Ana", items: 2, total: 80, status: "pending" },
  { id: 5, customer: "João", items: 1, total: 50, status: "cancelled" },
  { id: 6, customer: "Pedro", items: 4, total: 300, status: "paid" },
];

function validateOrders(orders: Order[]) {
  const invalidOrder = [];
  for (let index = 0; index < orders.length; index++) {
    if (
      orders[index].status === "pending" ||
      orders[index].status === "cancelled"
    )
      continue;

    if (orders[index].status === "paid") {
      if (orders[index].items <= 0) {
        invalidOrder.push({
          id: orders[index].id,
          customer: orders[index].customer,
          reason: "invalid items",
        });
      } else if (orders[index].total <= 0) {
        invalidOrder.push({
          id: orders[index].id,
          customer: orders[index].customer,
          reason: "invalid total",
        });
      }
    }
  }

  return invalidOrder;
}

console.log(validateOrders(orders));
