interface User {
  id: number;
  name: string;
  active: boolean;
}

const users: User[] = [
  {
    id: 1,
    name: "Ana",
    active: true,
  },
  {
    id: 2,
    name: "João",
    active: false,
  },
  {
    id: 3,
    name: "Maria",
    active: true,
  },
  {
    id: 4,
    name: "Pedro",
    active: true,
  },
  {
    id: 5,
    name: "Lucas",
    active: false,
  },
];

function findActiveUsers(users: User[]) {
  let activeUsers: User[] = [];
  for (let user = 0; user < users.length; user++) {
    if (users[user].active === true) {
      activeUsers.push(users[user]);
    }
  }
  return `Have ${activeUsers.length} actives users`;
}

console.log(findActiveUsers(users));
