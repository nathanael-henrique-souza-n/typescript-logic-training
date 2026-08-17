interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Ana",
  },
  {
    id: 2,
    name: "João",
  },
  {
    id: 1,
    name: "Ana",
  },
  {
    id: 3,
    name: "Maria",
  },
  {
    id: 2,
    name: "João",
  },
];

export function removeDuplicateUsers(users: User[]): User[] {
  const newListUser: User[] = [];

  for (const user of users) {
    let userAlreadyExists = false;

    for (const savedUser of newListUser) {
      if (savedUser.id === user.id) {
        userAlreadyExists = true;
        break;
      }
    }

    if (!userAlreadyExists) {
      newListUser.push(user);
    }
  }

  return newListUser;
}

console.log(removeDuplicateUsers(users));
