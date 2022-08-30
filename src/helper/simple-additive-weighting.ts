const percent = [30, 40, 10, 10, 10];

function count(arr: any, namaPetani: any) {
  let hasil: any[] = [];

  arr.forEach((element: any, index: any) => {
    if (index === 0 || index === 1 || index === 3 || index === 4) {
      let min = Math.min(...arr[index]);
      hasil.push(arr[index].map((e: any) => min / e));
    } else {
      let max = Math.max(...arr[index]);
      hasil.push(arr[index].map((e: any) => e / max));
    }
  });

  let output = [];
  let real = 0;

  for (let i = 0; i < hasil[0].length; i++) {
    real = 0;
    for (let j = 0; j < hasil.length; j++) {
      real = real + hasil[j][i] * percent[j];
    }
    if (real < 0) {
      real = 0;
    }
    // output.push({ id: namaPetani[i], score: Math.round(real) });
    output.push({ id: namaPetani[i], score: real });
  }

  // return output.sort((a, b) => {
  //   return b - a;
  // });
  return output;
}

export default function processArray(arr: any) {
  const kriteria: any[] = [];
  const namaPetani: any[] = [];

  arr.forEach((petani: any) => {
    kriteria.push(petani.kriteria);
    namaPetani.push(petani.id);
  });

  if (kriteria.length === 0) {
    const output = [
      {
        name: "-",
        score: "-",
      },
    ];

    return output;
  }

  const result = kriteria[0].map((element: any, index: any) =>
    kriteria.map((row) => row[index])
  );

  const output = count(result, namaPetani);

  return output;
}
