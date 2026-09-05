interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

const users: User[] = [
  { id: 1, name: "Lucas", email: "lucas@email.com", active: true },
  { id: 2, name: "Maria", email: "maria@email.com", active: false },
  { id: 3, name: "João", email: "joao@email.com", active: true },
  { id: 4, name: "Pedro", email: "pedro@email.com", active: true },
  { id: 5, name: "Ana", email: "ana@email.com", active: false },
];

function validateUsers(users: User[]) {
  const invalidUsers = [];

  for (let index of users) {
    if (index.active === false) {
      invalidUsers.push(index.id);
    }
  }

  return invalidUsers;
}

console.log(validateUsers(users));
