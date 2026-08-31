interface Grade {
  student: string;
  subject: string;
  grade: number;
}

const grades: Grade[] = [
  { student: "Lucas", subject: "Math", grade: 8 },
  { student: "Maria", subject: "Math", grade: 6 },
  { student: "Lucas", subject: "English", grade: 5 },
  { student: "João", subject: "Math", grade: 9 },
  { student: "Maria", subject: "English", grade: 7 },
  { student: "Lucas", subject: "Science", grade: 4 },
  { student: "João", subject: "English", grade: 8 },
  { student: "Maria", subject: "Science", grade: 9 },
];

function getStudentsWithLowAverage(grades: Grade[]) {
  const object: Record<string, { total: number; count: number }> = {};
  let badStudant = [];

  for (let index of grades) {
    if (object[index.student] === undefined) {
      object[index.student] = {
        total: index.grade,
        count: 1,
      };
    } else {
      ((object[index.student].total += index.grade),
        (object[index.student].count += 1));
    }
  }

  for (let [key, value] of Object.entries(object)) {
    let media = value.total / value.count;

    if (media < 6) {
      badStudant.push(key);
    }
  }
  return badStudant;
}

console.log(getStudentsWithLowAverage(grades));
