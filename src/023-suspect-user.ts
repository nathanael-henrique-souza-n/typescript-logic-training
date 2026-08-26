interface Transaction {
  id: number;
  user: string;
  amount: number;
  status: "approved" | "rejected";
}

const transactions: Transaction[] = [
  { id: 1, user: "Nathanael", amount: 500, status: "approved" },
  { id: 2, user: "Lucas", amount: 2500, status: "approved" },
  { id: 3, user: "Maria", amount: 300, status: "approved" },
  { id: 4, user: "Lucas", amount: 1800, status: "approved" },
  { id: 5, user: "Nathanael", amount: 2000, status: "rejected" },
  { id: 6, user: "Lucas", amount: 1200, status: "approved" },
  { id: 7, user: "Maria", amount: 1500, status: "approved" },
];

function getSuspiciousUsers(transactions: Transaction[]) {
  let user: Record<string, { count: number; total: number }> = {};

  for (let index of transactions) {
    if (index.status !== "approved") continue;
    if (user[index.user] !== undefined) {
      user[index.user].count += 1;
      user[index.user].total += index.amount;
    } else {
      user[index.user] = {
        count: 1,
        total: index.amount,
      };
    }
  }

  for (let key in user) {
    if (user[key].count >= 2 && user[key].total > 3000) {
      return {
        user: key,
        total: user[key].total,
      };
    }
  }
}

console.log(getSuspiciousUsers(transactions));
