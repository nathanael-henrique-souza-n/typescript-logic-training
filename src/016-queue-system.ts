interface queueSystem {
  name: string;
  priority: boolean;
}

const queue = [
  { name: "Nathanael", priority: false },
  { name: "Carlos", priority: true },
  { name: "João", priority: false },
  { name: "Marcos", priority: true },
  { name: "Ana", priority: false },
];

function organizeQueue(queue: queueSystem[]) {
  let priorityTrue: queueSystem[] = [];
  let priorityFalse: queueSystem[] = [];

  for (let index: number = 0; index < queue.length; index++) {
    if (queue[index].priority === true) {
      priorityTrue.push(queue[index]);
    }

    if (queue[index].priority === false) {
      priorityFalse.push(queue[index]);
    }
  }

  let result = [...priorityTrue, ...priorityFalse];
  return result;
}

console.log(organizeQueue(queue));
