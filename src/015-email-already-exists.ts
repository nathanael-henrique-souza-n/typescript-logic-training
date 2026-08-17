interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Ana",
    email: "ana@email.com",
  },
  {
    id: 2,
    name: "João",
    email: "joao@email.com",
  },
  {
    id: 3,
    name: "Maria",
    email: "maria@email.com",
  },
];

function emailAlreadyExists(users: User[], email: string) {
  for (let emailExist = 0; emailExist < users.length; emailExist++) {
    if (users[emailExist].email === email) {
      return true;
    } else {
      return true;
    }
  }
}

console.log(emailAlreadyExists(users, "maria@email.com"));
