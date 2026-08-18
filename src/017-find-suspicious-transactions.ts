interface Transaction {
  id: number;
  user: string;
  amount: number;
}

const transactions: Transaction[] = [
  { id: 1, user: "Nathanael", amount: 500 },
  { id: 2, user: "Carlos", amount: 1200 },
  { id: 3, user: "Nathanael", amount: 2500 },
  { id: 4, user: "Ana", amount: 800 },
  { id: 5, user: "Carlos", amount: 3500 },
  { id: 6, user: "João", amount: 300 },
];

function findSuspiciousTransactions(transactions: Transaction[]) {
  const suspicious: Transaction[] = [];

  for (let index: number = 0; index < transactions.length; index++) {
    if (transactions[index].amount > 2000) {
      suspicious.push({
        user: transactions[index].user,
        amount: transactions[index].amount,
      });
    }
  }
  return suspicious;
}

console.log(findSuspiciousTransactions(transactions));
