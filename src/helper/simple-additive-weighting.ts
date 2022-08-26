const percent = [30, 40, 10, 10, 10];

function count(arr: any, namaPetani: any) {
  let hasil: any[] = [];

  arr.forEach((element: any, index: any) => {
    let max = Math.max(...arr[index]);
    hasil.push(arr[index].map((e: any) => e / max));
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
    output.push({ id: namaPetani[i], score: Math.round(real) });
  }

  // return output.sort((a, b) => {
  //   return b - a;
  // });
  return output;
}

export default function processArray(arr: any) {
  const result: any[] = [];
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

  kriteria[0].forEach((element: any, index: any) => {
    result.push(
      kriteria.map((e: any, indexMap: any) => kriteria[indexMap][index])
    );
  });

  const output = count(result, namaPetani);

  return output;
}
