
const items = ["baju", "celana", "topi", "jaket", "sepatu"];
const colors = ["merah", "hijau", "kuning", "ungu", "pink", "maroon", "jambon"];
const prices = ["Diskon", "Sale", "Diskon", "Sale", "Sale"];

const baseLength = items.length;


const itemsDetail = colors.map((color, baseIndex) => {

  const index = baseIndex % baseLength;
  return `${items.at(index)} ${color} ${prices.at(index)}`;
});

console.log({ itemsDetail })




// [“Baju Merah Diskon”, “Celana hijau Sale”, “topi kuning diskon ”, “jaket ungu sale”, “sepatu
//   pink sale”] dengan array dinamis dimana jika ditambahkan kondisi seper4
// [“merah”,”kuning”,”hijau”,”pink”,”ungu”,”maroon”]menjadi
// [“Baju Merah Diskon”, “Celana hijau Sale”, “topi kuning diskon ”, “jaket ungu sale”, “sepatu
//   pink sale”, “Baju Maroon Diskon” ]
// TODO Kenapa urutan warna dan hasil concatenate berbeda  ????