interface Access {
  user: string;
  action: "login" | "logout";
}

const accesses: Access[] = [
  { user: "Lucas", action: "login" },
  { user: "Maria", action: "login" },
  { user: "Lucas", action: "logout" },
  { user: "João", action: "login" },
  { user: "Maria", action: "logout" },
  { user: "João", action: "login" },
  { user: "Pedro", action: "login" },
  { user: "João", action: "logout" },
  { user: "Pedro", action: "login" },
];

function getSuspiciousUsers(accesses: Access[]) {
  let object: Record<string, string> = {};
  let userssuspicious: string[] = [];

  for (let index of accesses) {
    if (object[index.user] !== undefined) {
      if (index.action === "login") {
        if (object[index.user] === index.action) {
          userssuspicious.push(index.user);
        }
        object[index.user] = index.action;
      }
    } else if (object[index.user] === undefined) {
      object[index.user] = index.action;
    }
  }

  return userssuspicious;
}

console.log(getSuspiciousUsers(accesses));
