interface User {
  id: number;
  name: string;
  email: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Nathanael",
    email: "nathanael@gmail.com",
  },
  {
    id: 2,
    name: "Maria",
    email: "maria@gmail.com",
  },
  {
    id: 3,
    name: "João",
    email: "joao@gmail.com",
  },
];

export function findByEmail(user: User[], email: string) {
  const registredEmail = user.find((userEmail) => userEmail.email === email);

  if (registredEmail) {
    return true;
  } else {
    return false;
  }
}
