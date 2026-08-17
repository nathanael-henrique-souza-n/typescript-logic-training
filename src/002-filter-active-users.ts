interface User {
  name: string;
  active: boolean;
}

const users: User[] = [
  { name: "Nathanael", active: true },
  { name: "Maria", active: false },
  { name: "João", active: true },
  { name: "Pedro", active: false },
];

export function userFilterActive() {
  return users.filter((usersActive) => usersActive.active === true);
}
