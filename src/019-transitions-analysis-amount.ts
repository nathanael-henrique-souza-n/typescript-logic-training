interface Transaction {
  id: number;
  user: string;
  amount: number;
  status: "approved" | "pending" | "rejected";
}

const transactions: Transaction[] = [
  { id: 1, user: "Nathanael", amount: 500, status: "approved" },
  { id: 2, user: "Lucas", amount: 1500, status: "approved" },
  { id: 3, user: "Maria", amount: 300, status: "rejected" },
  { id: 4, user: "Nathanael", amount: 2000, status: "approved" },
  { id: 5, user: "Ana", amount: 700, status: "pending" },
  { id: 6, user: "Lucas", amount: 2500, status: "approved" },
  { id: 7, user: "Lucas", amount: 1800, status: "approved" },
];

function getSuspiciousTransactions(transactions: Transaction[]) {
  let count: Record<string, number> = {};

  for (let index = 0; index < transactions.length; index++) {
    if (
      transactions[index].status === "approved" &&
      transactions[index].amount > 1000
    ) {
      if (count[transactions[index].user] !== undefined) {
        count[transactions[index].user] += 1;
      } else {
        count[transactions[index].user] = 1;
      }
    }
  }
  return count;
}

console.log(getSuspiciousTransactions(transactions));
