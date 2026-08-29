interface Request {
  ip: string;
  endpoint: string;
  status: "success" | "failed";
}

const requests: Request[] = [
  { ip: "192.168.0.1", endpoint: "/login", status: "failed" },
  { ip: "10.0.0.1", endpoint: "/users", status: "success" },
  { ip: "192.168.0.1", endpoint: "/login", status: "failed" },
  { ip: "172.16.0.5", endpoint: "/products", status: "success" },
  { ip: "192.168.0.1", endpoint: "/login", status: "failed" },
  { ip: "10.0.0.1", endpoint: "/users", status: "failed" },
  { ip: "192.168.0.1", endpoint: "/users", status: "success" },
];

function getBlockedIPs(requests: Request[]) {
  let object = {};
  let blockApi = [];

  for (let index of requests) {
    if (index.status === "success") continue;

    if (index.status === "failed") {
      if (object[index.ip] !== undefined) {
        object[index.ip] += 1;
      } else {
        object[index.ip] = 1;
      }
    }
  }

  for (let key in object) {
    if (object[key] >= 3) {
      blockApi.push(key);
    }
  }

  return blockApi;
}

console.log(getBlockedIPs(requests));
