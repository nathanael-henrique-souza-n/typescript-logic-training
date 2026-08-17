interface User {
  id: number;
  name: string;
  active: boolean;
}

const users: User[] = [
  {
    id: 1,
    name: "Ana",
    active: false,
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
];

function findFirstActiveUser1(users: User[]): User | undefined {
  const firstUser = users.find((userActive) => userActive.active === true);

  return firstUser;
}

console.log(findFirstActiveUser1(users));

console.log("================================");

function findFirstActiveUser2(users: User[]) {
  for (const userActive of users) {
    if (userActive.active === false) continue;

    return userActive;
  }

  return undefined;
}

console.log(findFirstActiveUser2(users));
