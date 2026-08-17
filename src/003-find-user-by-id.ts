interface User {
  id: number;
  name: string;
  active: boolean;
}

export const users: User[] = [
  { id: 1, name: "Nathanael", active: true },
  { id: 2, name: "Maria", active: false },
  { id: 3, name: "João", active: true },
];

export function findUserById(users: User[], id: number): User | undefined {
  return users.find((user) => user.id === id);
}
