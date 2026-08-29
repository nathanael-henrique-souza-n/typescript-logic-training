interface Access {
  user: string;
  date: string;
  action: "login" | "logout";
}

const accesses: Access[] = [
  { user: "Nathanael", date: "08:00", action: "login" },
  { user: "Lucas", date: "08:10", action: "login" },
  { user: "Nathanael", date: "08:30", action: "logout" },
  { user: "Lucas", date: "08:40", action: "logout" },
  { user: "Maria", date: "09:00", action: "login" },
  { user: "Lucas", date: "09:10", action: "login" },
  { user: "Maria", date: "09:30", action: "logout" },
];

function getActiveUsers(accesses: Access[]) {
  const usersNoLogout = {};
  const activeUsers = [];
  for (let index of accesses) {
    if (index.action === "login") {
      usersNoLogout[index.user] = true;
    } else if (index.action === "logout") {
      usersNoLogout[index.user] = false;
    }
  }

  for (let key in usersNoLogout) {
    if (usersNoLogout[key] === true) {
      activeUsers.push(key);
    }
  }

  return activeUsers;
}

console.log(getActiveUsers(accesses));
